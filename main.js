document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        readTasks()
    }
}

async function readTasks(){ 
    const res = await fetch("http://localhost:3000/tasks")
    const data = await res.json();
    document.getElementById("task").innerHTML = ""
    data.forEach(task => {
        document.getElementById("task").innerHTML += `
          <div class="task">
                 <h3>${task.nom}</h3>
                 <p>${task.description}</p>
                 <p>${task.date}</p>
                 <p>${task.heure}</p>
            </div>`
    });
   
 }

async function addTask(){ 
   const nom = document.getElementById("nom").value
   const description = document.getElementById("description").value
   const date = document.getElementById("date").value
   const heure = document.getElementById("heure").value
   if (nom == "" || description == "" || date =="" || heure ==""){
      alert("Veuillez remplir tous les champs pour ajouter une nouvelle tâche! ")
      document.getElementById("nom").value = ""
      document.getElementById("description").value = ""
      document.getElementById("date").value = ""
      document.getElementById("heure").value = ""
      return
   }
   const res = await fetch("http://localhost:3000/add",{
        method: "POST",
        body: JSON.stringify({
            nom : nom,
            description : description,
            date : date,
            heure : heure
        }),
        headers : {"Content-type" : "application/json; charset=UTF-8"}
    })
    location.href = "index.html"
}
