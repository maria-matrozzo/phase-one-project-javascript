
fetch('https://www.dnd5eapi.co/api/monsters/tarrasque/')
.then(response => response.json())
.then ((monster) => {
    console.log(monster)
    
    const inBox = document.querySelector('.stats-card')
                console.log("Am I in the box?   ", inBox)


//click event
    document.querySelector('button').addEventListener("click", revealList)

    function revealList() {
        console.log('click')
        monster.actions.forEach(
            (eachAttack) => {
            const attackStats = document.createElement('li')
                attackStats.classList.add('attack')
                attackStats.textContent = eachAttack.name
               inBox.append(attackStats)
               console.log("This is attackStats:   ", attackStats)
                
            })
    }
    

// Comment section stuff
const commentContainer = document.querySelector('.comment-container')
    console.log("Is this the add comments section?",   commentContainer)
const commentSection = document.querySelector('#comments-list')
        console.log("Does this show a comment?  ", commentSection)
const commentTextData = document.querySelector('#post-comment')
    console.log("Is this the textbox??   ", commentTextData)


commentContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(commentTextData.value)
    const newComment = document.createElement('li')
    newComment.classList.add('comments')
        newComment.textContent = commentTextData.value
    e.target.reset()
    commentSection.append(newComment)
})

//focus event
    commentTextData.addEventListener("focus", () => {
        document.querySelector('#post-comment').style.backgroundColor="pink";
    })


});
// ^^end of fetch