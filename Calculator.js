const number = (number) =>{
    let sol = document.getElementById("sol");
    sol.value += number;
}
const deleteall = () =>{
    let a = document.getElementById("sol");
    a.value = "";
}
const deletelast = () =>{
    let a = document.getElementById("sol");
    let last = ""
    for (let k=0;k<a.value.length - 1;k++){
        last += a.value[k]
    }
    a.value = last
}
const solution = () =>{
    let a = document.getElementById("sol");
    a.value = eval(a.value)
}

