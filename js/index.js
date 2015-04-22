window.onload =  function fillremaindingPage() {

     var windowHeight = window.innerHeight;
     var navbarHeight = document.getElementById('navbar').clientHeight;
     var height = "height:" + (windowHeight - navbarHeight) + "px;" + "margin-top:" + navbarHeight + "px;";
     document.getElementById('first-container').setAttribute('style', height)
}
