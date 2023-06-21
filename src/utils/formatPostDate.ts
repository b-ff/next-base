import { DEFAULT_LANGUAGE } from "@/config";
export const formatPostDate = (date: Date | number | string): string => new Intl.DateTimeFormat(DEFAULT_LANGUAGE, {
  dateStyle: "long",
  timeStyle: "short",
}).format(new Date(date));
