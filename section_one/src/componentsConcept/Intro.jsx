import Header from './Header.jsx';
import DynamicValues from './DynamicValues.jsx'
import {CoreConcept} from './ReusableComponents.jsx'
import reactCore from '../assets/react-core-concepts.png'
import {CORE_CONCEPTS} from '../data.js'
import { TabButtons } from './ChildProps.jsx'
export default function Intro(){

  let tabContent='Please click a button'
  function handleSelect({selectedButton}){

    //selected Buttons => components,jsx,props,state
    tabContent=selectedButton;
    console.log('tabcontent')

  }

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

  <section id='examples'>
  <menu >
    <TabButtons onSelect={()=>handleSelect('components')}>Components</TabButtons>
    <TabButtons onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
    <TabButtons onSelect={()=>handleSelect('props')}>Props</TabButtons>
    <TabButtons onSelect={()=>handleSelect('state')}>State</TabButtons>
  </menu>
  {tabContent}
</section>

</main>

   </div>
   )
}
