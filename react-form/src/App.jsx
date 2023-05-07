import './App.css'
import Button from './Button'
import { useState } from 'react'

function App() {
const [fName, setFName] = useState('')
const [lName, setLName]= useState('') 
const [checkbox, setCheckbox] = useState(false)
const [inputValue, setInputValue] = useState('')
const [showInput, setShowInput] = useState(false)

const validate = () => {
  return fName.length & lName.length
}
const handleCheckboxChange =()=> {
  setCheckbox (!checkbox)
  setShowInput(!showInput)
}
const handleInputChange =(event)=> {
  setInputValue(event.target.value)
}

const handleSubmit =(event) =>{
  event.preventDefault()
}


  return (

  <div>

<h1>Gorgeous Form</h1>

<form action='' id='form' onSubmit={handleSubmit}>
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
    <input type="checkbox" name="checkbox" checked={checkbox} onChange={handleCheckboxChange}></input>

  </label>
  <br/>
  {showInput && (
  <label>
    Email:
    <input type="text" value={inputValue} onChange={handleInputChange} name="email"/>
    
  </label>
  )}
  <br/>
  <label>
    Comments:
    <input type="textarea" name="comments"></input>

  </label>
  <br/>
  <Button disabled = {!validate()}/>
</form>

</div>
  )
}

export default App
