import React, { useState } from 'react';

const TotalViews = () => {

    updateVisitCount();
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/f-express/courier/?amount=1')
            .then(res => res.json())
            .then(data => {
                const countEl = document.getElementById('count');
                countEl.innerHTML = data.value;
            })
    }
    return (



        <div class="flex items-center text-green-500 text-sm">
          
            <span>
                <h1 id="count">0</h1>
            </span>
            <span class="text-gray-400">
                <p>This page was viewed</p>
            </span>
        </div>

    );
};

export default TotalViews;