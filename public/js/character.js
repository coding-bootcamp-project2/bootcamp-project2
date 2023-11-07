const characterTemplate = document.querySelector("character-template")
const characterNameEl = document.querySelector("character-name")
const characterClassEl = document.querySelector("character-class")
const characterRaceEl = document.querySelector("character-race")
const characterHpEl = document.querySelector("character-hp")
const characterStrEl = document.querySelector("character-strength")
const characterIntEl = document.querySelector("character-intelligence")
const characterDexEl = document.querySelector("character-dexterity")
const characterWisEl = document.querySelector("character-wisdom")
const characterConEl = document.querySelector("character-constitution")
const characterChaEl = document.querySelector("character-charisma")
const updateBtn = document.querySelector("update-btn")

const updateCharacter = async (data) => {
    data.preventDefault()
    
}
updateBtn.addEventListener("submit", updateCharacter)