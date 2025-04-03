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

};

start.addEventListener("click", () => {
    document.querySelector("main").style.display = "none";
    document.querySelector("header").style.display = "none";
    gameStart();
});