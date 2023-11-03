const formSubmit = document.querySelector(".question-form");
const dndClassId = 1;
const raceId = 2;

const submission = async (event) => {
  event.preventDefault();
  // Tommy's form needs to pass in class ID and race ID.
  // fetch the class data that matches the class ID
  const response = await fetch(`/api/class/${dndClassId}`);
  const classData = await response.json();

  // if the class data is found, then create the character
  if (response.ok) {
    console.log(classData);
    const character = {
      character_name: "David",
      class_id: classData.id,
      race_id: raceId,
      level: 1,
    };
    console.log("create character------------");
    const response = await fetch(`/api/character`, {
      method: "POST",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    });
    // document.location.replace(`/api/class/${dndClassId}`);
    if (response.ok) {
      console.log(response);
    } else {
      alert("Failed to create character.");
    }
  } else {
    alert("Failed to retrive class.");
  }
};

formSubmit.addEventListener("submit", submission);
