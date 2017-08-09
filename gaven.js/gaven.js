(function() {

    /**
     * [gaven is the main framwork selector]
     * @method gaven
     * @param  {String} or {Project} obj [description]
     * @return {Object} an gaven object
     * Author:Gaven
     */
    var a = setTimeout
    function gaven(obj) {

        if (typeof obj == 'string') {
            var target = document.getElementById(obj);
        } else {
            var target = obj;
        }

        var a = new Fun(target);
        return a;
    }

    /**
     * [Fun is an object contain all the framwork function]
     * @param {object} target is a DOM
     */
    function Fun(target) {
        this._target = target;
    }

    var p = Fun.prototype;

    /**
     * check wether this DOM has the class
     * @method hasClass
     * @param  {String}  cls className to check
     * @return {Boolean}    true for has
     * Author: Gaven
     */
    p.hasClass = function(cls) {
        console.log(this._target.className.indexOf(cls));
        if (this._target.className.indexOf(cls) == -1) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * add Class to a DOM
     * @method addClass
     * @param  {String} cls class name to add
     * @return {obj} return this DOM
     */
    p.addClass = function(cls) {
        if (!this.hasClass(cls)) this._target.className += " " + cls;
        return this;
    }

    /**
     * [remove Class from the DOM]
     * @param  {String} cls classname
     * @return {Object}     return this DOM
     */
    p.removeClass = function(cls) {
        if (this.hasClass(cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            this._target.className = this._target.className.replace(reg, ' ');
        }
        return this;
    }

    /**
     * toggle class
     * @param  {String} cls classname
     * @return {Object}     return this DOM
     */
    p.toggleClass = function(cls) {
        if (!this.hasClass(cls)) {
            this.addClass(cls);
        } else {
            this.removeClass(cls);
        }
        return this;
    }

    /**
     * [ajax handle]
     * @param  {[type]} url [description]
     * @return {[type]}     [description]
     * {{time}}
     */
    p.ajax = function(url) {
        var XHR = null;
        if (window.XMLHttpRequest) {
            XHR = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            XHR = new ActiveXObject('Microsoft XMLHTTP')
        } else {
            XHR = null;
        }
        if (XHR) {
            XHR.open('GET', url);
            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4 && XHR.status == 200) {
                    console.log(XHR.responseText);
                    XHR = null;
                }
            }
            XHR.send();
        }
    }

    /**
     * [module test]
     */
    if (typeof module == 'object') {
        module.exports = gaven;
    } else {
        window.gaven = gaven;
    }

})();
