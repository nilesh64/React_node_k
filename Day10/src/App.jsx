import {useState} from 'react'
import ChildComponents from './Components/ChildComponents';

const App = () => {
    const[name ,setName]=useState("Neel");
    const[isToggle,setToggle]=useState(true);
    const changeparentdata = ()=>{
       if(isToggle){
        setName("Neel Suiwal");
        setToggle(!isToggle);
       }else{
        setName("Neel");
        setToggle(!isToggle);
       }  
    };
  return (
    <div>
      <h1 className='font-bold font-sans text-opacity-85 uppercase p-4 text-center text-2xl'>two way data binding</h1>
      <ChildComponents name={name} changeparentdata={changeparentdata}/>
    </div>
  )
}

export default App;
