 import {useState} from 'react';

export default function Carusel(props){
    
    const [active, setActive] = useState(0);
    

    function toggleHandler(i){
      
        return (ev) => {
            setActive(i);
        }
    }

    const {children} = props;
    
    return <div className="carusel">
      <div className="carusel__screen">
         {Array.isArray(children) ? children.map((item, i) =>
         <div className={`${"carusel__item"} ${i === active ? 'carusel__item--active' : null}`} key={`key-${i}`}>{item}</div>) : 
         <div className="carusel__item--active">{children}</div>}
      </div>
      <div className="carusel__panel">
         { Array.isArray(children)  ? children.map((item, i) =>
         <div className={`${"carusel__toggler"} ${i === active ? 'carusel__toggler--active' : null}`} key={`key-${i}`} onClick={toggleHandler(i)}></div>) : 
         <div className="carusel__toggler carusel__toggler--active"></div>}
      </div>
    </div>
}