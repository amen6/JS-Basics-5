const btn = document.getElementById("btn")
const inputField = document.getElementById("name"); 
btn.onclick = ()=> {
    let name = inputField.value;
    alert("Hello " + name);
    inputField.value = "";
}