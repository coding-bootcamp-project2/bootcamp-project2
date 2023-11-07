const imageEl = document.querySelector(".image");

const monsterAPI = async () => {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/images/monsters/adult-black-dragon.png"
  );
  const imageData = await response.blob();
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(imageData);
  imageEl.src = imageUrl;
};

const monsterData = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/images/monsters");
  //   const monsterData = await response.json();
  //   console.log(monsterData);
  console.log(response);
};

monsterAPI();
monsterData();
