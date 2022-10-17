import {useState} from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
    }
  };

  return (
    <div>
   {/*  <h2>String: {message}</h2>

      <input
        // id="message"
        // name="message"
        onChange={handleChange}
        autoComplete="off"
      />

      <br />
      <br />

      <button onClick={handleClick}>Check if input empty</button>*/}
  </div> 
  
  );
}
