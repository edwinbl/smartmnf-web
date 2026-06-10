const KEY = "auth:from";

export const setReturnTo = (path: string) => {
  try {
    sessionStorage.setItem(KEY, path);
  } catch {
    /* ignore */
  }
};

export const getReturnTo = (fallback = "/"): string => {
  try {
    return sessionStorage.getItem(KEY) || fallback;
  } catch {
    return fallback;
  }
};

export const clearReturnTo = () => {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
};
