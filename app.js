const data = [
  {
    id: "Jack",
    name: "Jack",
    race: "Lizard",
    strength: 80,
    intellect: 65,
    stamina: 75,
    charisma: 30,
    img: "jack.jpeg",
    alt: "Jack the lizard guy",
    text: [
      "Jack is a unique creature, unlike any other in the world. He is half human and half lizard, giving him a truly fascinating appearance. His green, scaly skin is both intimidating and intriguing, with a texture that is both rough and smooth to the touch. His long, forked tongue flickers in and out of his mouth, giving him a reptilian air that is both eerie and captivating.",
      "Despite his intimidating appearance, however, Jack is actually quite friendly and enjoys spending time lounging in the sun, just like any other lizard. He is content to spend hours basking in the warmth, soaking up the rays and feeling the heat on his skin. He loves to feel the sun on his face and the wind in his scales, and is always up for a good adventure. When he's not basking in the sun, Jack can be found exploring the wilderness, using his lizard-like abilities to climb trees and scale walls.",
      "He is a skilled hunter, with sharp teeth and keen senses that allow him to track prey with ease. But despite his hunting skills, Jack is a gentle soul at heart, and enjoys spending time with other creatures, including humans.",
      "He is always eager to make new friends and to explore new places, and his unusual appearance only makes him more fascinating to those who meet him.",
    ],
  },
  {
    id: "Nikolas",
    name: "Nikolas",
    race: "Tigerman",
    strength: 70,
    intellect: 75,
    stamina: 50,
    charisma: 80,
    img: "Nikolas.jpeg",
    alt: "Nikolas the tigerman",
    text: [
      "Nikolas is a truly remarkable creature, unlike any other in the world.",
      "He is half human and half tiger, giving him a fierce and powerful presence that is both intimidating and awe-inspiring. His golden fur is soft and silky to the touch, with black stripes that stand out against his coat. His piercing green eyes seem to glow in the dark, giving him an otherworldly air that is both beautiful and terrifying. He has razor-sharp claws and teeth, making him a formidable opponent in any situation.",
      "Despite his wild nature, however, Nikolas has a strong sense of loyalty and will fiercely protect those he cares about. He is a fierce fighter, with lightning-fast reflexes and a strength that belies his hybrid nature. He is both graceful and powerful, moving with the fluidity of a big cat and the strength of a human.",
      "He is a creature of great courage and determination, never backing down from a challenge and always willing to put himself in harm's way to protect others. He is a force to be reckoned with, and those who underestimate him do so at their own peril.",
    ],
  },
  {
    id: "Stephen",
    name: "Stephen",
    race: "Human",
    strength: 55,
    intellect: 85,
    stamina: 40,
    charisma: 95,
    img: "Stephen.jpeg",
    alt: "Stephen the human",
    text: [
      "Stephen is a red-haired human with a mischievous twinkle in his eye, and an impressive muscular build. He is always up for a good time, and loves nothing more than to tell jokes and play pranks on his friends. His fiery red hair is both striking and beautiful, with a vibrant hue that sets him apart from others.",
      "His toned physique is a testament to his dedication to physical fitness, and his impressive muscles only add to his confident and powerful presence. He has a quick wit and a sharp tongue, making him both charming and a bit of a troublemaker.",
      "He loves to push boundaries and challenge conventions, always looking for new and interesting ways to break the mold. But despite his lighthearted nature, Stephen has a heart of gold and will go out of his way to help someone in need. He is fiercely loyal to his friends and family, and will stop at nothing to protect those he cares about.",
      "He is a true original, unafraid to be himself and to stand out from the crowd. He is a breath of fresh air in a world that can sometimes feel dull and lifeless, and his infectious spirit is contagious to all those who know him.",
    ],
  },
];

// The card wrapper:

const card = document.getElementsByTagName("article");
const cardDecorationOutline = card[0].children[0];

// Image block variables:

