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
            fill: '#000',
            tension: 0.5,
            draggable: true,
            zIndex:1
        })
        
        roundLine.move({
            x: 100,
            y: 100
            
        })
        layer_shape.add(rect,circle,ellipse,wedge,line,poly,roundLine);
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