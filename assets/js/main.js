var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var pandas_peques = '';

for(var i = 0; i < pictures.length; i++){
    pandas_peques += pictures[i];
}


var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');
var ul = document.createElement('ul');
var div = document.createElement('div');
var seccion_i = document.getElementById('pictures');
var body = document.body;

//seccion_i.setAttribute('class','pictures');
div.setAttribute('class','imagenes');

var img1 = document.createElement('img');
var img2 = document.createElement('img');
var img3 = document.createElement('img');
var img4 = document.createElement('img');

img1.setAttribute('src','assets/img/a1.jpg');
img2.setAttribute('src','assets/img/a2.jpg');
img3.setAttribute('src','assets/img/a3.jpg');
img4.setAttribute('src','assets/img/a4.jpg');


li1.appendChild(img1);
li2.appendChild(img2);
li3.appendChild(img3);
li4.appendChild(img4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

div.appendChild(ul);
seccion_i.appendChild(div);
body.appendChild(seccion_i);
