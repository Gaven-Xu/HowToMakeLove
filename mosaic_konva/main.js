(function(){

    var stage = new Konva.Stage({
        container:"Banner-Back",
        width:800,
        height:600
    })

    var layer =  new Konva.Layer();
    layer.addName('LayerPics');
    stage.add(layer);

    var imageObj = new Image();
    imageObj.onload = function(){
        var imgBack = new Konva.Image({
            x:0,
            y:0,
            width:stage.width(),
            height:stage.width()*9/16,
            image:imageObj
        });
        layer.add(imgBack);
        layer.draw();
    }
    imageObj.src = '../mosaic/images/wallhaven1.jpg';

})();