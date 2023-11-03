const formSubmit = document.querySelector('.question-form')
const dndClass = 1

const submission = async (event) => {
    event.preventDefault()
    console.log("MESSAGE!!!!")
    const classData = await fetch(`/api/class/${dndClass}`)
    console.log(classData.dexterity)
}

formSubmit.addEventListener('submit', submission) 