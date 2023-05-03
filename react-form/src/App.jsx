import './App.css'

function App() {


  return (

  <div>

<h1>Gorgeous Form</h1>

<form action='' id='form'>
  <label>
    First Name:
    <input type="text" name="fname"></input>
  </label>
  <br/>
  <label>
    Last Name:
    <input type="text" name="lname"></input>
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
  <button>Submit!</button>
</form>

</div>
  )
}

export default App
