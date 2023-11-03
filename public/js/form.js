const formSubmit = document.querySelector(".question-form");
const dndClassId = 1;

const submission = async (event) => {
  event.preventDefault();
  console.log("MESSAGE!!!!");
  const classData = await fetch(`/api/class/${dndClassId}`);

  if (classData.ok) {
    console.log("Response OK");
  } else {
    alert("Failed to retrive class.");
  }
};

formSubmit.addEventListener("submit", submission);
