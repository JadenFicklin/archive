export const getTokenFromUrl = () => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substring(1));
  const token = params.get("access_token");
  const expiresIn = parseInt(params.get("expires_in") || "3600") * 1000;

  return { token, expiresIn };
};

export const saveToken = (token: string, expiresIn: number) => {
  const expirationTime = Date.now() + expiresIn;
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("expires_in", expirationTime.toString());
};

export const loadToken = () => {
  const token = window.localStorage.getItem("token");
  const expiresIn = parseInt(window.localStorage.getItem("expires_in") || "0");
  if (token && expiresIn > Date.now()) {
    return token;
  }
  return null;
};

export const clearToken = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("expires_in");
};
