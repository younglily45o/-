var index = 0;
//效果
function ChangeImg() {
	// 轮播方法
	index++;
	var a = document.getElementsByClassName("img-slide"); /*这玩意儿贼好用*/
	var YuanQuang = document.getElementsByClassName("box-o");
	boxleft = document.getElementById("box-left");
	boxright = document.getElementById("box-right");

	if (index >= a.length) index = 0;
	for (var i = 0; i < a.length; i++) {
		a[i].style.display = 'none';
		YuanQuang[i].style.backgroundColor = "#CCCCCC"
	}

	// function left() {
	// 	index--;
	// }

	// function right() {
	// 	index++;
	// }
	a[index].style.display = 'block';
	YuanQuang[index].style.backgroundColor = "#ffffff"
}
//设置定时器，每隔两秒切换一张图片
setInterval(ChangeImg, 2000);
