import React, { useState } from "react";

function Task({text}) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    const handleTaskClick = () => {
        setIsCompleted(!isCompleted);
    };

    const toggleComplete = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div>
        <div 
        onClick={toggleComplete} 
        style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
        className={`task ${isVisible ? 'task-enter-active' : 'task-enter'}`}
        >
            {text}
        </div>
        <input>dsadasd</input>
        </div>
    );
}

export default Task;

// import React, { useState } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// // import { useEffect } from 'react';

// function Task({ text }) {
//   const [isCompleted, setIsCompleted] = useState(false);
// //   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 50); // Slight delay for effect
//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   const toggleComplete = () => {
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <div onClick={toggleComplete} 
//     style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
//     // className={`task ${isVisible ? 'task-enter-active' : 'task-enter'}`}
//     >
//       {text}
//     </div>
//   );
// }

// function List({ tasks }) {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index}>
//           <Task text={task} />
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default Task;