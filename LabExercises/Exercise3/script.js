function changeContent(columnId, headingId) {
    let column = document.getElementById(columnId);
    let heading = document.getElementById(headingId);

    // Change background color randomly
    let colors = ["yellow", "green", "red", "purple", "blue", "orange"];
    column.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}


