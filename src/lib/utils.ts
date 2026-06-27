import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

type SortableEntry = {
  id: string;
  data: {
    date: Date;
    time?: string;
  };
};

function getDateSortValue(entry: SortableEntry) {
  const date = new Date(entry.data.date);

  if (entry.data.time) {
    const [hours, minutes, seconds = "0"] = entry.data.time.split(":");
    date.setHours(Number(hours), Number(minutes), Number(seconds), 0);
  }

  return date.valueOf();
}

export function sortByDateDesc(a: SortableEntry, b: SortableEntry) {
  return getDateSortValue(b) - getDateSortValue(a) || b.id.localeCompare(a.id);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}
