// 标题
document.getElementsByTagName("title")[0].innerHTML = "算命网"

//标题栏背景色
document.getElementsByClassName('head')[0].style.backgroundColor = "aqua"
    //标题栏高度
document.getElementsByClassName('head')[0].style.height = "50px"
    //标题栏外边框
document.getElementsByClassName('head')[0].style.border = "3px solid black"
    //标题栏logo图标
document.getElementById('logoimg').src = 'images/logo.png'
    //标题栏logo文字
document.getElementsByTagName('h1')[0].innerHTML = "算命网"
    //标题栏跳转链接
document.getElementsByTagName('a')[0].href = 'index.html'

//轮播图
//图片地址
document.getElementById('lbk').getElementsByTagName('img')[0].src = 'images/mv1.jpg'
document.getElementById('lbk').getElementsByTagName('img')[1].src = 'images/mv2.jpg'
document.getElementById('lbk').getElementsByTagName('img')[2].src = 'images/mv3.jpg'
document.getElementById('lbk').getElementsByTagName('img')[3].src = 'images/mv4.jpg'
document.getElementById('lbk').getElementsByTagName('img')[4].src = 'images/mv5.jpg'
document.getElementById('lbk').getElementsByTagName('img')[5].src = 'images/mv6.jpg'
    //跳转地址
document.getElementById('lbk').getElementsByTagName('a')[0].href = '#'
document.getElementById('lbk').getElementsByTagName('a')[1].href = '#'
document.getElementById('lbk').getElementsByTagName('a')[2].href = '#'
document.getElementById('lbk').getElementsByTagName('a')[3].href = '#'
document.getElementById('lbk').getElementsByTagName('a')[4].href = '#'
document.getElementById('lbk').getElementsByTagName('a')[5].href = '#'

//导航栏
//图标
document.getElementById('dhl').getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementById('dhl').getElementsByTagName('img')[1].src = 'images/logo.png'
document.getElementById('dhl').getElementsByTagName('img')[2].src = 'images/logo.png'
document.getElementById('dhl').getElementsByTagName('img')[3].src = 'images/logo.png'
document.getElementById('dhl').getElementsByTagName('img')[4].src = 'images/logo.png'
    //文字
document.getElementById('dhl').getElementsByTagName('p')[0].innerHTML = '求签'
document.getElementById('dhl').getElementsByTagName('p')[1].innerHTML = '算卦'
document.getElementById('dhl').getElementsByTagName('p')[2].innerHTML = '测字'
document.getElementById('dhl').getElementsByTagName('p')[3].innerHTML = '解梦'
document.getElementById('dhl').getElementsByTagName('p')[4].innerHTML = '买符'
    //链接
document.getElementById('dhl').getElementsByTagName('a')[0].href = '#gnl1'
document.getElementById('dhl').getElementsByTagName('a')[1].href = '#gnl2'
document.getElementById('dhl').getElementsByTagName('a')[2].href = '#gnl3'
document.getElementById('dhl').getElementsByTagName('a')[3].href = '#gnl4'
document.getElementById('dhl').getElementsByTagName('a')[4].href = 'https://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzI1NDI0MTU3Ng==#wechat_redirect'

//公告文字
document.getElementById('ggq').innerHTML = '卖符，9.9包邮，过了这村就没这店了'
    //字体颜色
document.getElementById('ggq').style.color = 'black'
    //背景颜色
document.getElementById('ggqdk').style.backgroundColor = document.getElementById('ggq').style.backgroundColor = 'chocolate'


//置顶文字
document.getElementById('zdl').getElementsByTagName('p')[0].innerHTML = '新闻'
    //文字样式
document.getElementById('zdl').getElementsByTagName('p')[0].style = 'font-weight:bold;color:black'
    //置顶内容
document.getElementById('zdl').getElementsByTagName('p')[1].getElementsByTagName('a')[0].innerHTML = '内容1'
document.getElementById('zdl').getElementsByTagName('p')[2].getElementsByTagName('a')[0].innerHTML = '内容2'
document.getElementById('zdl').getElementsByTagName('p')[3].getElementsByTagName('a')[0].innerHTML = '内容3'
document.getElementById('zdl').getElementsByTagName('p')[4].getElementsByTagName('a')[0].innerHTML = '内容4'
document.getElementById('zdl').getElementsByTagName('p')[5].getElementsByTagName('a')[0].innerHTML = '内容5'
document.getElementById('zdl').getElementsByTagName('p')[6].getElementsByTagName('a')[0].innerHTML = '内容6'
    //点击链接
document.getElementById('zdl').getElementsByTagName('p')[1].getElementsByTagName('a')[0].href = '#'
document.getElementById('zdl').getElementsByTagName('p')[2].getElementsByTagName('a')[0].href = '#'
document.getElementById('zdl').getElementsByTagName('p')[3].getElementsByTagName('a')[0].href = '#'
document.getElementById('zdl').getElementsByTagName('p')[4].getElementsByTagName('a')[0].href = '#'
document.getElementById('zdl').getElementsByTagName('p')[5].getElementsByTagName('a')[0].href = '#'
document.getElementById('zdl').getElementsByTagName('p')[6].getElementsByTagName('a')[0].href = '#'
    //背景图片
