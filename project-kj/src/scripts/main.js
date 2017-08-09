var gaven = gaven || {};
(function() {
    function fun1() {
        return 1;
    }

    function fun2() {
        return 2;
    }

    function fun3(num) {
        if(num<100){
            return true;
        }else{
            return false;
        }
    }

    gaven.karma = {
        fun1:fun1,
        fun2:fun2,
        fun3:fun3
    }
})();
