import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-slate-50">
            {/* Main Loader Container */}
            <div className="relative w-24 h-24 flex items-center justify-center">

                {/* 1. Subtle Orbit Path (Dashed Ring) */}
                <div className="absolute inset-0 border border-slate-300 border-dashed rounded-full"></div>

                {/* 2. Central Pulsing Ball */}
                <div className="absolute w-12 h-12 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

                {/* 3. Rotating Wrapper for the Satellite */}
                <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                    {/* Orbiting Satellite Ball */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-md"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
