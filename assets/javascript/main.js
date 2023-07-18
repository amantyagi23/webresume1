// import OPERATIONS from "./services/operations";
import OPERATIONS from "./services/operations.js";
window.addEventListener('load',bindEvents);
const box = document.getElementById('box');
const details = document.getElementById('details');
export function bindEvents(){
    document.getElementById('addbtn').addEventListener(
        'click',
        ()=>{
            box.classList.add('show');
        }
    )
    document.getElementById('deletebtn').addEventListener(
        'click',
        ()=>{
            OPERATIONS.delete();
        }
    )
    document.getElementById('save').addEventListener(
        'click',
        savetasks
    )
    document.getElementById('load').addEventListener(
        'click',
        loaddata
    )
    document.getElementById('detailinfo').addEventListener(
        'click',
        ()=>{
            details.classList.add('show');
        }
    )
    document.getElementById('closebtn').addEventListener(
        'click',
        ()=>{
            box.classList.remove('show');
        }
    )
    document.getElementById('closebtn2').addEventListener(
        'click',
        ()=>{
            details.classList.remove('show');
        }
    )
    document.getElementById('submitbtn').addEventListener(
        'click',
        ()=>{
            const id = document.getElementById('id').value;
            const title = document.getElementById('title').value;
            const desc = document.getElementById('desc').value;
            if(title==""){
                alert("Please Write The Title !!!")
            }
            else{
               OPERATIONS.add(id,title,desc);
                showitem(id,title,desc);
            }
            document.getElementById('id').value = "";
            document.getElementById('title').value = "";
            document.getElementById('desc').value = ""; 
        }
    )
    document.getElementById('resetbtn').addEventListener(
        'click',
        ()=>{
            document.getElementById('id').value = "";
            document.getElementById('title').value = "";
            document.getElementById('desc').value = "";
        }
    )
    
}
const items = document.getElementById('items')
function showitem(id,title,desc){
    const newtask = document.createElement('col');
        newtask.classList.add('col');
        newtask.innerHTML=`
        <div class="row justify-space-between align-item-center"><span class="tasktitle">${id}</span> <span class="tasktitle">${title}</span><div class="operations"> <i class="fa-regular fa-pen-to-square icons" id="update"></i><i class="fa-solid fa-trash icons" id="delete"></i></div></div>
        <hr>
        <p class="taskdesc">${desc}</p>
        `;
        newtask.querySelector('#delete').addEventListener(
            'click',
            ()=>{
                newtask.classList.toggle('select');
                OPERATIONS.mark(id);
            }
        )
        newtask.querySelector('#update').addEventListener(
            'click',
            ()=>{
            //    box.classList.add('show');
            //    OPERATIONS.update(id);
            OPERATIONS.delete();
            }
        )
        items.appendChild(newtask);
}
function savetasks(){
    if(window.localStorage){
        const tasks = OPERATIONS.gettask();
        localStorage.taskitems =  JSON.stringify(tasks);
        alert("Save to local Storage")
    }
    else{
        alert("Browser is outdated.... can't save data....")
    }
}
function loaddata(){
    if(window.localStorage){
        const tasks = OPERATIONS.gettask();
        localStorage.taskitems =  JSON.stringify(tasks);
        alert("Save to local Storage")
    }
    else{
        alert("Browser is outdated.... can't save data....")
    }
}