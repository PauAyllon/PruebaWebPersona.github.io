window.onload = function () {
    var i = 0;
    const elem = document.getElementById("background_index");
    const opaci = document.getElementById("Index_Page");
    var background_index=[
        '../web_monica/multimedia/index/PORTADA.png'
    ]  

    opaci.style.opacity = 1

    setInterval(changeBackground, 7000);

    function changeBackground() {
        
        if (background_index.length-1 == i) { i = -1; }

        i = i + 1;
        
        console.log(i)
        
        elem.style.backgroundImage = "url('" + background_index[i] + "')";
    }
}