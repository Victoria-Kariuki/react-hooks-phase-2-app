import React from 'react'

const Register = () => {
  return (
    <div>
      <form>
        <label for="fname">first name</label>
        <input type='text' id='fname'></input>
        <label for="lname">last name</label>
        <input type='text' id='lname'></input>
        <label for="email">Email</label>
        <input type='text' id='email'></input>
        <label for="contact">contact</label>
        <input type='text' id='contact'></input>
      </form>
    </div>
  )
}

export default Register
