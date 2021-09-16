var i = 0;
var txt = "/* I'M A COMPUTER SCIENCE MASTERS STUDENT AND ASPIRING FULL STACK DEVELOPER */"; 
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed); 
  }
  type2()
}
 
