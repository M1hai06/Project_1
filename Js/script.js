// 1)

function changeProfile() {
  document.getElementById("change_1").innerHTML = "Loc de munca:Programtor";
  document.getElementById("change_2").innerHTML =
    document.getElementById("change_3").innerHTML;

  const image = document.getElementById("change_4");
  image.src = "https://doctorat.utcluj.ro/images/utcn-logo.png";
  image.alt = "UTCN-logo";

  document.getElementById("change_5").style.backgroundColor = "#61a3ba";
  document.getElementById("change_6").style.color = "#ffff";
  document.getElementById("change_7").style.color = "#ffff";
  document.getElementById("change_8").style.color = "#ffff";
  document.getElementById("change_9").style.backgroundColor = " #d2de32";
  document.getElementById("change_10").style.backgroundColor = " #d2de32";

  document.getElementById("change_4").style.opacity = "0.5";
}

//2)
function changeAge() {
  const cur_year = new Date().getFullYear();
  document.getElementById("age").innerHTML = cur_year - 2004 + " ani";
}

//3
let i = 0;
let images = [];
let names = [];
let time = 3000;
images[0] = "/Images/aliz.jpg";
images[1] = "/Images/IMG_0286.JPG";
images[2] = "/Images/denisa.jpg";

let text = [];
let result = [];
text[0] = "Aliz";
result[0] = text[0].link("/HTML/ujyhgtrf.html");
text[1] = "Mihai";
result[1] = text[1].link("/HTML/index.html");
text[2] = "Denisa";
result[2] = text[2].link("/HTML/laborator 5.html");

function changeImg() {
  document.slide.src = images[i];
  document.getElementById("name").innerHTML = result[i];
  if (i < images.length - 1) i++;
  else i = 0;
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
