let form = document.getElementById("taskform");
let input = document.getElementById("addtask");
let newTask = document.getElementById("tasks");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
    form.reset();
    console.log("successs");
})

let formValidation = () => {
    if (input.value === "") {
        alert("pls provide input");
    } else {
        acceptData();
    }
}

let acceptData = () => {
    let data = {};
    data["text"] = input.value;
    console.log(data);
    createTask();
}

let createTask = () => {
    let newTask = document.getElementById("tasks");
    let circleicon = document.createElement('span');
    const newList = document.createElement('li');
    let staricon = document.createElement('span');
    let textarea = document.createElement('span');
    const userInput = input.value;
    let text = document.createTextNode(userInput);
    newList.id = "newListid";
    newList.className = "newListcreated";
    circleicon.className = "material-symbols-outlined circle";
    circleicon.id = "circleiconid";
    circleicon.innerHTML = "radio_button_unchecked";
    staricon.id = "star-icon";
    staricon.className = "stars";
    let star = document.createTextNode('\u2606');
    staricon.appendChild(star);
    circleicon.addEventListener('click', strikeText);
    staricon.addEventListener('click', starFunction);
    newList.appendChild(circleicon);
    textarea.appendChild(text);
    newList.appendChild(textarea);
    newList.appendChild(staricon);
    newTask.appendChild(newList).value;
    createDelete(newList);
    let remove = document.getElementsByClassName("newspandeleteclass");
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var div = this.parentElement;
            if (confirm("are you sure to delete?")) {
                div.remove();
            }
        }
    }
}

let createDelete = (newList) => {
    const newSpan = document.createElement('span');
    const editIcon = "delete";
    newSpan.id = "newspandeleteid";
    newSpan.className = "newspandeleteclass";
    //newSpan.addEventListener('click', del);
    let text = document.createTextNode(editIcon);
    newSpan.appendChild(text);
    newList.appendChild(newSpan);
}

// function del() {
//     let remove = document.getElementsByClassName("newspandeleteclass");
//     for (i = 0; i < remove.length; i++) {
//         remove[i].onclick = function () {
//             var div = this.parentElement;
//             if (confirm("are you sure to delete?")) {
//                 div.remove();
//             }
//         }
//     }
// }

function strikeText() {
    var element = document.getElementsByClassName('circle');
    for (i = 0; i < element.length; i++) {
        let a = element[i];
        a.onclick = function () {
            var div = this.nextSibling;
            div.classList.toggle('checked');
            a.classList.toggle('completed');
        }
    }
}

function starFunction() {
    var element = document.getElementsByClassName('stars');
    console.log("star")
    for (i = 0; i < element.length; i++) {
        let ele = element[i];
        ele.onclick = function () {
            ele.classList.toggle('full-star');
        }
    }
}








