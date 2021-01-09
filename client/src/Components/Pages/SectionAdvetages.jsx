import Flex from '../Layout/Flex';
import AdventageItem from '../AdventageItem/AdventageItem';


export default function SectionAdventages(props){

let adventages = [1, 2, 3];


      
return <section className="section section-advetages">
        <Flex>
        {adventages.map((item, i) => 
        <AdventageItem h={'Global Student'} p={`Lorem ipsum dolor sit amet consectetur elit, 
         urna consequat felis vehicula class ultricies ultricies ultricies class`} bg={'/icons/icon-global-student.png'} num={i} key={`key-${i}`}/>)}
         </Flex>
      </section>
}