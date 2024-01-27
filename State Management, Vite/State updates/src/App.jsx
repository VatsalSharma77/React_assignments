import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
// ------------Task1---------------

// Your task is to explain why the console.log shows the older value of count

// Asynchronous Nature of setCount:
// The setCount function in React's useState is asynchronous. When you call setCount(count + 1), it doesn't immediately update the state. Instead, it schedules an update and returns control to the component. React then batches state updates for better performance.

// When you log the count immediately after calling setCount, it prints the current value of count (the older value) because the state update hasn't taken effect yet due to its asynchronous nature.

// To log the updated count value, you can use the second argument of the setCount function, which is a callback that gets executed after the state has been updated:
// const handleClick = () => {
//   setCount(count + 1);
//    Use the callback to log the updated count
//   setCount((prevCount) => {
//     console.log(prevCount);
//     return prevCount;
//   });
// };

// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log(count); // You will see the older value of count in console
//   };

//   return (
//     <div>
//       <p>Button is clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// -----------------Task2-----------

// Your task is to explain why count value is not updated to 3 as expected

// Each call to setCount(count + 1) in succession is using the same value of count in its closure. Since state updates are asynchronous, each call doesn't see the immediate effect of the previous one.

// Propose an approach to achieve the expected behavior:
// To achieve the expected behavior of incrementing the count by 3, you can use the functional form of setCount that takes the previous state as an argument. This ensures that each update is based on the latest state:
// const handleClick = () => {
//   setCount((prevCount) => prevCount + 1);
//   setCount((prevCount) => prevCount + 1);
//   setCount((prevCount) => prevCount + 1);
//   console.log(count); // It may still log the older value due to the asynchronous nature
// };
// This way, each call to setCount now uses the latest prevCount, ensuring that the count is incremented by 3. However, the console.log may still show the older value due to the asynchronous nature of state updates.





function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me 2</button>
    </div>
  );
}





export default App



