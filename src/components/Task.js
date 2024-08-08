import React from "react";

function Task() {
function Task({text, category, onHandleDelete,task}) {
  function OnHandleDelete(){
    onHandleDelete(task)
  }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>

  <div className="task">
   <div className="label">
    <h2>{category}</h2>
      </div>
    <div className="text">
    <h2>{text}</h2>
      </div>


      <button className="delete" onClick={OnHandleDelete}>X</button>
    </div>



  );

}

export default Task;




















// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;
