(function() {
    var line = [];
    line[0] = new Gaven.SoftLine('canvas', [45,194,78,75],'',[45,194,78,75]);
    line[1] = new Gaven.SoftLine('canvas', [78,75,107,178],'',[78,75,107,178]);
    line[2] = new Gaven.SoftLine('canvas', [107,178,133,74],'',[107,178,133,74]);
    /**
     * [per3cp description]
     * @param  {[Object]} arrPointor [description]
     * @param  {[Array]} arrSEPoint [description]
     * @return {[type]}            [description]
     */
    function per3cp(arrPointor,arrSEPoint) {
        return [
            (arrPointor.cX - arrSEPoint[0])*0.3+arrSEPoint[0],
            (arrPointor.cY - arrSEPoint[1])*0.3+arrSEPoint[1],
            (arrPointor.cX - arrSEPoint[2])*0.3+arrSEPoint[2],
            (arrPointor.cY - arrSEPoint[3])*0.3+arrSEPoint[3]
        ]
    }

    for (var i = 0; i < line.length; i++) {
        (function(i) {
            line[i].setAnimation('mousemove', function(e) {
                var cur = line[i].getCursor(e);
                var arr1 = per3cp(cur,line[i]._points);
                if(i==0){
                    line[i].clear();
                }
                // 第一条线的mousemove clear
                line[i].setCP(arr1);
            })
        })(i)
    }

})();
