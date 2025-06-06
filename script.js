const title=document.getElementById("title");
const description=document.getElementById("description");
const form= document.getElementById("form");
const container= document.getElementById(".container");

const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
function showAllTasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");
        div.append(innerdiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(span);

        const span=document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");

        btn.innerText="-";

        btn.addEventListener("click",()=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify("tasks"));
            showAllTasks();
        });

        div.append(btn);
        container.append(div);
    });
}

function removeTasks(){
    tasks.forEach((value)=>{
        const divs = document.querySelectorAll(".task");
    divs.forEach(div => div.remove());
        div.remove();
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title:title.value,
        description:description.value,

    });
            localStorage.setItem("tasks",JSON.stringify(tasks));
});