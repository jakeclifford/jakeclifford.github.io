var i = 0;
var txt = "I DESIGN AND BUILD UNIQUE APPS AND WEBSITES"; 
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed); 
  }
  type2()
}
 
