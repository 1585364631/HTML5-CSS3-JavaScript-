var tiangan = new Array(
    '癸',
    '甲',
    '乙',
    '丙',
    '丁',
    '戊',
    '己',
    '庚',
    '辛',
    '壬',
    '癸'
);

var dizhi = new Array(
    '亥',
    '子',
    '丑',
    '寅',
    '卯',
    '辰',
    '巳',
    '午',
    '未',
    '申',
    '酉',
    '戌',
    '亥',
);

var shengxiao = new Array(
    '',
    '鼠',
    '牛',
    '虎',
    '兔',
    '龙',
    '蛇',
    '马',
    '羊',
    '猴',
    '鸡',
    '狗',
    '猪',
);

var zhou = new Array(
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
);

var pingnian = new Array(
    '',
    '31',
    '28',
    '31',
    '30',
    '31',
    '30',
    '31',
    '31',
    '30',
    '31',
    '30',
    '31',
);

var runnian = new Array(
    '',
    '31',
    '29',
    '31',
    '30',
    '31',
    '30',
    '31',
    '31',
    '30',
    '31',
    '30',
    '31',
);

var nlyue = new Array(
    '',
    '29',
    '30',
    '29',
    '30',
    '30',
    '29',
    '30',
    '29',
    '30',
    '29',
    '30',
    '29',
)

var rqs = new Array(
    '廿九',
    '初一',
    '初二',
    '初三',
    '初四',
    '初五',
    '初六',
    '初七',
    '初八',
    '初九',
    '初十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '廿一',
    '廿二',
    '廿三',
    '廿四',
    '廿五',
    '廿六',
    '廿七',
    '廿八',
    '廿九',
    '三十',
)

var hzs = new Array(
    '',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
)

function nongli(nnian, nyue, nri) {
    var suannian = nnian - 1977
    var nianr = 0
    var nianq = 0
    for (var ii = 0; ii < 4; ii++) {
        var suannian1 = suannian - ii
        if (suannian1 % 4 == 0) {
            nianr = ii
            nianq = suannian1 / 4
            break
        }
    }
    var nianriqixushu = 0
    for (var ii = 1; ii < nyue; ii++) {
        if ((nnian % 4 == 0 && new nnian % 100 != 0) || nnian % 400 == 0) {
            nianriqixushu += parseInt(runnian[[ii]])
        } else {
            nianriqixushu += parseInt(pingnian[[ii]])
        }
    }
    nianriqixushu += nri
    var nlrq = nianriqixushu - 42
    for (var ii = 1; ii < nyue; ii++) {
        if (nlrq > parseInt(nlyue[ii])) {
            nlrq -= parseInt(nlyue[ii])
        } else {
            nlrq = ii
            break
        }
    }
    suannian = nianriqixushu + 14 * nianq + 10.6 * (nianr + 1)
    suannian = parseInt(suannian - parseInt(suannian / 29.5) * 29.5)
    var tianganri = parseInt(nnian / 100) * 4 + parseInt(parseInt(nnian / 100) / 4)
    var dizhiri = parseInt(nnian / 100) * 8 + parseInt(parseInt(nnian / 100) / 4)
    if (nyue == 1 || nyue == 2) {
        tianganri += 5 * (parseInt(nnian % 100) - 1) + parseInt((parseInt(nnian % 100) - 1) / 4) + parseInt(3 * (12 + nyue) / 5) + nianriqixushu
        dizhiri += 5 * (parseInt(nnian % 100) - 1) + parseInt((parseInt(nnian % 100) - 1) / 4) + parseInt(3 * (12 + nyue) / 5) + nianriqixushu
    } else {
        tianganri += 5 * (parseInt(nnian % 100)) + parseInt((parseInt(nnian % 100)) / 4) + parseInt(3 * (nyue) / 5) + nianriqixushu
        dizhiri += 5 * (parseInt(nnian % 100)) + parseInt((parseInt(nnian % 100)) / 4) + parseInt(3 * (nyue) / 5) + nianriqixushu
    }
    if (nyue % 2 != 0) {
        dizhiri += 6
    }
	var tianganshu = tianganri % 10 - 3
	var dizhishu = dizhiri % 12 + 7
	if(tianganshu>12){
		tianganshu-=12
	}
	if(tianganshu<1){
		tianganshu=12-tianganshu
	}
	if(dizhishu>12){
		dizhishu-=12
	}
	if(dizhishu<1){
		dizhishu=12-dizhishu
	}
    return hzs[nlrq] + '月' + rqs[suannian] + ' ' + tiangan[tianganshu] + dizhi[dizhishu] + '日'
}

