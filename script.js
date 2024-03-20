let toDoList={
    Tasks:[],
   
    save :() => {
        let task=document.getElementById("task");
        let Periorty=document.getElementById("Periorty");
        let date=document.getElementById("d");

        let Task={
        TaskId:toDoList.Tasks.length,
        Taskname:task.value,
        Periority:Periorty.value,
        Date:d.value
  };
  if(task.value==""||date.value==""){
    
}else{toDoList.Tasks.push(Task);
  localStorage.setItem("Tasks",JSON.stringify(toDoList.Tasks));
}
task.value="";
date.value="";
Periorty.value="Select Periorty";

},
DeleteTask:(Task)=>{
  console.log(toDoList.Tasks);
Task.remove(Task);
localStorage.removeItem("Task",JSON.stringify(toDoList.Tasks))

}
,RemoveAll:()=>{
  localStorage.clear();
  localStorage.RemoveAll();
}


,show:()=>{
  let savedArray=JSON.parse(localStorage.getItem("Tasks"));
 let container=document.getElementById("container");
 container.innerHTML="";
 let savedTask="";
 savedArray.forEach(function(Task){
   savedTask+="<div class="+Task.Periority+"><div class='low'><div>"+Task.Taskname+"</div>";
   savedTask+="<div>"+Task.Periority+"</div>";
   savedTask+="<div>"+Task.Date+"</div></div></div>";
  });
container.innerHTML=savedTask;
console.log(savedArray);
},
Clear:()=>{
   task.value="";
},GetDatafromStorage:()=>{
  let savedArray=JSON.parse(localStorage.getItem("Tasks"));
  console.log(savedArray);
  toDoList.Tasks=savedArray;
  return savedArray;
 }

}
document.getElementById("save").addEventListener("click",toDoList.save);
document.getElementById("save").addEventListener("click",toDoList.show);
toDoList.show();


