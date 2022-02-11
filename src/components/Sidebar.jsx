import React from 'react';

// none - Import module without exported functions or classes.
import '../styles/components/Sidebar.css';

// [2, { "max": 5 }]
function Sidebar () {
    return (
        <div className='sidebar-wrapper'>
            <h1 className='sidebar-header ff-primary'>
                Table of contents
            </h1>
            <ul className='sidebar-nav-links ff-secondary'>
                <li className='get-started'>
                    <a href='/courses'>
                        Get started
                    </a>
                </li>
                <li className='sub-links ff-secondary'>
                    Science
                </li>
                <li className='sub-links ff-secondary'>Math</li>
                <li className='sub-links ff-secondary'>Thinking</li>
                <li className='sub-links ff-secondary'>Logic</li>
            </ul>
        </div>
    );
}

export default Sidebar;