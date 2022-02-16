/* // color change by id
document.getElementById('topPlayers').style.color = "rgb(236, 45, 1)";
document.getElementById('topBlogs').style.color = "rgb(236, 45, 1)";

// background color set by class
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'tomato';
} */

// create ul by java 
var ul = document.createElement('ul');
document.body.appendChild(ul);

for (var i = 1; i <= 3; i++) {
    var li = document.createElement('li');
    li.className = 'file';

    var a = document.createElement('p');
    a.innerHTML = 'Mama Ami Parsi Dekho-' + i;

    li.appendChild(a);
    ul.appendChild(li);
}

// var text = document.createElement('textarea');
// document.body.appendChild(text);
// textarea.id = "text";

const btn = document.createElement("button");
btn.innerHTML = "Hello Button";
btn.id = 'btn';
document.body.appendChild(btn);

document.getElementById('btn').addEventListener('click', function () {
    console.log('cku');
})