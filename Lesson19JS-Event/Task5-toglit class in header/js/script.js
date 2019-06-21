page.addEventListener('scroll', function() {
    if (this.scrollTop < 200) {
        document.getElementById("text").classList.remove('text2');
    } else if (this.scrollTop > 200) {
        document.getElementById("text").classList.add("text2")
        console.log("Good");

    }
});