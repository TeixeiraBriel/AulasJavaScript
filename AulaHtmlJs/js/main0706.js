function soma() {
    var campo1 = +document.querySelector("#campo-1").value;    
    var campo2 = +document.querySelector("#campo-2").value;

    var resultado = campo1 + campo2;

    console.log(campo1,campo2);

    document.querySelector("#resultado").value = resultado;



}

function um() {
    var antes = document.querySelector("#resultado").value;
    total = antes + 1;
    document.querySelector("#resultado").value = total; 
    
}

function dois() {
    var antes = document.querySelector("#resultado").value;
    total = antes + 2;
    document.querySelector("#resultado").value = total; 
    
}

function tres() {
    var antes = document.querySelector("#resultado").value;
    total = antes + 3;
    document.querySelector("#resultado").value = total; 
    
}