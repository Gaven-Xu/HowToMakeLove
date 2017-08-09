window.Gaven = window.Gaven || {};
(function() {

    /**
     * [SoftLine 构建函数]
     * @param {[string]} canvasID [canvas id]
     * @param  {[object]} points [线条端点坐标]
     * @param  {[object]} config [线型]
     * @param  {[object]} cps    [两个端点的贝塞尔曲线控制点坐标]
     */
    var SoftLine = function(canvasID, points, config, cps) {

        Gaven.BaseCanvas.call(this, canvasID); // Copy BaseCanvas 属性

        this._canvasID = canvasID;

        // this._points;
        /**
         * [_points description]
         * 0 start x
         * 1 start y
         * 2 end x
         * 3 end y
         * @type {Array}
         */
        this._points = [0, 0, this._ele.width, this._ele.height];

        // this._config;
        /**
         * [_config description]
         * @type {Object}
         */
        this._config = {
            color: 'rgb(255,45,0)',
            lineWidth: 5,
            lineCap: 'round',
            lineJoin: 'round'
        }

        // this._cps;
        /**
         * [_cps description]
         * 0 start x
         * 1 start y
         * 2 end x
         * 3 end y
         * @type {[type]}
         */
        this._cps = this._points;

        this._evn = {};

        /**
         * [init 初始化线型]
         * @param  {[Array]} points [线条端点坐标]
         * @param  {[object]} config [线型]
         * @param  {[Array]} cps    [两个端点的贝塞尔曲线控制点坐标]
         */
        this.init = function(points, config, cps) {

            /**
             * [points 初始化]
             * @type {[object]}
             */
            if (points && points !== '' && typeof points === 'object') {
                this._points = points;
            }

            /**
             * [config 初始化]
             * @type {[object]}
             */
            if (config && config !== '' && typeof config === 'object') {
                this._config = config;
                this._ctx.strokeStyle = this._config.color;
                this._ctx.lineWidth = this._config.lineWidth;
                this._ctx.lineCap = this._config.lineCap;
                this._ctx.lineJoin = this._config.lineJoin;
            }

            /**
             * [cps 初始化]
             * @type {[object]}
             */
            if (cps.length && cps !== '' && typeof cps === 'object') {
                this._cps = cps;
                // console.log(this._cps);
            }

        }

        /**
         * [render description]
         * @param  {[Array]} points [description]
         * @param  {[object]} config [description]
         * @param  {[Array]} cps    [description]
         * @return {[none]}        [none]
         */
        this.render = function() {
            this._ctx.strokeStyle = this._config.color;
            this._ctx.lineWidth = this._config.lineWidth;
            this._ctx.lineCap = this._config.lineCap;
            this._ctx.lineJoin = this._config.lineJoin;
            this._ctx.beginPath();
            this._ctx.moveTo(this._points[0], this._points[1]);
            this._ctx.bezierCurveTo(this._cps[0], this._cps[1], this._cps[2], this._cps[3], this._points[2], this._points[3]);
            this._ctx.stroke();
        }
        this.init(points, config, cps);
        this.render();
    }

    //** proto functions
    SoftLine.prototype = new Gaven.BaseCanvas(this._canvasID);
    // 继承 BaseCanvas // 原型的深度拷贝

    SoftLine.prototype.setPoints = function(points) {
        this.clear();
        this._points = points;
        this.render();
    }

    SoftLine.prototype.setStyle = function(config) {
        this.clear();
        for (var prop in config) {
            this._config[prop] = config[prop];
            this._ctx[prop] = config[prop];
        }
        this.render();
    }


    SoftLine.prototype.setCP = function(cps) {
        this._cps = cps;
        this.render();
    }

    SoftLine.prototype.getCursor = function(e) {
        return {
            cX: e.clientX - this._ele.offsetLeft,
            cY: e.clientY - this._ele.offsetTop
        }
    }

    SoftLine.prototype.setAnimation = function(evn, fuc) {
        this._ele.addEventListener(evn, fuc);
    }

    Gaven.SoftLine = SoftLine;

    /**
     * [functionName description]
     * @return {[type]} [description]
     */
    function functionName() {

    }

})();
