const title = document.getElementById("title"); // Pull the element with an ID of title from the DOM
const start = document.getElementById("start"); // Pull the element with an ID of start from the DOM

// Initialize a function called rgb
function rgb() {

    // Get 3 random numbers from 0-255 and return them inside rgb format
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

// Initialize a function named randomColor
function randomizeTitleColor() {
    
    // Split every character in the title into an array
    const titleInsert = title.innerText.split("");

    // An array of color names that is empty
    const colors = [];

    // For every letter in the title
    for (i in titleInsert) {
        colors[i] = rgb(); // Replace the selected index with a new rgb color
    };
    
    // For every letter in the title
    for (i in titleInsert) {

        // Randomize an index from the colors array and find the item assigned to it
        const color = colors[Math.floor(Math.random() * colors.length)];

        titleInsert[i] = `<span style="color: ${color};">${titleInsert[i]}</span>`; // Wrap each item in a span element with a random color
        const titleSpan = titleInsert.join(""); // Join all the elements together into a string
        title.innerHTML = titleSpan; // Change the HTML content of the title to the letters with the random colors 
    };
};
randomizeTitleColor(); // Call the randomizeTitle function

// Initialize a function called randomButtonColor
function randomizeButtonColor() {

    // Select the area where our variables are in CSS
    const variables = document.querySelector(":root");

    // Get a random RGB color with the rgb function and assign it to the background and text color variables
    variables.style.setProperty("--bg-color", rgb());
    variables.style.setProperty("--text-color", rgb());
};
randomizeButtonColor(); // Call randomizeButtonColor

function gameStart() {
    const mainContent = document.querySelector("main"); // Select the main element from the DOM
    mainContent.innerHTML = ""; // Empty the HTML in <main>

    // Create the container for the cards
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    
    // Create the red image for the red card and give it a class names card-image
    const redImg = document.createElement("img");
    redImg.classList.add("card-image");
    redImg.src = "/assets/red.png";

    // Create the yellow image for the yellow card and give it a class names card-image
    const yellowImg = document.createElement("img");
    yellowImg.classList.add("card-image");
    yellowImg.src = "/assets/yellow.png";
    
    // Create the green image for the green card and give it a class names card-image
    const greenImg = document.createElement("img");
    greenImg.classList.add("card-image");
    greenImg.src = "/assets/green.png";

    // Create the blue image for the blue card and give it a class names card-image
    const blueImg = document.createElement("img");
    blueImg.classList.add("card-image");
    blueImg.src = "/assets/blue.png";

    // Create the cards in the DOM with a class of "card" and append their images to them
    const red = document.createElement("div");
    red.classList.add("card");
    red.appendChild(redImg);
    
    const yellow = document.createElement("div");
    yellow.classList.add("card");
    yellow.appendChild(yellowImg);

    const green = document.createElement("div");
    green.classList.add("card");
    green.appendChild(greenImg);

    
    const blue = document.createElement("div");
    blue.classList.add("card");
    blue.appendChild(blueImg);

    const cards = [red, yellow, green, blue]; // Create an array containing the cards
    
    function randomizeCardPlacement(card) {
        const random = Math.floor(Math.random() * 2);
        card.style.gridArea = `${random}/${random}/${random}/${random}`;
        
        /*for (i in cards) {
            switch (cards[i]) {
                case cards[i].style.gridArea !== cards[i++].style.gridArea:
                    return;
                case cards[i].style.gridArea !== cards[i--].style.gridArea:
                    return;
                case cards[i].style.gridArea !== cards[i - 2].style.gridArea:
                    return;
                case cards[i].style.gridArea !== cards[i+ 2].style.gridArea:
                    return;
                default:
                    randomizeCardPlacement(cards[i]);
            }
        }*/
    };
    
    

    // Add each card in
    cardContainer.appendChild(red);
    cardContainer.appendChild(yellow);
    cardContainer.appendChild(green);
    cardContainer.appendChild(blue);
    
    mainContent.appendChild(cardContainer);
    console.log(mainContent.innerHTML);

    /*
    const select = self => {
        const selection = self.name.toString();
    }

    // When the card is clicked, select it
    red.addEventListener("click", select);
    yellow.addEventListener("click", select);
    green.addEventListener("click", select);
    blue.addEventListener("click", select);
    */
};

function checkMatch() {

    // Select the area where our variables are in CSS
    const variables = document.querySelector(":root");
    let moves = 0;

    let selection;
    let selection2;

    if (selection === selection2) {
        variables.style.setProperty("--fill-mode", "forwards");
        moves++;
    } else {
        variables.style.setProperty("--animation-direction", "alternate")
        moves++;
    };

}

// Listen for a click on the start button
start.addEventListener("click", () => {

    gameStart(); // Call the gameStart function to start the game
    randomizeButtonColor(); // Call randomizeButtonColor to give the footer a new color
    randomizeTitleColor(); // Call randomizeTitleColor to change the title's color again
});