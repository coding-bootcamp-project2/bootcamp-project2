const characterTemplate = document.querySelector(".character-template");
const characterNameEl = document.querySelector("#character-name");
const characterClassEl = document.querySelector("#character-class");
const characterRaceEl = document.querySelector("#character-race");
const characterHpEl = document.querySelector(".character-hp");
const charHpInputEl = document.querySelector("#hp-input");
const characterStrEl = document.querySelector(".character-strength");
const charStrInputEl = document.querySelector("#strength-input");
const characterIntEl = document.querySelector(".character-intelligence");
const charIntInputEl = document.querySelector("#intelligence-input");
const characterDexEl = document.querySelector(".character-dexterity");
const charDexInputEl = document.querySelector("#dexterity-input");
const characterWisEl = document.querySelector(".character-wisdom");
const charWisInputEl = document.querySelector("#wisdom-input");
const characterConEl = document.querySelector(".character-constitution");
const charConInputEl = document.querySelector("#constitution-input");
const characterChaEl = document.querySelector(".character-charisma");
const charChaInputEl = document.querySelector("#charisma-input");
const updateBtn = document.querySelector(".update-btn");

const updateCharacter = async (data) => {
  data.preventDefault();
  const updatedChracterData = {
    id: characterID,
    newHP: charHpInputEl.value,
    newStr: charStrInputEl.value,
    newInt: charIntInputEl.value,
    newDex: charDexInputEl.value,
    newWis: charWisInputEl.value,
    newCon: charConInputEl.value,
    newCha: charChaInputEl.value,
  };
  try {
    const response = await fetch("/api/character/:id", {
      method: "PUT",
      body: JSON.stringify(updatedChracterData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
        console.log(response);
        const newCharacter = await response.json();
        const newCharacterId = newCharacter.id;
        document.location.replace(`/api/character/${newCharacterId}`);
    }
  } catch(err) {
    res.status(500).json(err)
  }
};

updateBtn.addEventListener("submit", updateCharacter);