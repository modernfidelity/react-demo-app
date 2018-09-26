
import React from "react";
import axios from "axios";

function count() {



    axios.get('https://api.github.com/users/modernfidelity')
        .then(function(response){
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200

            return response;
        });

}

export const News = () => (
    <div>
        <h2>News</h2>

        {count()}

    </div>
);
