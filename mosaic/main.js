$(document).ready(function () {

    /**
     * pic 马赛克特效中的小方块
     * @param {*} _img 
     * @param {*} _x postion x
     * @param {*} _y position y
     * @param {*} _w img width
     * @param {*} _h img height
     * @param {*} _direction 1,2,3,4 to top,right,bottom,left 
     */
    function pic(_x, _y, _w, _h, _direction) {
        this.x = _x;
        this.y = _y;
        this.cx = _x;
        this.cy = _y;
        this.w = _w;
        this.h = _h;
        this.direction = _direction;
    }

    /**
     * mosaic 马赛克动画对象
     * @param {*} _canvas 
     * @param {*} _img 
     * @param {*} _cols 
     * @param {*} _rows 
     */
    function mosaic(_canvas, _img, _cols, _rows) {
        this.canvas = _canvas;
        this.ctx = this.canvas.getContext('2d');
        this.img = _img;
        this.cols = _cols;
        this.rows = _rows;
        this.perWidth = this.canvas.width / this.cols;
        this.perHeight = this.canvas.height / this.rows;
        this.picsArray = [];
    }

    mosaic.prototype = {
        createPics: function () {
            // var _n = 0;
            this.picsArray = [];
            for (var y = 0; y < this.rows; y++) {
                for (var x = 0; x < this.cols; x++) {
                    // _n = _n % 4;
                    this.picsArray.push(new pic(x * this.perWidth, y * this.perHeight, this.perWidth, this.perHeight, Math.floor(Math.random() * 4)));
                    // _n++;
                }
            }
            return this;
        },
        drawMyImage: function () {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var index = 0; index < this.picsArray.length; index++) {
                var pic = this.picsArray[index];
                this.ctx.drawImage(this.img, pic.cx, pic.cy, pic.w, pic.h, pic.x, pic.y, pic.w, pic.h);
            }
        },
        moveMyImage: function () {
            var v = 1.2;
            if(v<=10){
                v = Math.pow(v,2);
            }else{
                v = Math.pow(v,-2);
            }
            for (var index = 0; index < this.picsArray.length; index++) {
                var pic = this.picsArray[index];
                switch (pic.direction) {
                    case 0:
                        pic.cy += v;
                        break;
                    case 1:
                        pic.cy -= v;
                        break;
                    case 2:
                        pic.cx += v;
                        break;
                    case 3:
                        pic.cx -= v;
                        break;
                    default:
                        break;
                }
            }
            this.drawMyImage();
            console.log(1);
        }
    }

    var mosaicImg = new Image();
    mosaicImg.onload = function () {
        var Donghua;
        Donghua = new mosaic(
            document.querySelector('#BackCanvas'),
            mosaicImg,
            16,
            9
        );
        Donghua.createPics();
        Donghua.drawMyImage();

        window.onload = function () {
            Donghua.canvas.width = $(window).width();
            Donghua.canvas.height = $(window).height();
            Donghua.perWidth = Donghua.canvas.width / Donghua.cols;
            Donghua.perHeight = Donghua.canvas.height / Donghua.rows;
            Donghua.createPics();
            Donghua.drawMyImage();
        }
        window.onresize = window.onreload;

        var requestid = null;
        function draw() {
            console.log(requestid);
            if (requestid > 10) {
                cancelAnimationFrame(requestid)
            } else {
                Donghua.moveMyImage()
                requestid = requestAnimationFrame(draw);
            }
        }
        requestid = requestAnimationFrame(draw);

    }
    mosaicImg.src = './images/wallhaven' + Math.ceil(Math.random() * 64) + '.jpg';

});