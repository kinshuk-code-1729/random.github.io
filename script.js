const genRandNum = ()=> {
    let min = document.querySelector("#n1").value;
    let max = document.querySelector("#n2").value;

    if(min === '' || max === ''){
        alert("One or More Fields are empty !!!!!!");
        return;
    }

    min = parseInt(min);
    max = parseInt(max);
    let randNum =  Math.floor(Math.random() * (max - min + 1) + min);
    document.querySelector("#result").innerHTML =`Result value is : ${Math.round(randNum)}`;

}
