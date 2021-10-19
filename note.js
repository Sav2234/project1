const input = document.querySelector("#add");
const btn = document.querySelector("#button");
const list = document.querySelector("#list");

btn.onclick = function(){
    
var txt = input.value;

noteCreate = document.createElement('noteCreate');
noteCreate.innerHTML = txt;
list.insertBefore(noteCreate,list.childNodes[0]);
input.value = '';
};