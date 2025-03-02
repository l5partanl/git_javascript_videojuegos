//creamos un array vacío donde vamos a ir depositando los peronajes a medida que se submitean

const characters = [
    /*  { name: "Mario", game: "Super Mario Bros" },
     { name: "Luigi", game: "Super Mario Bros" },
     { name: "Samus", game: "Super Metroid" },
     { name: "Lara Croft", game: "Tomb Raider" },
     { name: "Guybrush Threepwood", game: "Monkey Island" } */
]


//función para borrar personaje de la lista con .splice() para quitarlo de la lista y remove para quitarlo del html()

const deletedCharacters = [

]


function erraseCharacter(id) {
    let index = characters.findIndex(item => item.id === id);
    if (index !== -1) {
        let value = characters.splice(index, 1);
        deletedCharacters.push(value);
    }
    console.log(characters);
    console.log(deletedCharacters);
}