// Cloudflare Function: Secure Telegram Bot API Proxy
// This function runs server-side and keeps your bot token private

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  TURNSTILE_SITE_SECRET: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  cf_turnstile_response: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
}

// CORS headers for the response
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // In production, replace with your domain
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // Get environment variables
    const botToken = context.env.TELEGRAM_BOT_TOKEN;
    const chatId = context.env.TELEGRAM_CHAT_ID;
    const turnstileSiteSecret = context.env.TURNSTILE_SITE_SECRET;

    if (!botToken || !chatId || !turnstileSiteSecret) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Server configuration error',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse request body
    const data = (await context.request.json()) as ContactFormData;

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate that Turnstile response is not null/unknown or empty
    if (!data.cf_turnstile_response) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing Turnstile response',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const requestBody = new URLSearchParams({
      secret:
        turnstileSiteSecret,
      response: data.cf_turnstile_response,
    });

    const turnstileVerifyResponse = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody.toString(),
      });

    const turnstileVerifyData = (await turnstileVerifyResponse.json()) as TurnstileVerifyResponse;

    if (!turnstileVerifyData.success) {
      console.error('Turnstile verify error:', turnstileVerifyData);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid Turnstile',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Format message for Telegram
    const telegramMessage = formatTelegramMessage(
      data.name,
      data.email,
      data.subject,
      data.message
    );

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send message',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in Cloudflare Function:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

// Format message for Telegram
function formatTelegramMessage(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  return `
🔔 <b>NEW CONTACT FORM MESSAGE</b>

👤 <b>From:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
📝 <b>Subject:</b> ${escapeHtml(subject)}

💬 <b>Message:</b>
${escapeHtml(message)}

---
📅 <i>Sent from BrainByteZ</i>
  `.trim();
}

// Escape HTML special characters
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
