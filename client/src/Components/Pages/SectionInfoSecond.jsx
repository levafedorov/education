import Flex from '../Layout/Flex';
import Cartoon from '../Cartoon/Cartoon';
import Article from '../Article/Article';
import CartoonImage from '../../assets/images/cartoons/cartoon-3.png';

export default function SectionInfoSecond(props){

      
return <section className="section section-info-second">
          <div className="section-info-second__background"></div>
          <Flex>
          <Article p={`Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis
           vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante
            pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi 
            eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. `} 
            h={'consequat imperdiet aliquam, integer placerat et turpis'}
            b={'Get started' }
            type={'secondary'} 
            />
          <Cartoon background={CartoonImage}/>
          </Flex>
      </section>
}