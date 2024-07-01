document.addEventListener("DOMContentLoaded",function(){document.querySelector(".button").addEventListener("click",function(){var a,b=document.getElementById("sexo_spinner").value,c=parseFloat(document.getElementById("peso_input").value),d=parseFloat(document.getElementById("altura_input").value),e=parseInt(document.getElementById("idade_input").value);if("homem"===b)a=88.362+13.397*c+4.799*d-5.677*e;else if("mulher"===b)a=447.593+9.247*c+3.098*d-4.33*e;else return void alert("Sexo deve ser \"homem\" ou \"mulher\".");var f=1.2*a,g=1.375*a,h=1.45*a,i=`
    <p>TMB (${b}): ${a.toFixed(2)} calorias/dia</p>
    <p>Níveis de atividade física:</p>
    <ul>Nenhuma atividade física: ${f.toFixed(2)} calorias/dia</ul>
    <ul>Atividade física moderada (4x por semana): ${g.toFixed(2)} calorias/dia</ul>
    <ul>Atividade física intensa (5x ou mais por semana): ${h.toFixed(2)} calorias/dia</ul>
`;document.getElementById("resultado").innerHTML=i})});