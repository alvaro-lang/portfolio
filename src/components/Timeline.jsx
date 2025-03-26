import React from 'react';
import '../styles/Timeline.css';

export default function Timeline({children}) {
    return (
        <div id='timeline'>
            {
                children.map((item, index) => (
                    <div key={index} className={`timeline-item ${index !== children.length - 1 ? 'item-margin' : ''}`}>
                        {item}
                    </div>
                ))
            }
        </div>
    );
}
