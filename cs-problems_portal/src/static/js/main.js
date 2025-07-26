document.addEventListener("DOMContentLoaded", function() {
    const mesaj = document.createElement("div");
    mesaj.id = "mesaj-js";
    mesaj.textContent = "Succes la învățare! Explorează fiecare concept din meniul de mai sus.";
    document.body.appendChild(mesaj);
});

let valoare=document.getElementById("nume");
valoare = valoare.value.trim().toLowerCase

document.addEventListener("click", function(event) {
    if(valoare.includes("@") && valoare.includes(".")) 
    {
        console.log("Valid email format");
    }
    else
    {
        console.log("Invalid email format");
    }
    event.preventDefault();

});

    const mesaj = document.createElement("div");
    mesaj.id = "mesaj-js";
    mesaj.textContent = "Succes la învățare! Explorează fiecare concept din meniul de mai sus.";
    document.body.appendChild(mesaj);   
document.addEventListener("DOMContentLoaded", function() {
    const mesaj = document.createElement("div");
    mesaj.id = "mesaj-js";
    mesaj.textContent = "Succes la învățare! Explorează fiecare concept din meniul de mai sus.";
    document.body.appendChild(mesaj);
    
    const element = document.getElementById("mesaj-js");
    if (element) {
        element.style.backgroundColor = "#f0f0f0";
        element.style.padding = "10px";
        element.style.borderRadius = "5px";
        element.style.marginTop = "20px";
        element.style.textAlign = "center";
    }
});


document.getElementById("back-home").addEventListener("click", function() {
    window.location.href = "../templates/index.html";
});
document.getElementById("back-home").style.color = "#333";
document.getElementById("back-home").style.textDecoration = "none";
document.getElementById("back-home").style.fontSize = "16px";
document.getElementById("back-home").style.padding = "10px 20px";
document.getElementById("back-home").style.backgroundColor = "#f0f0f0";
document.getElementById("back-home").style.borderRadius = "5px";
document.getElementById("back-home").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#e0e0e0";
});
document.getElementById("back-home").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#f0f0f0";
});
