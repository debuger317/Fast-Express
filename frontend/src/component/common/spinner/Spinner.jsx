import React from 'react';

const Spinner = () => {
    return (
        <div className="container mx-auto">
            <span className="flex">
                <span className="animate-ping absolute inline-flex h-full w-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex  h-full w-full"></span>
            </span>
        </div>
    )
}

export default Spinner;
