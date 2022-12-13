const btn = document.getElementById("btn")
const inputField = document.getElementById("number"); 



btn.onclick = ()=> {
    let sum = 0;
    for(let i = 1; i <= parseInt(inputField.value); i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    alert("The sum is " + sum)
}