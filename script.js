var myNodelst = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelst.length; i++) {
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    myNodelst[i].insertBefore(checkbox, myNodelst[i].firstChild);

    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    myNodelst[i].appendChild(span);
}

// Close button click handler for existing items
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        this.parentElement.style.display = "none";
    }
}

// Check/uncheck on checkbox click
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.type === 'checkbox') {
        var li = ev.target.parentElement;
        if (ev.target.checked) {
            li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    }
});

// Add new task
function newElement() {
    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    var li = document.createElement("li");

    // checkbox
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    // task text
    li.appendChild(document.createTextNode(inputValue));

    // close button
    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    span.onclick = function () {
        this.parentElement.style.display = "none";
    }

    li.appendChild(span);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
}