// Telegram Bot Configuration (Client-side)
// This file calls a secure Cloudflare Function that handles the Telegram API
// Bot token and chat ID are stored as environment variables in Cloudflare

// Function to send message via Cloudflare Function proxy
// The actual Telegram API call happens server-side to keep credentials secure
export async function sendTelegramMessage(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Call the Cloudflare Function endpoint
    const response = await fetch('/api/send-telegram-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API error:', data);
      return {
        success: false,
        error: 'Failed to send message',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
