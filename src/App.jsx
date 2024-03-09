import { useEffect, useState } from 'react';
import './App.css'
import Button from './component/Button'
import Friends from './component/Friends';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUser(data));
    
  }, []);
  
  return (
    
    <>
    <h1>this is react project</h1>
    {/* <Person name = 'Rahim'/>
    <Person name = 'Karim'/>
    <Person name = 'Ali'/>
    <Person name = 'Rashad'/>
    
  <Button name ="mobile"/> */}
    <button onClick={()=> setCount(count + 1)}>Click {count}</button>
  <p>{user.length} </p>
  <Friends/>
      
    </>
  )
}

function Person ({name}) {
  return (
    <h3>this person name {name}</h3>
  )
}

export default App
