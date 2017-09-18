(function(){

    var stage = new Konva.Stage({
        container:"Banner-Back",
        width:window.innerWidth,
        height:window.innerHeight
    })

    var cols = 32;
    var rows = 18;
    var perWidth = stage.width()/cols;
    var perHeight = stage.height()/rows;

    var layer =  new Konva.Layer();
    layer.addName('LayerPics');
    stage.add(layer);

    var imageObj = new Image();
    imageObj.onload = function(){

        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                
                var imgBack = new Konva.Image({
                    image:imageObj,
                    x:c*perWidth,
                    y:r*perHeight,
                    width:perWidth,
                    height:perHeight,
                    draggable:true,
                    crop:{
                        x:c*perWidth+(imageObj.width-stage.width())/2,
                        y:r*perHeight+(imageObj.height-stage.height())/2,
                        width:perWidth,
                        height:perHeight
                    }
                });
                imgBack.addName('shape_'+r+'_'+c);
        
                layer.add(imgBack);

            }            
        }

        layer.draw();
        console.log(stage)

    }
    
    imageObj.src = '../mosaic/images/wallhaven1.jpg';

})();