// Character img + decorative <span>:
const image = document.getElementsByTagName("img");
const clocky = document.getElementsByClassName("clocky");
// Character stats:
const strengthStat = document.getElementsByClassName("strength");
const intellectStat = document.getElementsByClassName("intellect");
const staminaStat = document.getElementsByClassName("stamina");
const charismaStat = document.getElementsByClassName("charisma");

// Text description block variables:

const charName = document.getElementsByTagName("h1");
const charDesc = document.getElementsByClassName("desc");

// Filtering info:

function filterOb(array) {
  return function (name) {
    for (let i = 0; i < array.length; i++) {
      if (!name) {
        card[0].style = "display: none;";
      }
      if (array[i].name == name) {
        card[0].style = "display: flex;";
        // Img block:
        image[0].src = array[i].img;
        image[0].alt = array[i].alt;
        strengthStat[0].textContent = "Strength: " + array[i].strength;
        intellectStat[0].textContent = "Intellect: " + array[i].intellect;
        staminaStat[0].textContent = "Stamina: " + array[i].stamina;
        charismaStat[0].textContent = "Charisma: " + array[i].charisma;

        // Text block:

        charName[0].textContent = array[i].name;
      }
    }
  };
}

const filterChar = filterOb(data);

// Char picker btns:

const btn = document.getElementsByTagName("button");

for (let h = 0; h < btn.length; h++) {
  btn[h].addEventListener("click", selectBtn);
}

let btnId;

function selectBtn(event) {
  if (event.type == "click") {
    const button = event.target;
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].id == button.id) {
        btnId = button.id;
        // filter characters:
        filterChar(btnId);
        // animate characters' img on every iteration:
        allAnimations();
      }
    }
  }
}

// ANIMATIONS:

function animateCharImg() {
  let translucentVal = 1;
  let blackVal = 360;
  function updateClocky() {
    translucentVal = (translucentVal + 1) % 360;
    blackVal = (blackVal - 1) % 360;
    clocky[0].style = `background-image: repeating-conic-gradient(rgba(0, 0, 0, 0) 0deg, rgba(0, 0, 0, 0) ${translucentVal}deg, #000 1deg, #000 ${blackVal}deg);`;
  }

  const intervalIdClocky = setInterval(updateClocky, 5);

  setTimeout(() => {
    clearInterval(intervalIdClocky);
  }, 1300);

  return setTimeout(updateClocky, 2000);
}

function animateCardDeco() {
  let darkVal = 0;
  function updateCardDeco() {
    darkVal = darkVal + 1;
    cardDecorationOutline.style = `background-image:  linear-gradient(-150deg, rgba(0,0,0,1) ${darkVal}%, rgba(0,0,0,0) ${darkVal}% 100%);`;
  }

  const intervalIdcardDeco = setInterval(updateCardDeco, 10);

  setTimeout(() => {
    clearInterval(intervalIdcardDeco);
  }, 1300);

  return setTimeout(updateCardDeco, 1000);
}

function animateCharDescription(name, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == name) {
      let f = 0;
      let txt = array[i].text;

      // the typewriter func:
      function typeWriter() {
        for (let i = 0; i < txt.length; i++) {
          let paragraph = document.createElement("p");
          charDesc[0].appendChild(paragraph);
          for (let k = 0; k < charDesc[0].children.length; k++) {
            charDesc[0].children[k].innerHTML = `<span></span> ${txt[k]}`;
          }
        }
      }
      // is txt wrapper empty or not:
      function isEmpty() {
        if (charDesc[0].children) {
          while (charDesc[0].lastChild) {
            charDesc[0].lastChild.remove();
          }
          typeWriter();
        } else {
          typeWriter();
        }
      }
      isEmpty();
    }
  }
}

function allAnimations() {
  // Init val (animation step 1):
  clocky[0].style =
    "background-image: repeating-conic-gradient(#000 0deg, #000 360deg);";
  cardDecorationOutline.style = "background-color: none";
  // Step 2:
  animateCharImg();
  animateCardDeco();
  animateCharDescription(btnId, data);
}
