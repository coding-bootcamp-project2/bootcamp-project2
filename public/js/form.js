const formSubmit = document.querySelector('#question-form')
const dndClass = 1

const submission = async (event) => {
    event.preventDefault()
    const classData = await fetch(`/api/class/${dndClass}`, {
        method: "GET",
      body: JSON.stringify({ class: dndClass }),
      headers: { "Content-Type": "application/json" },
    })
    console.log(classData)
}

formSubmit.addEventListener('submit', submission) 