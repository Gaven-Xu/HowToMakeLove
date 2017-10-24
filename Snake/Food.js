
/*

				属性				        方法
食物         大小、颜色、位置			 出现，改变位置 


采用构造函数的方法来
	因为食物是要创建的        

而对于 游戏引擎，它只有1个，用 字面量的形式会【更好】
*/

function Food() {

	// 坐标
	this.x = 0;
	this.y = 0;

	// 一开始就随机位置
	this.change();
}

// 方法1: 出现在环境中
Food.prototype.show = function() {
	gGameBox.allTds[this.y][this.x].className = "food";
}

// 方法2: 改变位置, 随机的
Food.prototype.change = function() {
	this.x = parseInt(Math.random() * gGameBox.cols);
	this.y = parseInt(Math.random() * gGameBox.rows);

	this.show();
}