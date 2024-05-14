// import React, { useState } from 'react';

// function List() {
//   const [rows, setRows] = useState([]);
//   const [newText, setNewText] = useState('');

//   const addRow = () => {
//     if (newText.trim() !== '') { // Prevent adding empty rows
//       setRows([...rows, { text: newText }]);
//       setNewText(''); 
//     }
//   };

//   return (
//     <div className="relative p-4 border rounded-md shadow-md">
//       <button 
//         className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" 
//         onClick={addRow}
//       >
//         Add Row
//       </button>

//       <ul>
//         {rows.map((row, index) => (
//           <li key={index} className="mb-2">
//             {row.text}
//           </li>
//         ))}
//       </ul>

//       <input 
//         type="text" 
//         className="border rounded-md p-2 w-full mt-4" 
//         placeholder="Enter text for new row"
//         value={newText}
//         onChange={(e) => setNewText(e.target.value)}
//       />
//     </div>
//   );
// }

// export default List;
import React, { useState } from 'react';
import Tasks from './Tasks'; 

function List() {
    const [tasks, setTasks] = useState([]);
    const [newText, setNewText] = useState('');
  
    const addTask = () => {
      if (newText.trim() !== '') {
        setTasks([...tasks, newText]);
        setNewText('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  

  return (
    <div className="bg-white shadow-md rounded-md p-4 relative">
      <button 
        className="absolute top-2 right-2 bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-600"
        onClick={addTask}
      >
        Add Row
      </button>
      <Tasks tasks={tasks} onDelete={deleteTask} /> 


      <input
        type="text"
        className="mt-4 w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter text for new row"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
    </div>
  );
}

export default List;
