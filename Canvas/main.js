window.Gaven = window.Gaven || {}; // 全部重写吧，骚年，var a = new Softline(...) 就直接创建线条
(function() {

    var SoftLine = function(canvasID) {
        this._canvas = document.getElementById(canvasID);
        this._offLeft = this._canvas.offsetLeft;
        this._offTop = this._canvas.offsetTop;
        this._ctx = this._canvas.getContext('2d');
        this._lineColor = '#a00';
        this._lineWidth = 10;
        this._lineCap = 'round';
        this._lineJoin = 'round';
        this._fillColor = '#000';
    }

    Object.defineProperties(SoftLine, {
        html: {
            get: function() {
                return this._canvas;
            }
        },
        strokeStyle: {
            set: function(colorString) {
                this._lineColor = colorString;
            },
            get: function() {
                return this._lineColor;
            }
        },
        lineWidth:{
            set:function(widthNumber) {
                this._lineWidth = widthNumber;
            },
            get:function() {
                return this._lineWidth;
            }
        },
        lineCap:{
            set:function(capString) {
                this._lineCap = capString;
            },
            get:function() {
                return this._lineCap;
            }
        },
        lineJoin:{
            set:function(joinString) {
                this._lineJoin = joinString;
            },
            get:function() {
                return this._lineJoin;
            }
        },
        fillColor: {
            set: function(colorString) {
                this._fillColor = colorString;
            },
            get: function() {
                return this._fillColor;
            }
        }
    })

    SoftLine.prototype.drawLine = function(startX, startY, endX, endY, cp1x, cp1y, cp2x, cp2y) {
        this._ctx.strokeStyle = this._lineColor;
        this._ctx.lineWidth = this._lineWidth;
        this._ctx.lineCap = this._lineCap;
        this._ctx.lineJoin = this._lineJoin;
        this._ctx.beginPath();
        this._ctx.moveTo(startX, startY);
        this._ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        this._ctx.stroke();
    }

    SoftLine.prototype.calcCP = function(startX, startY, endX, endY, mouseX, mouseY) {
        return {
            cp1x: 0.7 * (mouseX - startX) + startX,
            cp1y: 0.7 * (mouseY - startY) + startY,
            cp2x: 0.7 * (mouseX - endX) + endX,
            cp2y: 0.7 * (mouseY - endY) + endY
        }
    }

    SoftLine.prototype.clear = function() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    SoftLine.prototype.isInArea = function(startX, startY, endX, endY, mouseX, mouseY) {
        if (mouseX > startX && mouseX < endX && mouseY > startY && mouseY < endY) {
            return true;
        } else {
            return false;
        }
    }

    SoftLine.prototype.isLeft = function(startX, startY, endX, endY, mouseX, mouseY) {
        var centerX = endX/2;
        var centerY = endY/2;
        if (mouseX > startX && mouseX < endX && mouseY > startY && mouseY < endY) {
            return true;
        } else {
            return false;
        }
    }

    SoftLine.setColor = function(startX,startY,endX,endY,startColor,endColor) {
        this._lingrad = this._ctx.createLinearGradient(startX,startY,endX,endY);
        this._lingrad.addColorStop(0, startColor);
        this._lingrad.addColorStop(1, endColor);
        this._ctx.strokeStyle = this._lingrad; // no complete

    }

    window.Gaven.SoftLine = SoftLine;

})();

(function() {

    var SoftLine = window.Gaven.SoftLine;

    var canvasDOM = document.getElementById('canvas');

    var Canvas = new SoftLine('canvas');
    Canvas.lineColor = 'rgb(118, 246, 92)';
    Canvas.drawLine(30, 30, 370, 270, 30, 30, 370, 270);

    function render(e) {
        Canvas.clear();
        var mouseX = e.clientX - canvasDOM.offsetLeft;
        var mouseY = e.clientY - canvasDOM.offsetTop;
        if (Canvas.isInArea(30, 30, 370, 270, mouseX, mouseY)) {
            var cps = Canvas.calcCP(30, 30, 370, 270, mouseX, mouseY);
            Canvas.drawLine(30, 30, 370, 270, cps.cp1x, cps.cp1y, cps.cp2x, cps.cp2y);
        } else {
            Canvas.drawLine(30, 30, 370, 270, 30, 30, 370, 270);
        }
    }

    canvasDOM.addEventListener('mouseover', function() {
        canvasDOM.addEventListener('mousemove', render);
    });
    canvasDOM.addEventListener('mouseleave', function() {
        canvasDOM.removeEventListener('mousemove', render);
    });

})()
