import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function industryStringFormatter(industry: string, subIndustry: string) {
  const formattedIndustry = `${industry}-${subIndustry.toLowerCase().replace(/ /g, "-")}`;
  return formattedIndustry;
}
