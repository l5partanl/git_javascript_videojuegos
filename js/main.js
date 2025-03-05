//capturamos elementos a utilizar:
const inputName = document.querySelector('input:first-child');
const inputGame = document.querySelector('input:nth-child(2)');
const btnAdd = document.querySelector('input:last-child');
const sectionList = document.querySelector('.list ul');



//------pintado en pantalla------

function printChar(item, domElement) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3')
    h3.textContent = item.name.replace(/\b\w/g, char => char.toUpperCase());//super resumido por copilot, separa cada palabra cortando el string en el caracter " ", pone mayuscula la primera letra y las vuelve a juntar.
    const span = document.createElement('span');
    span.textContent = item.game.toUpperCase();
    const button = document.createElement('button');
    button.textContent = "ELIMINAR";

    button.addEventListener('click', function () {
        erraseCharacter(item.id);
        printAllChar(characters, sectionList)//Funciona pero no ha de ser buena práctica, revisar con el profe.
    })

    li.append(h3, span, button)
    domElement.appendChild(li)

}

function printAllChar(list, domElement) {

    localStorage.setItem('characters', JSON.stringify(list))

    domElement.innerHTML = "";
    if (list.length === 0) {
        domElement.style.display = "block";
        domElement.innerHTML = '<p><strong>Aún no hay personajes cargados</strong> Llena el formulario con los datos del personaje que quieras y lo veras reflejado aquí una vez que lo registres.</p>'
    } else {
        domElement.style.display = "grid";
        list.forEach(item => printChar(item, domElement));
    }
}

let contadorId = 1;
function saveCharacter(event, array) {
    event.preventDefault();

    const nameValue = inputName.value.trim()
    const gameValue = inputGame.value.trim()
    if (nameValue === "" || gameValue === "") {
        alert("Campo vacío, por favor completar los datos");
        return;
    }


    if (array.some(char => char.name.toLowerCase() === nameValue.toLowerCase())) {
        alert("El nombre ya está registrado, elige otro.");
        return;
    }

    const newChar = {
        id: contadorId,
        name: inputName.value,
        game: inputGame.value,
    }
    array.push(newChar)
    inputName.value = "";
    inputGame.value = "";
    contadorId++;
    printAllChar(array, sectionList);
}

btnAdd.addEventListener('click', (event) => saveCharacter(event, characters));

extraerInfoLocalStorage(); //init al iniciar la pagina