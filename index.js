function saveTasks(tasks) {
    console.log("save");
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
    //  localStorage.clear()
    let taches = localStorage.getItem("tasks")
    console.log(taches);
    return taches ? JSON.parse(taches) : [];
    
 }


let inputTask = document.getElementById("inputTask")
let listTask = document.getElementById("listTask")
let addBtn = document.getElementById("addBtn")
let erreur = document.querySelector(".errorText")
let maTable = getTasks();




addBtn.onclick = function () {
    if(inputTask.value !== ""){
        maTable.push({
            task : inputTask.value,
            completed : false
        })
        console.log(maTable);
        inputTask.value = ""
    saveTasks(maTable);
       showTasks()
       
    }else {
        erreur.innerHTML = "veuillez entrer une tâche"

    }
    erreur.innerHTML = ""  
}


function showTasks() {
  listTask.innerHTML = '';
    for (let i = 0; i < maTable.length; i++){ 
        let li = document.createElement('li')
        li.innerHTML = `<p>${maTable[i].task}
        <button onclick= completedTasks(${i}) class="completed" style = "width : 35px ; height : 35px "></button>
        <button onclick= deleteTasks(${i}) class="Delete" style = "margin-left : 450px" >
        <img src="/fermer.png" style="width: 30px" /></button></p>
        `
        listTask.appendChild(li)    
        
    }};
    showTasks()
    


function deleteTasks (i) {
    
        maTable.splice(i, 1)
        saveTasks(maTable)
        showTasks();
        console.log(maTable);
        
}
function completedTasks(i) {
    
maTable[i].completed ? 'terminer' : 'a faire'
// saveTasks(maTable)

}
console.log(maTable);
