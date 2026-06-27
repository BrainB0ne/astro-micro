import rss from "@astrojs/rss";
import { SITE } from "@/consts";
import { getCollection } from "astro:content";
import { getEntryDate, sortByDateDesc } from "@/lib/utils";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function GET(context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const items = [...blog, ...projects].sort(sortByDateDesc);

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => {
      const link = `/${item.collection}/${item.id}/`;
      const fullUrl = new URL(link, context.site).toString();
      const preview = escapeHtml(item.data.description);

      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: getEntryDate(item),
        link,
        content: `<p>${preview}</p><p><a href="${fullUrl}">Continue reading</a></p>`,
      };
    }),
  });
}
