import {useState} from 'react';


export default Intro(){
const [selectedTopic,setSelectedTopic]=useState('Please click the button');

function handleSelect(selectedButton){
  setSelectedTopic(selectedButton);
  console.log(selectedTopic) // still it will show old value because state function executes after execution of the Intro() function
}



}


//notes
1> only call the hooks inside of Component functions (react hooks must not be called outside of react component functions)
2>only call hooks on the top level
//following is the valid syntax
function App(){
  const [val,useVal]=useState(0);
}
//following is the invalid syntax
function App(){
  if(somecondition){
    const [val,useVal]=useState(0);
  }
}


//array and useState
const arr=useState(0); // this means by arr=[value,setValue]
//when we call the state updating function
