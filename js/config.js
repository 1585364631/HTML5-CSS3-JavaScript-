// 标题
document.getElementsByTagName("title")[0].innerHTML = "算命网"

//标题栏背景色
document.getElementsByClassName('head')[0].style.backgroundColor = "aqua"
    //标题栏高度
document.getElementsByClassName('head')[0].style.height = "50px"
    //标题栏外边框
document.getElementsByClassName('head')[0].style.border = "3px solid black"
    //标题栏logo图标
document.getElementById('logoimg').src = '../images/logo.png'
    //标题栏logo文字
document.getElementsByTagName('h1')[0].innerHTML = "算命网"
    //标题栏跳转链接
document.getElementsByTagName('a')[0].href = '../index.html'

//关于我们
document.getElementsByClassName('yqlj')[0].innerHTML = '关于我们'
document.getElementsByClassName('yqljjt1')[0].getElementsByTagName('p')[0].innerHTML = 'ICP10000号 ©2021'
document.getElementsByClassName('yqljjt1')[0].getElementsByTagName('p')[1].innerHTML = '邮箱：1585364631@qq.com '