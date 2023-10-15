export const gerBaseUrl = (): string => {
  return process.env.PRO_CLEANER_BASE_API || 'http://localhost:8080/api/v1';
};
