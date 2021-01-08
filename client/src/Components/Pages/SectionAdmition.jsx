import {useEffect} from 'react';
import AOS from 'aos';


import Flex from '../Layout/Flex';
import ApplyForAdmission from '../ApplyForAdmission/ApplyForAdmission';
import Carusel from '../Carusel/Carusel';
import Cite from '../Cite/Cite';

export default function SectionAdmition(props){


  useEffect(() => {
    AOS.init();
  }, []);

      
return <section className="section section-admition">
      <Flex>
      <ApplyForAdmission aos={'fade-up'}/>
      <Carusel>
       <Cite />
       <Cite />
      </Carusel>
      </Flex>
    </section>
}