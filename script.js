const title = document.getElementById("title"); // Pull the element with an ID of title from the DOM

function rgb() {

    // Get 3 random numbers from 0-255 and return them inside rgb format
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

// Initialize a function named randomColor
function randomizeColor() {
    
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
randomizeColor(); // Call the randomizeColor function