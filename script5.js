const btn = document.getElementById("btn")
const inputField = document.getElementById("number"); 




btn.onclick = ()=> {
    let addSum = 0;
    let multSum = 1;
    let num = inputField.value.split(" ")[0]
    let operator = inputField.value.split(" ")[1]
    for(let i = 1; i <= num; i++) {
        if(operator == "+") {
            addSum += i;
        }
        if(operator == "*") {
            multSum *= i;
        }
    }

    if(operator == "+") {
        alert(addSum)
    }
    if(operator == "*") {
        alert(multSum)
    }
}