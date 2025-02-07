import { AzureFunction, HttpRequest } from "@azure/functions";
import { response } from "../../utils";
const SWA_EMU_AUTH_URI = process.env.SWA_EMU_AUTH_URI || `http://localhost:4242`;

const httpTrigger: AzureFunction = async function (context, req: HttpRequest) {
  const { post_logout_redirect_uri } = req.query;
  const location = `${SWA_EMU_AUTH_URI}/app/.auth/logout/complete?post_logout_redirect_uri=${post_logout_redirect_uri}`;

  context.res = response({
    context,
    status: 302,
    cookies: [
      {
        name: "StaticWebAppsAuthContextCookie",
        value: "deleted",
        path: "/",
        secure: false,
        HttpOnly: false,
        domain: "localhost",
        expires: new Date(1970),
      },
    ],
    headers: {
      location,
    },
  });
};

export default httpTrigger;
