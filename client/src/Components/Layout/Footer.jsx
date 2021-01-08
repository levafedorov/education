

export default function Footer(props){
   
  

    return(
    <footer className="footer">
       <div className="footer__centrer">
       <div className="footer__left">
         <p className="footer__copyright">
         <span>&#169;</span>
         <span>Roy Design</span>
         <span>All rights reserved</span>
         </p>
       </div>
       <div className="footer__right">
          <ul className="footer__add-info">
              <li className="footer__item"><a href="#" className="footer__link">About company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Help center</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Site map</a></li>
          </ul>
       </div>
       </div>
    </footer>)
}