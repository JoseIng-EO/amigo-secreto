// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo()
{
    let ingresarAmigo = document.getElementById('amigo');
    let nombreAmigo = ingresarAmigo.value;

    if(nombreAmigo == "")
    {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }
    listaAmigos.push(nombreAmigo);
    ingresarAmigo.value = "";
    ingresarAmigo.focus();
}