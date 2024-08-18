import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function relativeDate(date: Date) {
  return formatDistanceToNowStrict(date, { addSuffix: true });
}
