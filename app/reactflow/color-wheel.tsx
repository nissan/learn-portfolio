import React, { useState } from 'react';
import { MdCreate, MdSearch, MdDelete, MdUpdate, MdVisibility } from 'react-icons/md';

const ColorWheel = ({ operations }) => {
    const [showOperations, setShowOperations] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setShowOperations(!showOperations)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                +
            </button>
            {showOperations && operations.map((op, index) => (
                <button
                    key={index}
                    title={op.name}
                    style={{
                        backgroundColor: `hsl(${index * (360 / operations.length)}, 100%, 50%)`,
                        transform: `rotate(${index * (360 / operations.length)}deg) translate(80px) rotate(-${index * (360 / operations.length)}deg)`
                    }}
                    onClick={op.action}
                    className="absolute top-1/2 left-1/2 text-white font-bold py-2 px-4 rounded-full">
                    {op.icon}
                </button>
            ))}
        </div>
    );
};

export default ColorWheel;
