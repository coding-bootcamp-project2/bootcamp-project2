const characterForm = document.querySelector(".question-form");

const createCharacter = async (event) => {
  event.preventDefault();
  // Tommy's form needs to pass in class ID and race ID.
  // fetch the class data that matches the class ID
  const dndClassId = document.querySelector("#class-id").value;
  const raceId = document.querySelector("#race-id").value;
  const response = await fetch(`/api/class/${dndClassId}`);
  const classData = await response.json();

  // if the class data is found, then create the character
  if (response.ok) {
    console.log(classData);
    const character = {
      character_name: "David",
      class_id: dndClassId,
      race_id: raceId,
      level: 1,
    };
    console.log("create character------------");
    const response = await fetch(`/api/character/create`, {
      method: "POST",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    });
    // document.location.replace(`/api/class/${dndClassId}`);
    if (response.ok) {
      console.log(response);
      const newCharacter = await response.json();
      const newCharacterId = newCharacter.id;
      document.location.replace(`/api/character/${newCharacterId}}`);
    } else {
      alert("Failed to create character.");
    }
  } else {
    alert("Failed to retrive class.");
  }
};

characterForm.addEventListener("submit", createCharacter);
