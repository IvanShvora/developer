window.addEventListener('resize', function() {
    if (this.innerHeight < 768) {
        document.getElementById("text1").classList.add('text');
    }
})