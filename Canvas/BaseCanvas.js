window.Gaven = window.Gaven || {};
(function() {

    function BaseCanvas(canvasID) {
        this._ele = 'undefiend';
        this._ctx = 'undefiend';
        if (canvasID && typeof canvasID == 'string') {

            /**
             * [_ele description]
             * @type {[type]}
             */
            this._ele = document.getElementById(canvasID);
            this._ctx = this._ele.getContext('2d');
        }
    }

    BaseCanvas.prototype.clear = function() {
        this._ctx.clearRect(0,0,this._ele.width,this._ele.height);
    }

    Gaven.BaseCanvas = BaseCanvas;

})();
