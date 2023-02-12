import { unsealData } from "iron-session";
import { cookies } from "next/headers";

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie() {
  const cookieName = process.env.SESSION_COOKIE_NAME;
  const found = cookies().get(cookieName);

  if (!found) return null;

  const { user } = await unsealData(found.value, {
    password: process.env.SESSION_COOKIE_PASSWORD,
  });

  return user;
}