import Flex from '../Layout/Flex';
import ApplyForAdmission from '../ApplyForAdmission/ApplyForAdmission';
import Carusel from '../Carusel/Carusel';
import Cite from '../Cite/Cite';

export default function SectionAdmition(props){

      
return <section className="section section-admition">
      <Flex>
      <ApplyForAdmission />
      <Carusel>
       <Cite />
      </Carusel>
      </Flex>
    </section>
}