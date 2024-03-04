export const toStringCookies = (cookies) => {
  let stringCookies = "";
  cookies
    .getAll()
    .map(({ name = "", value = "" }) => (stringCookies += `${name}=${value}; `));
  return stringCookies.trimEnd();
};
