import Positioner from '../Layout/Positioner';
import Button from '../Button/Button';
import Logo from './Logo'
import NavigationList from './NavigationList';


export default function Navigation(props){

  
    return <div className="navigation">
             <div className="navigation__centerer">     
              <div className="navigation__left">
                    <Logo />
             </div>
             <nav className="navigation__right">  
             <NavigationList />
             <div className="navigation__btn-box">
              <Button classes={'btn--red'}>Sign in</Button>
             </div>
             </nav>
             </div> 
    </div>  
}