document.getElementById('zdl').style.backgroundImage = "url('images/zdl.png')"


//吉凶文字
document.getElementById('rll').getElementsByTagName('p')[0].innerHTML = '黄历'
    //文字样式
document.getElementById('rll').getElementsByTagName('p')[0].style = 'font-weight:bold;color:red'
    //背景图片
document.getElementById('rll').style.backgroundImage = "url('images/zdl.jpg')"


//黄历
//背景图片
document.getElementById('hll').style.backgroundImage = "url('images/hll.png')"

//功能区
document.getElementsByClassName('fenlei')[0].innerHTML = '求签'
document.getElementsByClassName('fenlei')[0].style = "font-family: 微软雅黑;font-size: 150%;font-weight:bold;"
document.getElementsByClassName('fenlei')[1].innerHTML = '算卦'
document.getElementsByClassName('fenlei')[1].style = "font-family: 微软雅黑;font-size: 150%;font-weight:bold;"
document.getElementsByClassName('fenlei')[2].innerHTML = '测字'
document.getElementsByClassName('fenlei')[2].style = "font-family: 微软雅黑;font-size: 150%;font-weight:bold;"
document.getElementsByClassName('fenlei')[3].innerHTML = '解梦'
document.getElementsByClassName('fenlei')[3].style = "font-family: 微软雅黑;font-size: 150%;font-weight:bold;"

//图片
document.getElementsByClassName('gnql')[0].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[1].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[2].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[3].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[4].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[5].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[6].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[7].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[8].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[9].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[10].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[11].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[12].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[13].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[14].getElementsByTagName('img')[0].src = 'images/logo.png'
document.getElementsByClassName('gnql')[15].getElementsByTagName('img')[0].src = 'images/logo.png'

//文字
document.getElementsByClassName('gnql')[0].getElementsByTagName('p')[0].innerHTML = '月老灵签'
document.getElementsByClassName('gnql')[1].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[2].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[3].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[4].getElementsByTagName('p')[0].innerHTML = '六爻'
document.getElementsByClassName('gnql')[5].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[6].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[7].getElementsByTagName('p')[0].innerHTML = '六十四卦'
document.getElementsByClassName('gnql')[8].getElementsByTagName('p')[0].innerHTML = '诸葛神算'
document.getElementsByClassName('gnql')[9].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[10].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[11].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[12].getElementsByTagName('p')[0].innerHTML = '周公解梦'
document.getElementsByClassName('gnql')[13].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[14].getElementsByTagName('p')[0].innerHTML = '开发中'
document.getElementsByClassName('gnql')[15].getElementsByTagName('p')[0].innerHTML = '开发中'

//链接
document.getElementsByClassName('gnql')[0].href = 'html/yuelao.html'
document.getElementsByClassName('gnql')[1].href = '#'
document.getElementsByClassName('gnql')[2].href = '#'
document.getElementsByClassName('gnql')[3].href = '#'
document.getElementsByClassName('gnql')[4].href = 'html/liuyao.html'
document.getElementsByClassName('gnql')[5].href = '#'
document.getElementsByClassName('gnql')[6].href = '#'
document.getElementsByClassName('gnql')[7].href = 'html/guaxiang.html'
document.getElementsByClassName('gnql')[8].href = 'html/zgss.html'
document.getElementsByClassName('gnql')[9].href = '#'
document.getElementsByClassName('gnql')[10].href = '#'
document.getElementsByClassName('gnql')[11].href = '#'
document.getElementsByClassName('gnql')[12].href = 'html/zgjm.html'
document.getElementsByClassName('gnql')[13].href = '#'
document.getElementsByClassName('gnql')[14].href = '#'
document.getElementsByClassName('gnql')[15].href = '#'


//友情链接
document.getElementsByClassName('yqlj1')[0].innerHTML = '友情链接'

//友情链接文字
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[0].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[1].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[2].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[3].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[4].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[5].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[6].innerHTML = '百度'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[7].innerHTML = '百度'

//友情链接地址
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[0].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[1].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[2].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[3].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[4].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[5].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[6].href = '#'
document.getElementsByClassName('yqljjt')[0].getElementsByTagName('a')[7].href = '#'

//关于我们
document.getElementsByClassName('yqlj')[0].innerHTML = '关于我们'
document.getElementsByClassName('yqljjt1')[0].getElementsByTagName('p')[0].innerHTML = 'ICP10000号 ©2021'
document.getElementsByClassName('yqljjt1')[0].getElementsByTagName('p')[1].innerHTML = '邮箱：1585364631@qq.com '
