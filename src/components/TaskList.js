import React from "react";
import Task from "./Task";

function TaskList() {
function TaskList({tasks, handleDelete}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {
        tasks.map((task)=>{
          return <Task
        text={task.text}
        category={task.category}
        onHandleDelete={handleDelete}
        task={task}
      />
        })
      }

    </div>
  );
}




























// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;
