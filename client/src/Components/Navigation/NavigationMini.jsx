
import MenuToggler from './MenuToggler';
import Button from '../Button/Button';

export default function NavigationMini(props){




    return <div className="navigation-mini">
        <div className="left">
        <MenuToggler />
        </div>
        <div className="right">
        <Button classes="btn--red">Sign in</Button>
        </div>
    </div>
}