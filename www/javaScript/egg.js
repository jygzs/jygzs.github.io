"use strict";
function myBrowser(){
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	if (userAgent.indexOf("Opera") > -1){
		return "Opera"
	}; //判断是否Opera浏览器
	if (userAgent.indexOf("Firefox") > -1){
		return "Firefox";
	} //判断是否Firefox浏览器
	if (userAgent.indexOf("Chrome") > -1){
		return "Chrome";
	}
	if (userAgent.indexOf("Safari") > -1){
		return "Safari";
	} //判断是否Safari浏览器
	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){
		return "IE";
	}; //判断是否IE浏览器
};
window.tempData = [0];
function eggButton(){
	window.tempData[0] = window.tempData[0] + 1;
	document.write('<p>"内行!233333"<button type="button" onclick="eggButton()"></p>');
	var temp = window.tempData[0];
	if (temp === 5){
		window.alert('来van♂呀！')
	}else if (temp === 10){
		window.alert('相信我，永远也点不完！')
	}else if (temp === 20){
		window.alert('看来你真的是一个编程小白！')
	}else if (temp === 25){
		window.alert('2333333333333')
	}else if (temp === 30){
		window.alert('好吧，你随便，我走了')
		window.alert('【野生计数菌】退出了直播间')
	};
	return '恭喜你发现第一个彩蛋!';
};
function egg(){
	if (myBrowser() === 'Chrome'){
		eggButton();
	};
};