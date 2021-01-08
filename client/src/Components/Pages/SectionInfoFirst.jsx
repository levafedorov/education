import Flex from '../Layout/Flex';
import Cartoon from '../Cartoon/Cartoon';
import Article from '../Article/Article';


export default function SectionInfoFirst(props){

      
return <section className="section section-info-first">
          <div className="section-info-first__background"></div>
          <Flex>
          <Cartoon background={'/cartoons/cartoon-2.png'}/>
          <Article p={`Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis
           vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante
            pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi 
            eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. `} 
            h={'consequat imperdiet aliquam, integer placerat et turpis'}
            b={'Get started' }
            type={'secondary'} 
            />
          </Flex>
      </section>
}