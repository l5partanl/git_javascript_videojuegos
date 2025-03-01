//capturamos elementos a utilizar:
const inputName = document.querySelector('input:first-child');
const inputGame = document.querySelector('input:nth-child(2)');
const btnAdd = document.querySelector('input:last-child');
const sectionList = document.querySelector('.list ul');

//------pintado en pantalla------

function printChar(item, domElement) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3')
    h3.textContent = item.name;
    const span = document.createElement('span');
    span.textContent = item.game;
    const button = document.createElement('button');
    button.textContent = "ELIMINAR";

    li.append(h3, span, button)
    domElement.appendChild(li)
}

function printAllChar(list, domElement) {
    domElement.innerHTML = "";
    if (list.length === 0) {
        domElement.style.display = "block";
        domElement.innerHTML = '<p><strong>Aún no hay perosonajes cargados</strong> Llena el formulario con con los datos del personaje que quieras y lo veras reflejado aquí una vez que lo registres.</p>'
    } else {
        list.forEach(item => printChar(item, domElement));
    }
}

function saveCharacter(event, array) {
    event.preventDefault();
    const newChar = {
        name: inputName.value,
        game: inputGame.value,
    }
    array.push(newChar)
    inputName.value = "";
    inputGame.value = "";

    printAllChar(array, sectionList);
}

btnAdd.addEventListener('click', (event) => saveCharacter(event, characters));

