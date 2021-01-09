import {useState, useEffect} from 'react';
import Positioner from './Positioner';
import Article from '../Article/Article';
import Navigation from '../Navigation/Navigation';
import NavigationMini from '../Navigation/NavigationMini';
import HeaderCartoon from './HeaderCartoon';

export default function Header(props){
    
    const [minified, setMinified] = useState(false);

    
    function resizer(ev){
        const width = window.innerWidth;
        console.log(window.innerWidth > 500, minified);
        
        if(width < 500 && !minified){
            setMinified(true);
        }else if(width > 500 && minified){          
            setMinified(false);
        }
    }
    

    useEffect(() => {
        
        if(window.innerWidth < 500 && !minified){ setMinified(true); }

        window.addEventListener('resize', resizer);
         return () => {
             window.removeEventListener('resize', resizer);
         }
    });

   
    const text = {
        h: `Education for all`,
        p: `Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat
         felis vehicula class ultricies mollis dictumst.`,
        b: `Read More`
    }

 

    return(<header className="main-header">
           {minified ? <NavigationMini /> : <Navigation />}
       <Positioner>
            <div className="main-header__decoration main-header__decoration--1"></div>
            <div className="main-header__decoration main-header__decoration--2"></div>
            <div className="main-header__decoration main-header__decoration--3"></div>
         <Article type="primary" h={text.h} p={text.p} b={text.b} />
         <HeaderCartoon />
       </Positioner>
    </header>)
}