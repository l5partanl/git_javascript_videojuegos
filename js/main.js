//capturamos elementos a utilizar:
const form = document.querySelectorAll('#formGameChart')
const sectionList = document.querySelector('.list ul')


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
        domElement.innerHTML = '<h2>Aún no hay perosonajes cargados</h2><p>Llena el formulario con con los datos del personaje que quieras y lo veras reflejado aquí una vez que lo registres.</p>'
    } else {
        list.forEach(item => printChar(item, domElement));
    }
}

printAllChar(character, sectionList);