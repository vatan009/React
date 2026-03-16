import Header from './Header.jsx';
import DynamicValues from './DynamicValues.jsx'
import {CoreConcept} from './ReusableComponents.jsx'
import reactCore from '../assets/react-core-concepts.png'
import {CORE_CONCEPTS} from '../data.js'
export default function Intro(){

   return(
   <div className="">
<Header/>
<DynamicValues/>
<main>
  <section id='core-concepts'>
    <h2>Core Concepts</h2>
    <ul>
    {CORE_CONCEPTS.map(el => (
      // <CoreConcept
      //   key={el.title}
      //   image={el.image}
      //   title={el.title}
      //   description={el.description}
      // />



      //another method to add
      <CoreConcept{...el}/>
    ))}
    </ul>
  </section>
  <h2>
    Time to get started
  </h2>
</main>

   </div>
   )
}