function duqu(nnian, nyue, nri) {
    if (nyue < 10) {
        nyue = '0' + nyue
    }
    if (nri < 10) {
        nri = '0' + nri
    }
    var jsdz = nnian + ' - ' + nyue + ' - ' + nri

    var wnlbl = wnl.split(jsdz)[1].split('\n')[0]
    document.getElementById('rll').getElementsByTagName('p')[1].innerHTML = wnlbl.split('suici: ')[1].split(', ')[0].split('年 ')[1]
    document.getElementById('rll').getElementsByTagName('p')[2].innerHTML = '五行：' + wnlbl.split('wuxing: ')[1].split(', ')[0]
    document.getElementById('rll').getElementsByTagName('p')[3].innerHTML = '财神：' + wnlbl.split('cai: ')[1].split(', ')[0]
    document.getElementById('rll').getElementsByTagName('p')[4].innerHTML = '喜神：' + wnlbl.split('xi: ')[1].split(', ')[0]
    document.getElementById('rll').getElementsByTagName('p')[5].innerHTML = '福神：' + wnlbl.split('fu: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[4].innerHTML = '宜：' + wnlbl.split('yi: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[5].innerHTML = '忌：' + wnlbl.split('ji: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[3].innerHTML = '冲：' + wnlbl.split('chong: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[1].innerHTML = '黄道吉日：' + wnlbl.split('dao: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[2].innerHTML = '星宿：' + wnlbl.split('xingxiu: ')[1].split(', ')[0]
    document.getElementById('hll').getElementsByTagName('p')[0].innerHTML = '节气：' + wnlbl.split('jieqi: ')[1].split(')')[0]
    console.log(wnl.split(jsdz)[1].split('\n')[0])
}

function sstime() {
    var tian = (new Date().getFullYear() - 3) % 10
    var di = (new Date().getFullYear() - 3) % 12
    var xingyao = new Date().getDay()
    xingyao = zhou[xingyao]
    if (new Date().getHours() == 23 || new Date().getHours() == 24 || new Date().getHours() == 0) {
        var shicheng = 1
    } else if (new Date().getHours() == 1 || new Date().getHours() == 2) {
        var shicheng = 2
    } else if (new Date().getHours() == 3 || new Date().getHours() == 4) {
        var shicheng = 3
    } else if (new Date().getHours() == 5 || new Date().getHours() == 6) {
        var shicheng = 4
    } else if (new Date().getHours() == 7 || new Date().getHours() == 8) {
        var shicheng = 5
    } else if (new Date().getHours() == 9 || new Date().getHours() == 10) {
        var shicheng = 6
    } else if (new Date().getHours() == 11 || new Date().getHours() == 12) {
        var shicheng = 7
    } else if (new Date().getHours() == 13 || new Date().getHours() == 14) {
        var shicheng = 8
    } else if (new Date().getHours() == 15 || new Date().getHours() == 16) {
        var shicheng = 9
    } else if (new Date().getHours() == 17 || new Date().getHours() == 18) {
        var shicheng = 10
    } else if (new Date().getHours() == 19 || new Date().getHours() == 20) {
        var shicheng = 11
    } else if (new Date().getHours() == 21 || new Date().getHours() == 22) {
        var shicheng = 12
    }
    document.getElementById("ssrq").innerHTML = new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + new Date().getDate() + '日' + ' ' + new Date().getHours() + '时' + new Date().getMinutes() + '分' + new Date().getSeconds() + '秒' + ' ' + '星期' + xingyao
    document.getElementById("ssnlrq").innerHTML = tiangan[tian] + dizhi[di] + shengxiao[di] + '年' + ' ' + nongli(new Date().getFullYear(), (new Date().getMonth() + 1), new Date().getDate()) + ' ' + dizhi[shicheng] + '时'
}

var sstimel = setInterval(sstime, 0)
duqu(new Date().getFullYear(), (new Date().getMonth() + 1), new Date().getDate())