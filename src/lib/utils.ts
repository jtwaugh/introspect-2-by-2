import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const updateValueAtIndex = (values: any[], setValues: Function, index: number, newValue: string) => {
  const updatedValues = [...values];
  updatedValues[index] = newValue;
  setValues(updatedValues);
};