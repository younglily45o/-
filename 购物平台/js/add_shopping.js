function addshop() {
		flag = localStorage.getItem("flag0");
		if (flag == 0) {

			tr = document.createElement("tr");
			tr.id = "del7";
			// tr.onclick=" del7()"
			ta = document.getElementById("table");
			td0 = document.createElement("td");
			input1 = document.createElement("input");
			input1.type = "checkbox";
			input1.name = "user";

			td1 = document.createElement("td");
			img = document.createElement("img");
			img.src = "images/商品0.jpg";

			td2 = document.createElement("td");
			td2.id = "shopmassage";
			td2.innerHTML = "时尚史上最巨无霸牛蓝牙耳机，不能用不退钱,欢迎伞兵购买";

			td3 = document.createElement("td");
			// td3.id = "danjia0"

			td3.innerHTML = "9.99"
			td4 = document.createElement("td");
			div_d0 = document.createElement("div");
			div_d0.id = "button0";
			botton1 = document.createElement("button");
			botton1.id = "button1";
			botton1.className = "button0";
			botton1.type = "button";
			botton1.innerHTML = "<p>-</p>";
			botton2 = document.createElement("button");
			botton2.id = "button3"
			botton2.type = "button"
			botton2.innerHTML = "<p>+</p>"
			div_d1 = document.createElement("div");
			div_d1.id = "button2";
			div_d2 = document.createElement("div");
			// div_d2.id = "result0"

			div_d2.innerHTML = 0;
			td5 = document.createElement("td");
			// td5.id = "jinE0";

			td5.className = "jinE";
			td5.innerHTML = 0;
			td6 = document.createElement("td");
			td6.id = "delete";


			ah = document.createElement("a");
			ah.href = "#";
			ah.innerHTML = "删除";

			td0.className = "select";

			{
				// 设置创建标签的位置
				ta.appendChild(tr);
				tr.appendChild(td0);
				td0.appendChild(input1)
				tr.appendChild(td1);
				td1.appendChild(img);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				td4.appendChild(div_d0);
				div_d0.appendChild(botton1);
				div_d0.appendChild(div_d1);
				div_d1.appendChild(div_d2)
				div_d0.appendChild(botton2);
				tr.appendChild(td5);
				tr.appendChild(td6);
				td6.appendChild(ah);
			}
		} else if (flag == 1) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品1.jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "黑鲨冰封制冷背夹3专业版2Pro散热器手机导热磁吸片强效风扇炫彩";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";


				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}
			}

		} else if (flag == 2) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品2.jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "男鞋秋冬季2022新款潮流百搭青少年运动休闲跑步增高老爹ins潮鞋";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}
			}

		} else if (flag == 3) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "海尔全自动变频滚筒洗衣机 10公斤大容量节能静音香薰洗双重除菌";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 4) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "德国进口刀头正品新款多功能剃须刀USB车载充电刮胡刀水洗胡须刀";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 5) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "医用外科口罩一次性三层防护批发成人医用防尘防疫独立包装医用级";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 6) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "40只装袜子男款防臭吸汗长袜中筒运动袜四季款商务男士袜批发直销";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 7) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "小红书推荐发胶喷雾男士造型清香头发造型自然蓬松啫喱水发泥发蜡";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 8) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "联想XE05蓝牙耳机挂脖式颈挂无线运动跑步耳入耳游戏吃鸡超长待机";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 9) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "【3人团】超能洗衣液馨香依兰自然清新手洗机洗持久留香一整包邮";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 10) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "宜人家南昌拌粉7种调料包香辣味粉条江西米粉速食早餐夜宵粉丝1盒";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 11) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "飞科（FLYCO） 便携吹风机电吹风负离子家用大功率深度养发吹风筒速干";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 12) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "洗发水氨基酸乳液修护防干燥洗护套装";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 13) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "美肤语奶咖色简约盘发夹后脑勺夹子发抓鲨鱼夹发卡顶夹头饰头发";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 14) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "华麦斯 德国 家用工具箱套装多功能家庭电讯维修工具组合套装";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 15) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "秋冬季新款衣服装港风学生宽松连帽印花情侣春秋外套卫衣加绒加厚中山卫衣";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 16) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "凉鞋女一字带闪耀水钻女鞋仙女风厚底增高韩版网红百搭舒适平底鞋";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 17) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "庭睿百搭女士漏腰多层甜美毛衣腰链金属链条皮带 白色";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 18) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "时尚史上最巨无霸吊蓝牙耳机，不能用不退钱,欢迎伞兵购买";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 19) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "Apple iPhone12苹果12 移动联通电信（美版有锁激活）全面屏手机智能手机";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		} else if (flag == 20) {
			{

				tr = document.createElement("tr");
				// tr.id = "del7";
				ta = document.getElementById("table");
				td0 = document.createElement("td");
				input1 = document.createElement("input");
				input1.type = "checkbox";
				input1.name = "user";

				td1 = document.createElement("td");
				img = document.createElement("img");
				img.src = "images/商品" + flag + ".jpg";

				td2 = document.createElement("td");
				td2.id = "shopmassage";
				td2.innerHTML = "INGRAM′S南非小绿膏原装进口脚后跟脱皮膏足裂膏保湿护肤霜 脚跟套2个装";

				td3 = document.createElement("td");
				// td3.id = "danjia0"

				td3.innerHTML = "9.99"
				td4 = document.createElement("td");
				div_d0 = document.createElement("div");
				div_d0.id = "button0";
				botton1 = document.createElement("button");
				botton1.id = "button1";
				botton1.className = "button0";
				botton1.type = "button";
				botton1.innerHTML = "<p>-</p>";
				botton2 = document.createElement("button");
				botton2.id = "button3"
				botton2.type = "button"
				botton2.innerHTML = "<p>+</p>"
				div_d1 = document.createElement("div");
				div_d1.id = "button2";
				div_d2 = document.createElement("div");
				// div_d2.id = "result0"

				div_d2.innerHTML = 0;
				td5 = document.createElement("td");
				// td5.id = "jinE0";

				td5.className = "jinE";
				td5.innerHTML = 0;
				td6 = document.createElement("td");
				td6.id = "delete";

				ah = document.createElement("a");
				ah.href = "#";
				ah.innerHTML = "删除";

				td0.className = "select";

				{
					// 设置创建标签的位置
					ta.appendChild(tr);
					tr.appendChild(td0);
					td0.appendChild(input1)
					tr.appendChild(td1);
					td1.appendChild(img);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					td4.appendChild(div_d0);
					div_d0.appendChild(botton1);
					div_d0.appendChild(div_d1);
					div_d1.appendChild(div_d2)
					div_d0.appendChild(botton2);
					tr.appendChild(td5);
					tr.appendChild(td6);
					td6.appendChild(ah);
				}

			}

		}


	}
