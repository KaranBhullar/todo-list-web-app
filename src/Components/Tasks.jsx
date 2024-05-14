// import React from 'react';

// function Tasks({ tasks, onDelete }) {
//   return (
//     <div>
//       {tasks.map((task, index) => (
//         <div key={index} className="bg-black rounded-full px-4 py-2 my-2 text-white shadow-lg flex justify-between items-center"> 
//           <span>{task}</span>
//           <button 
//             onClick={() => onDelete(index)} 
//             className="text-red-500 hover:text-red-700"
//           >
//             &times;  
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Tasks;

import React from 'react';

function Tasks({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div 
          key={index}
          className="bg-black rounded-full px-4 py-2 my-2 text-white shadow-lg flex items-center justify-between"
        >
          <span>{task}</span>
          <button
            className="text-red-500 hover:text-red-700 bg-red-100 rounded-full p-1 ml-2"
            onClick={() => onDelete(index)} // Call onDelete with the task's index
          >
            &times; {/* Simple "X" for delete */}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
