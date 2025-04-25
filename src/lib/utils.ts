import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomizeArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
