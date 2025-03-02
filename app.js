// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloAmigos = [];

function agregarAmigo()
{
    let ingresarAmigo = document.getElementById('amigo');
    let nombreAmigo = ingresarAmigo.value;

    if(nombreAmigo == "")
    {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }
    arregloAmigos.push(nombreAmigo);
    ingresarAmigo.value = "";
    ingresarAmigo.focus();

    actualizarLista();
}

function actualizarLista()
{
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i=0; i<arregloAmigos.length; i++)
    {
        let item = document.createElement("li");
        item.textContent = arregloAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo()
{
    if(arregloAmigos.length === 0)
    {
        alert("El listado de amigos se encuentra vacío");
        return;
    }

    let amigoSorteado = arregloAmigos[Math.floor(Math.Random() * arregloAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Su amigo secreto es: ${resultado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}