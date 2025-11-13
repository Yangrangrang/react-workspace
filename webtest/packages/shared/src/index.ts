// Shared utilities and types

export const formatDate = (date: Date): string => {
  console.log("formatDate");
  return date.toLocaleDateString();
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
  success: boolean;
};
