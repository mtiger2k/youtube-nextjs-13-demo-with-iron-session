import React from "react";

import { getRequestCookie } from "../../lib/getRequestCookie";

async function AuthPage() {
    const user = await getRequestCookie();

    if (user)
        return (
            <div>
            <p>Email: {user.email}</p>
            </div>
        )
    else return (
        <p>Not logged in</p>
    )
}

export default AuthPage;