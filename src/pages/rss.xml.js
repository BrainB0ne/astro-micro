import rss from "@astrojs/rss";
import { SITE } from "@/consts";
import { getCollection } from "astro:content";
import { getEntryDate, sortByDateDesc } from "@/lib/utils";

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
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: getEntryDate(item),
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
