
export default function MenuToggler(props){




    return <nav role="navigation" className="navigation-mini__nav">
    <input type="checkbox" className="navigation-mini__checkbox" id="hamburger"/>
    <label htmlFor="hamburger" className="navigation-mini__label">
        <div className="navigation-mini__bar"></div>
    </label>
    <ul className="navigation-mini__menu">
        <li className="navigation-mini__item"><a href="#" className="navigation-mini__link">Home</a></li>
        <li className="navigation-mini__item"><a href="#" className="navigation-mini__link">Services</a></li>
        <li className="navigation-mini__item"><a href="#" className="navigation-mini__link">Product</a></li>
        <li className="navigation-mini__item"><a href="#" className="navigation-mini__link">Contact</a></li>
    </ul>
</nav>
}