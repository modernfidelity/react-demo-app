
import React from "react";

function count() {
    return "i am bob";
}

export const News = () => (
    <div>
        <h2>News</h2>

        {count()}

    </div>
);
