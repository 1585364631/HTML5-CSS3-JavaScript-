var count = 0;
var img = document.getElementById("lbk").getElementsByTagName('img')
var len = img.length;
var li = document.getElementById("lbd").getElementsByTagName('li');
var div = document.getElementById('lbk');

function run() {
    count++;
    count = count == 6 ? 0 : count;
    for (var i = 0; i < len; i++) {
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#fff";
    }
    li[count].style.backgroundColor = "yellow";
}

var timer = setInterval(run, 4000);
div.onmouseover = function() {
    clearInterval(timer);
}
div.onmouseleave = function() {
    timer = setInterval(run, 4000);
}
for (var i = 0; i < len; i++) {
    li[i].index = i;
    li[i].onmouseenter = function() {
        for (var i = 0; i < len; i++) {
            li[i].style.background = '#fff';
            img[i].style.display = 'none';
        }
        this.style.background = 'yellow';
        img[this.index].style.display = 'block';
    }
}

function reverse() {
    count--;
    count = count == -1 ? 5 : count;
    for (var i = 0; i < len; i++) {
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#fff";
    }
    li[count].style.backgroundColor = "yellow";
}

document.getElementById('qyy').onclick = function() {
    reverse();
}

document.getElementById('hyy').onclick = function() {
    run();
}