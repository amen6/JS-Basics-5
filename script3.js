const btn = document.getElementById("btn")
const inputField = document.getElementById("number"); 



btn.onclick = ()=> {
    let sum = 0;
    for(let i = 1; i <= parseInt(inputField.value); i++) {
        sum += i;
    }

    alert("The sum is " + sum)
}