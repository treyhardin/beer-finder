import React, { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import gsap, { Power3 } from 'gsap';

export default function Headers() {

    let headerObj;

    useEffect(() => {
        gsap.from(headerObj, {
            duration: .8,
            ease: "Power3.out",
            yPercent: -100
        })
    });

    return (
        <header ref={obj => headerObj = obj}>
            <Link to='/' className='logo u-h2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 208 18">
                    <path fill="#000" d="M18.591 8.48c.96-.744 1.56-2.016 1.56-3.24 0-1.824-.552-5.04-6.84-5.04H.183V17l13.752.024c5.448.024 6.696-2.784 6.696-4.68 0-1.296-.504-3.048-2.04-3.864zm-3.984-1.56l-10.344.024V3.536l10.344.024c1.248 0 1.704.264 1.704 1.656 0 1.488-.48 1.704-1.704 1.704zm0 6.72l-10.344.024v-3.408l10.344.024c1.248 0 1.704.264 1.704 1.896 0 1.248-.48 1.464-1.704 1.464zm13.785-.12v-3.456h12.48v-3.36h-12.48V3.68h13.44V.2h-17.52V17h17.832v-3.48H28.392zm21.667 0v-3.456h12.48v-3.36H50.06V3.68H63.5V.2H45.98V17h17.832v-3.48H50.06zm34.892-3.288c1.92-1.248 2.16-3.048 2.184-4.296C87.087 3.848 86.439.2 78.375.2H67.647V17h4.08v-5.328h7.848c2.88 0 3.24.888 3.24 1.728V17h4.32v-3.6c-.048-1.536-.768-2.568-2.184-3.168zM71.727 3.776l7.848.024c2.88 0 3.24.816 3.24 2.136 0 1.32-.36 2.136-3.24 2.136l-7.848.024v-4.32zm35.952.024V.2h-16.56V17h4.08v-6.432h11.28v-3.48h-11.28V3.8h12.48zm3.537-3.6V17h4.08V.2h-4.08zm23.663 0l.24 11.904L124.319.2h-4.56V17h4.08l-.24-11.832L134.399 17h4.56V.2h-4.08zm15.019 0h-6.48V17h6.432c5.208 0 12.984.696 12.984-8.232 0-9.264-7.776-8.568-12.936-8.568zm1.2 13.2h-3.6V3.8h3.624c6.6 0 7.632-.24 7.632 4.968 0 4.872-1.032 4.632-7.656 4.632zm19.474.12v-3.456h12.48v-3.36h-12.48V3.68h13.44V.2h-17.52V17h17.832v-3.48h-13.752zm34.892-3.288c1.92-1.248 2.16-3.048 2.184-4.296C207.6 3.848 206.952.2 198.888.2H188.16V17h4.08v-5.328h7.848c2.88 0 3.24.888 3.24 1.728V17h4.32v-3.6c-.048-1.536-.768-2.568-2.184-3.168zM192.24 3.776l7.848.024c2.88 0 3.24.816 3.24 2.136 0 1.32-.36 2.136-3.24 2.136l-7.848.024v-4.32z"/>
                </svg>
            </Link>
            <NavLink exact={true} activeClassName='active' to='/' className='navLink u-h2'><p>Search</p></NavLink>
            <NavLink exact={true} to='/explore' className='navLink u-h2'><p>Explore</p></NavLink>
        </header>
    )
}