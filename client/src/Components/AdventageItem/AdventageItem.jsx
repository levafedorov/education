



export default function AdventageItem(props){

const {h, p, bg, num} = props;    
      
return <div className="adventage-item">
  <div className={`adventage-item__icon adventage-item__icon--${num} u-margin-bottom-small `} style={{backgroundImage: `url(${bg})`}}>
  </div>
  <h3 className="adventage-item__h  header--tertiary u-margin-bottom-tiny">
   {h}
  </h3>
  <p className="adventage-item__p paragraph--secondary">
   {p}  
  </p>
 </div>  
}