var i = new Array(10).fill(0);
var allcount = new Array(10).fill(0);
// z=0
{

	function clickJia0() {
		
		t = 0;
		i[t]++;
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		// 货物个数
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);
		/*提取单价*/
		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		// 输出金额
		allcount[t] = danjia * i[t]; /*这个计算总结时用到*/

	}

	function clickJian0() {
		t = 0;
		i[t]--;
		if (i[t] < 0) i[t] = 0; /*货物个数最少不为0*/
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);
		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		allcount[t] = danjia * i[t];
	}
}

{

	function clickJia1() {
		t = 1;
		i[t]++;
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);

		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		allcount[t] = danjia * i[t];
	}

	function clickJian1() {
		t = 1
		i[t]--;
		if (i[t] < 0) i[t] = 0;
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);
		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		allcount[t] = danjia * i[t];
	}
}

{

	function clickJia2() {
		t = 2;
		i[t]++;
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);

		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		allcount[t] = danjia * i[t];
	}

	function clickJian2() {
		t = 2
		i[t]--;
		if (i[t] < 0) i[t] = 0;
		shopping = document.getElementById('result' + t);
		shopping.innerHTML = i[t];
		danjia = document.getElementById("danjia" + t).innerText;
		danjia = Number(danjia);
		jinE = document.getElementById('jinE' + t);
		jinE.innerHTML = danjia * i[t];
		allcount[t] = danjia * i[t];
	}
}

{
	// 全选以及取消全选
	function QuanXuan() {
		var checked = document.getElementById("QuanXuan").checked;
		var checkson = document.getElementsByName("user");
		if (checked) {
			for (var i = 0; i < checkson.length; i++) {
				checkson[i].checked = true;
			}
		} else {
			for (var i = 0; i < checkson.length; i++) {
				checkson[i].checked = false;
			}
		}
	}
}

function money() {
	// 对商品计算总价
	allmoney = document.getElementById('allmoney');
	tmp = 0
	for (j = 0; j < allcount.length; j++) {
		tmp = tmp + allcount[j]
	}
	if(tmp==0){
		allmoney.innerHTML = 0
	}else{
		allmoney.innerHTML = tmp.toFixed(3)
	}
	
}

{
	// 商品的删除
	function del0() {
		del = document.getElementById("del0");
		del.remove()
		
	}

	function del1() {
		del = document.getElementById("del1");
		del.remove()
		
	}

	function del2() {
		del = document.getElementById("del2");
		del.remove();
		
	}

	
}

