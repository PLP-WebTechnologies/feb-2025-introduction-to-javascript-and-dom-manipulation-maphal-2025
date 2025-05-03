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