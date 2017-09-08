(function(){

    var stage = new Konva.Stage({
        container:"Banner-Back",
        width:800,
        height:600
    })

    var layerPics =  new Konva.Layer();
    layerPics.addName('LayerPics');
    stage.add(layerPics);

    var imageObj = new Image();
    imageObj.onload = function(){
        var imgBack = new Konva.Image({
            x:0,
            y:0,
            width:stage.width(),
            height:stage.width()*9/16,
            image:imageObj
        });

        layerPics.add(imgBack);
        layerPics.draw();
    }
    console.log(stage);
    imageObj.src = '../mosaic/images/wallhaven1.jpg';

})();