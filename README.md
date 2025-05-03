HTML
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Week5</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1 id="title">Welcome to PLP Web Development Assignment</h1>
    <p id="description">This text will change dynamically.</p>
    
    <button onclick="changeText()">Change Text</button>
    <button onclick="changeStyle()">Change Style</button>
    <button onclick="addElement()">Add Element</button>
    <button onclick="removeElement()">Remove Element</button>

    <div id="container"></div>

    <script src="Assignment Week5.js"></script>
</body>
</html>

JS

function changeText() {
    document.getElementById("description").textContent = "Text has been changed dynamically!";
}

function changeStyle() {
    document.getElementById("title").style.color = "red";
    document.getElementById("title").style.fontSize = "32px";
}

function addElement() {
    let newElement = document.createElement("p");
    newElement.textContent = "Assignment has been added!";
    newElement.id = "newElement";
    document.getElementById("container").appendChild(newElement);
}

function removeElement() {
    let elementToRemove = document.getElementById("newElement");
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

