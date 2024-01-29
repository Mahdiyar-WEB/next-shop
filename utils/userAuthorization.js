const userAuthorization = async (request) => {
  try {
    let cookies = "";
    request.cookies
      .getAll()
      .map(({ name = "", value = "" }) => (cookies += `${name}=${value}; `));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
      {
        credentials: "include",
        headers: {
          Cookie: cookies.trimEnd(),
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
