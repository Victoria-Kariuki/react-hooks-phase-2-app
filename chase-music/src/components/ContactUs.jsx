import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h2>Search Music</h2>
      <form>
        <lable for="name">name</lable>
        <input type='text' id='name'></input>
        <lable for="message">message</lable>
        <input type='text' id='message'></input>
        <lable for="email address">email address</lable>
        <input type='email' id='email address'></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default ContactUs;