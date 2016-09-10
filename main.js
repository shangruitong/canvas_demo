window.onload = function() {
	var canvas = document.getElementById('canvas');


	//canvas 标签不建议使用css的方式设定宽高。

	// 1 canvas.width = 

	// 2 canvas.height = 

	// 3 canvas.getContext("2d")

	var ctx = canvas.getContext("2d"); //返回一个绘图对象，就是我们以后要操作的具体对象。


	ctx.lineWidth = 5;

	ctx.strokeStyle = "blue"; //笔画stroke 笔画的样式

	ctx.fillStyle = "rgba(255,0,0,0.5)"; //填充样式


	//画一条直线，传入两个点的坐标
	function drawLine(x1, x2, y1, y2) {

		ctx.beginPath(); //开始一段新的路径

		ctx.moveTo(x1, x2);

		ctx.lineTo(y1, y2);

		ctx.closePath(); //结束当前的路径 

		ctx.stroke();
	}



	function drawPic(arr) {

		// if(arr typeof Array){

		ctx.beginPath(); //开始一段新的路径

		ctx.moveTo(arr[0].x, arr[0].y);

		for (var i = 1; i < arr.length; i++) {
			ctx.lineTo(arr[i].x, arr[i].y);
		}

		ctx.closePath(); //结束当前的路径 

		// }


		ctx.fill();

		ctx.stroke();
	}

	drawLine(100, 100, 200, 200);

	var tangram = [{
		points: [{
			x: 0,
			y: 0
		}, {
			x: 800,
			y: 0
		}, {
			x: 400,
			y: 400
		}],
		color: "#caff67"
	}, {
		points: [{
			x: 0,
			y: 0
		}, {
			x: 400,
			y: 400
		}, {
			x: 0,
			y: 800
		}],
		color: "#67becf"
	}, {
		points: [{
			x: 800,
			y: 0
		}, {
			x: 800,
			y: 400
		}, {
			x: 600,
			y: 600
		}, {
			x: 600,
			y: 200
		}],
		color: "#ef3d61"
	}, {
		points: [{
			x: 600,
			y: 200
		}, {
			x: 600,
			y: 600
		}, {
			x: 400,
			y: 400
		}],
		color: "#f9f51a"
	}, {
		points: [{
			x: 400,
			y: 400
		}, {
			x: 600,
			y: 600
		}, {
			x: 400,
			y: 800
		}, {
			x: 200,
			y: 600
		}],
		color: "#e594c0"
	}, {
		points: [{
			x: 200,
			y: 600
		}, {
			x: 400,
			y: 800
		}, {
			x: 0,
			y: 800
		}],
		color: "#fa8ecc"
	}, {
		points: [{
			x: 800,
			y: 400
		}, {
			x: 800,
			y: 800
		}, {
			x: 400,
			y: 800
		}],
		color: "#f6ca29"
	}];



	//绘制七巧板
	for (var i = 0; i< tangram.length; i++) {

		console.log(tangram[i].points);

		ctx.fillStyle = tangram[i].color;

		drawPic(tangram[i].points);
	}




}
