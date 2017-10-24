
/*
一、 找对象
				属性				      方法
游戏引擎     场景、蛇、食物			    开始、结束

二、 实现对象
	游戏引擎

休息20分钟，15:50 继续
*/


 
// 定义  游戏引擎  对象
var gGameBox = {
	
	rows: 60,  // 行数
	
	cols: 80,  // 列数

	allTds: [], // 存储所有的td元素对象

	food: null, // 食物对象

	snake: null, // 蛇对象
	
	// 方法： 清空棋盘
	clear:function(){
		for(i=0;i<gGameBox.allTds.length;i++){

		}
	},
	// 方法： 游戏开始
	start: function() {

		gGameBox.init(); // 游戏初始化
		
		this.food = new Food(); // 创建食物
		this.snake = new Snake(); // 创建蛇

		this.snake.fresh();
	},

	// 初始化
	init: function() {
		// 场景布置好, 用表格来做
		var oTable = document.createElement("table");
	
		for (var i = 0; i < gGameBox.rows; i++)
		{
			// 创建tr
			var oTr = document.createElement("tr"); 

			// 每一行，定义1个空数组
			var arr = [];

			for (var j = 0; j < gGameBox.cols; j++) {
				// 创建td
				var oTd = document.createElement("td"); 

				oTr.appendChild(oTd);

				// 将td放到空数组中
				arr.push(oTd);
			}
			// 将当前行所有的td，压入到 allTds 属性中
			gGameBox.allTds.push(arr);

			oTable.appendChild(oTr);
		}

		// 添加到body
		document.body.appendChild(oTable);
	}
};