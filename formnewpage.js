
document.querySelector("#btn").addEventListener('click',display);
function display(){
    var a = document.querySelector("#name");
    var b = document.querySelector("#number");
    var c = document.querySelector("#mail");

    localStorage.setItem('name',a.value);
    localStorage.setItem('number',b.value);
    localStorage.setItem('mail',c.value);

    
}