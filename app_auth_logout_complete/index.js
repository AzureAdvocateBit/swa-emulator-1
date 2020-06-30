const { response } = require("../utils");

module.exports = async function (context, req) {
  context.res = response({
    context,
    status: 302,
    cookies: [
      {
        name: "StaticWebAppsAuthCookie",
        value: "deleted",
        path: "/",
        secure: false,
        HttpOnly: false,
        domain: "127.0.0.1",
        expires: new Date(1970),
      },
      {
        name: "StaticSitesAuthCookie",
        value: "deleted",
        path: "/",
        secure: false,
        HttpOnly: false,
        domain: "127.0.0.1",
        expires: new Date(1970),
      },
      {
        name: "StaticWebAppsAuthContextCookie",
        value: "deleted",
        path: "/",
        secure: false,
        HttpOnly: false,
        domain: "127.0.0.1",
        expires: new Date(1970),
      },
    ],
    headers: {
      location: `http://127.0.0.1:4200/`,
    },
  });
};