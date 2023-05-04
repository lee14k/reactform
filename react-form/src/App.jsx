import './App.css'
import Button from './Button'
import { useState } from 'react'

function App() {
const [fName, setFName] = useState('')
const [lName, setLName]= useState('') 
const validate = () => {
  return fName.length & lName.length
}



  return (

  <div>

<h1>Gorgeous Form</h1>

<form action='' id='form'>
  <label>
    First Name:
    <input type="text" 
    name="fname"
    value={fName}
    onChange = {(e)=> setFName(e.target.value)}
    ></input>
  </label>
  <br/>
  <label>
    Last Name:
    <input type="text" 
    name="lname"
    value={lName}
    onChange = {(e)=> setLName(e.target.value)}
    ></input>
  </label>
  <br/>

  <label>
    Subscribe to our Newsletter?:
    <input type="checkbox" name="name"></input>

  </label>
  <br/>
  <label>
    Email:
    <input type="text" name="email"></input>

  </label>
  <br/>
  <label>
    Comments:
    <input type="textarea" name="email"></input>

  </label>
  <br/>
  <Button disabled = {!validate()}/>
</form>

</div>
  )
}

export default App
