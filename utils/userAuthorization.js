import { toStringCookies } from "./toStringCookies";

const userAuthorization = async (request) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
      {
        credentials: "include",
        headers: {
          Cookie: toStringCookies(request.cookies),
        },
      }
    );
    const { data } = await response.json();
    const { user } = data || {};
    return user;
  } catch (error) {
    return null;
  }
};

export default userAuthorization;
