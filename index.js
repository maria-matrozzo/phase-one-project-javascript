// fetch('https://covers.openlibrary.org/a/olid/OL229501A-S.jpg')
// .then(response => response.json())
// .then ((data) => {
//     console.log(data)


// });



fetch('https://www.dnd5eapi.co/api/monsters/tarrasque/')
.then(response => response.json())
.then ((monster) => {
    console.log(monster)

    console.log(monster.actions[0])

});