export const setToLS = (key: string, value: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  localStorage.setItem(key, value);
};
export const getFromLS = (key:string) => {
  return localStorage.getItem(key) 
};
