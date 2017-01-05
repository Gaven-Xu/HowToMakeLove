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
 * [Fun description]
 * @param {[type]} target [description]
 */
function Fun(target) {
    this._target = target;
}

var p = Fun.prototype;

p.hasClass = function(cls) {
    console.log(this._target.className.indexOf(cls));
    if (this._target.className.indexOf(cls) == -1) {
        return false;
    } else {
        return true;
    }
}

p.addClass = function(cls) {
    if (!this.hasClass(cls)) this._target.className += " " + cls;
    return this;
}

p.removeClass = function(cls) {
    if (this.hasClass(cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        this._target.className = this._target.className.replace(reg, ' ');
    }
    return this;
}

p.toggleClass = function(cls) {
    if (!this.hasClass(cls)) {
        this.addClass(cls);
    } else {
        this.removeClass(cls);
    }
    return this;
}
// 2016/11/14 下午1:53:34
if (typeof module == 'object') {
    module.exports = gaven;
} else {
    window.gaven = gaven;
}
