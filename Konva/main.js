(function () {

    var stage = new Konva.Stage({
        container: 'KonvaContainer',
        width: window.innerWidth,
        height: window.innerHeight
    })

    var layer_back = new Konva.Layer();
    var layer_sprite = new Konva.Layer();
    var layer_shape = new Konva.Layer()
    stage.add(layer_shape);

    /**
     * shape
     */
    {

        var rect = new Konva.Rect({
            x: 50,
            y: 50,
            width: 320,
            height: 240,
            fill: '#f00',
            draggable: true
        })

        var circle = new Konva.Circle({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            radius: 100,
            fill: '#0f0',
            stroke: 'black',
            strokeWidth: 4,
            dash: [10, 2],
            draggable: true
        })

        var ellipse = new Konva.Ellipse({
            x: 100,
            y: 100,
            radius: {
                x: 100,
                y: 50,
            },
            fill: '#0f0',
            draggable: true
        })

        /**
         * rotation 扇形开始的角度
         * angle 顺时针转多少度
         * radius 扇形的半径
         */
        var wedge = new Konva.Wedge({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            radius: 70,
            angle: 60,
            fill: 'red',
            rotation: 0,
            draggable: true
        });

        /**
         * lineCap:  butt, round, or square
         * lineJoin: miter, round, or bevel
         */
        var line = new Konva.Line({
            points: [10, 10, 10, 110, 110, 110, 110, 10],
            stroke: "#09f",
            strokeWidth: 3,
            lineCap: 'butt',
            lineJoin: 'round',
            dash: [10, 2, 30, 2],
            draggable: true
        })

        line.move({
            x: 20,
            y: 100
        })

        var poly = new Konva.Line({
            points: [10, 10, 10, 110, 110, 110, 110, 10],
            stroke: "#09f",
            strokeWidth: 3,
            lineCap: 'butt',
            lineJoin: 'round',
            dash: [10, 2, 30, 2],
            closed: true,
            // fill:'red',
            draggable: true,
            tension: 2
        })

        poly.move({
            x: stage.getWidth() / 2 - 60,
            y: stage.getHeight() / 2 - 60
        })

        var roundLine = new Konva.Line({
            points: [0, 0, 300, 100, 600, 0],
            stroke: '#000',
            strokeWidth: 5,
            dash: [0, 10],
            lineCap: 'round',
            closed: true,
            fill: 'rgba(123,67,23,0.5)',
            tension: 0.5,
            draggable: true,
            zIndex: 1
        })

        roundLine.move({
            x: 100,
            y: 100

        })

        var text = new Konva.Text({
            x: 20,
            y: stage.getHeight() - 200,
            text: '咸鱼也有梦想',
            fontSize: 100,
            fontFamily: '微软雅黑',
            stroke: '#f90',
            fill: 'rgba(0,0,0,0)',
            strokeWidth: 2,
            dash: [10, 5, 30, 10],
            draggable: true
        })

        var textpath = new Konva.TextPath({
            x: 20,
            y: stage.getHeight() - 200,
            text: '咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想咸鱼也有梦想',
            fontSize: 14,
            fontFamily: '微软雅黑',
            fill: 'rgba(0,0,0,0.7)',
            draggable: true,
            data: 'M10,10 C-100,0 300,560 300,160 0,0 -100,-500 L10,10'
        })

        var star = new Konva.Star({
            x: stage.getWidth() / 4,
            y: stage.getHeight() / 4,
            numPoints: 7,
            innerRadius: 60,
            outerRadius: 100,
            fill: '#ff5',
            stroke: '#58f',
            strokeWidth: 6,
            draggable: true,
            // lineJoin:'round',
            
        })

        var ring = new Konva.Ring({
            x: 100,
            y: 100,
            innerRadius: 60,
            outerRadius: 100,
            fill: "#ff5",
            stroke: '#58f',
            strokeWidth: 6,
            draggable: true
        })

        var arc = new Konva.Arc({
            x: 200,
            y: 300,
            innerRadius: 40,
            outerRadius: 70,
            rotation: 180,
            angle: 180,
            fill: "#ff5",
            stroke: '#58f',
            strokeWidth: 6,
            draggable: true
        })

        var label1 = new Konva.Label({
            x: 430,
            y: 150,
            draggable:true,
            opacity: 1
        })

        var tag1 = new Konva.Tag({
            fill: 'black',
            pointerDirection: 'down',
            pointerWidth: 10,
            pointerHeight: 5,
            lineJoin: 'round',
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: 10,
            shadowOpacity: 0.5,
        })

        var text1 = new Konva.Text({
            text:'Hello World',
            fill:"white",
            fontSize:10,
            padding:5,
            height:20
        })

        label1.add(tag1).add(text1)


        var path = new Konva.Path({
            x:stage.getWidth()/1.5,
            y:stage.getHeight()/1.5,
            data:'M0,0 C0,0 0,-100 100,-100 c0,0 100,0 100,100',
            fill:'red',
            draggable:true
        })

        var regPoly = new Konva.RegularPolygon({
            x:stage.getWidth()/2,
            y:stage.getHeight()/2,
            sides:4,
            radius:100,
            fill: "#ff5",
            stroke: '#58f',
            strokeWidth: 6,
            draggable:true,
            shadowColor: '#666',
            shadowBlur: 5,
            shadowOffset: {x : 0, y : 5},
            shadowOpacity: 0,
        });

        regPoly.on('mouseover',function(){
            this.fill('#f00');
            layer_shape.draw()
        })

        regPoly.on('mouseout',function(){
            this.fill('#ff5');
            layer_shape.draw()
        })

        var arrow = new Konva.Arrow({
            x:80,
            y:80,
            points:[0,0,300,300],
            pointerLength:100,
            pointerWidth:100,
            // pointerHeight:300,
            fill: "#ff5",
            stroke: '#58f',
            strokeWidth: 6,
            draggable:true,
        })

        /**
         * sceceFunc 传入context，使用原生方法绘制形状
         */
        var triangle = new Konva.Shape({
            sceneFunc: function(context) {
              context.beginPath();
              context.moveTo(20, 50);
              context.lineTo(220, 80);
              context.quadraticCurveTo(150, 100, 260, 170);
              context.closePath();
              // Konva specific method
              context.fillStrokeShape(this);
            },
            fill: "#ff5",
            stroke: '#58f',
            strokeWidth: 6,
            draggable:true,
          }); 
        /**
         * Rect 矩形
         * Circle 圆形
         * Ellipse 椭圆
         * Line 之前，折线，曲线，多边形，不规则图形
         * Text 文本
         * TextPath 路径文本
         * 
         * Sprite 精灵图
         * Image 图片
         * 
         * Wedge 扇形
         * Star 星形
         * Ring 环形
         * Arc 弧形
         * Label 标签，Tag 标签形状（包括三角箭头），Text 可作为标签文字add到Label中
         * 
         * Path 路径，按照SVG绘图原理
         * RegularPolygon
         */
        layer_shape.add(rect, circle, ellipse, wedge, line, poly, roundLine, text, textpath);
        layer_shape.add(star, ring, arc);
        layer_shape.add(label1,path,regPoly,arrow,triangle)
        layer_shape.draw(); // draw 相当于刷新，
    }

    /**
     * back
     */
    {
        var backImage = new Image();
        backImage.onload = function () {
            var stageW = stage.getWidth(), stageH = stage.getHeight();
            var back = new Konva.Image({
                x: 0,
                y: 0,
                width: stageW,
                height: stageH,
                image: backImage,
                crop: {
                    x: (backImage.width - stageW) / 2,
                    y: (backImage.height - stageH) / 2,
                    width: stageW,
                    height: stageH
                }
            });
            layer_back.add(back);
            layer_back.draw();
        }
        backImage.src = "./back.png";
    }
    /**
     * fishman
     */
    {
        var fishmanImage = new Image();
        fishmanImage.onload = function () {

            var w = fishmanImage.width / 4, h = fishmanImage.height / 4;

            /**
             * x y width height
             */
            var fishmanAnimations = {
                idle: [
                    0 * w, 0 * h, 1 * w, 1 * h
                ],
                up: [
                    0 * w, 3 * h, 1 * w, 1 * h,
                    1 * w, 3 * h, 1 * w, 1 * h,
                    2 * w, 3 * h, 1 * w, 1 * h,
                    3 * w, 3 * h, 1 * w, 1 * h
                ],
                down: [
                    0 * w, 0 * h, 1 * w, 1 * h,
                    1 * w, 0 * h, 1 * w, 1 * h,
                    2 * w, 0 * h, 1 * w, 1 * h,
                    3 * w, 0 * h, 1 * w, 1 * h
                ],
                left: [
                    0 * w, 1 * h, 1 * w, 1 * h,
                    1 * w, 1 * h, 1 * w, 1 * h,
                    2 * w, 1 * h, 1 * w, 1 * h,
                    3 * w, 1 * h, 1 * w, 1 * h
                ],
                right: [
                    0 * w, 2 * h, 1 * w, 1 * h,
                    1 * w, 2 * h, 1 * w, 1 * h,
                    2 * w, 2 * h, 1 * w, 1 * h,
                    3 * w, 2 * h, 1 * w, 1 * h
                ]
            }

            var fishman = new Konva.Sprite({
                x: 0,
                y: 0,
                image: fishmanImage,
                animations: fishmanAnimations,
                animation: 'idle',
                frameRate: 12,
                frameIndex: 0
            })

            layer_sprite.add(fishman);
            fishman.start();

            document.addEventListener('keydown', function (e) {
                // e.preventDefault();
                switch (e.code) {
                    case 'ArrowUp':
                        fishman.y(fishman.y() - 8);
                        fishman.setAnimation('up');
                        break;
                    case 'ArrowDown':
                        fishman.y(fishman.y() + 8);
                        fishman.setAnimation('down');
                        break;
                    case 'ArrowLeft':
                        fishman.x(fishman.x() - 10);
                        fishman.setAnimation('left');
                        break;
                    case 'ArrowRight':
                        fishman.x(fishman.x() + 10);
                        fishman.setAnimation('right');
                }
            })

            document.addEventListener('keyup', function (e) {
                fishman.setAnimation('idle');
            })
        }
        fishmanImage.src = './fishman.png';
    }

    // setBack(setFishman)

})()