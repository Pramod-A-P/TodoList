import React from 'react'
import './task.css'


function Task(){
    return(
       <div className="add_task">
           <div className="input-group">
               
               <div><input type="text" id="add_task" class="form-control" placeholder="Enter the Task you want to Add" aria-label="Username" aria-describedby="addon-wrapping"/></div>

               <div><input type="date" id="update_date"/></div>

               <div><input type="time" id="update_time"/></div>

               <div><i class="bi bi-trash3-fill"/></div>

               <div><input type="submit"  value="Add Task" className="input-group-text" id="addon-wrapping"/></div>
               
           </div>  
       </div>
    )
}

// const textbox=document.getElementById('add_task');
// // const btn1=document.getElementById('addon-wrapping');
// const display=document.getElementById('flexRadioDefault1');
// console.log(display);
// function Displayinfo(){
//     display.innerHTML= textbox.value;
// }

// btn1.addEventListener('onclick',Displayinfo);

// const btn1=document.getElementById('addon-wrapping');

// btn1.addEventListener("onclick",Displayinfo);

// function Displayinfo(){
//     Displayinfo.innerHTML= textbox.value;
//     }


export default Task