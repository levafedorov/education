import Positioner from './Positioner';
import Article from '../Article/Article';
import Navigation from '../Navigation/Navigation';

export default function Header(props){
   
    const text = {
        h: `Education for all`,
        p: `Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat
         felis vehicula class ultricies mollis dictumst.`,
        b: `Read More`
    }

    return(<header className="main-header">
           <Navigation />  
       <Positioner>
            <div className="main-header__decoration main-header__decoration--1"></div>
            <div className="main-header__decoration main-header__decoration--2"></div>
            <div className="main-header__decoration main-header__decoration--3"></div>
         <Article type="primary" h={text.h} p={text.p} b={text.b} />
         <div className="main-header__cartoon"></div>
       </Positioner>
    </header>)
}