const reactDescription=['Fundamental','Crucial','Core'];



export default function DynamicValues(){

  function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

  const description=reactDescription[getRandomInt(2)];
return (
  <>
  <p>
    {description}
  </p>
  </>
)
}
