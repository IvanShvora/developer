var table = document.querySelector('table');
table.addEventListener('mouseover', function(changeColor) {
    var block = changeColor.target;
    if (block.tagName == "TD") {
        block.style.background = "green";
    }
});
