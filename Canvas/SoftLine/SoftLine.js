window.Gaven = window.Gaven || {};
(function() {

    /**
     * [SoftLine 构建函数]
     * @param {[string]} canvasID [canvas id]
     * @param {[object]} points [4个坐标键值对]
     * @param {[object]} config [线型键值对]
     */

    var SoftLine = function(canvasID, points, config) {

        var this._ele;
        var this._ctx;
        var this._points;
        var this._config = {
            color = '#08f',
            lineWidth = 5,
            lineCap = 'round',
            lineJoin = 'round'
        }

        if (canvasID && typeof canvasID == 'string') {

            /**
             * [_ele description]
             * @type {[type]}
             */
            this._ele = document.getElementById(canvasID);
            this._ctx = this._ele.getContext('2d');

            if (points && points != '' && typeof points == 'object') {
                this._points = points;
            } else {
                this._points = {
                    sX: points[0],
                    sY: points[1],
                    eX: points[2],
                    eY: points[3]
                }
            }

            if (config && config != '' && typeof config == 'object') {
                this._config = {
                    color = config.color,
                    lineWidth = config.lineWidth,
                    lineCap = config.lineCap,
                    lineJoin = config.lineJoin
                }
            }

        } else {
            return '请输入正确的canvas id值,且类型为string';
        }

    }

})
