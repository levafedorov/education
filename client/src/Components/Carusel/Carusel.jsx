export default function Carusel(props){

    const {children} = props;

    
    return <div className="carusel">
        <div className="carusel__screen">
         {children > 1 ? children.map((item, i) => <div className="carusel__item" key={`key-${i}`}>{item}</div>) : 
         <div className="carusel__item">{children}</div>}
        </div>
        <div className="carusel__panel">
        {children > 1 ? children.map((item, i) => <div className="carusel__toggler" key={`key-${i}`}></div>) : 
        <div className="carusel__toggler"></div>}
        </div>
    </div>
}