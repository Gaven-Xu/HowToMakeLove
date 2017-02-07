(function() {

    var canvas = document.getElementById('Can');
    var ctx = canvas.getContext('2d');

    function calcCurrentPointor(e, canvas) {
        return {
            x: e.clientX - canvas.offsetLeft,
            y: e.clientY - canvas.offsetTop
        }
    }

    function draw(e) {
        var mouse = calcCurrentPointor(e, canvas);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', function(e) {
        var mouse = calcCurrentPointor(e, canvas);
        ctx.moveTo(mouse.x, mouse.y);
        document.addEventListener('mousemove', draw)
    })

    document.addEventListener('mouseup', function(e) {
        document.removeEventListener('mousemove', draw);
    })



})();
