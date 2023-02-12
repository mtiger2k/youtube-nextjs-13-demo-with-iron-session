import React from "react";

import { getRequestCookie } from "../lib/getRequestCookie";

async function Home() {
    const user = await getRequestCookie();

    return (
        <div>
        I am the homepage
        <div>
            {user && <p>{user.email}</p>}
            {!user && <p>not logged in</p>}
        </div>
        </div>
        
    )
}

export default Home;