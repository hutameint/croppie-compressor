

    var compressor = new ImageCompressor,                        
        thresholdVal = 'initial',
        width = croppie_inner_width * 2 ,
        height = croppie_inner_height * 2, 
        filter,
        postEffect; 






    /*
    widthEl.addEventListener('input', function (e) {
        width = parseInt(e.target.value);
    }, false);

    heightEl.addEventListener('input', function (e) {
        height = parseInt(e.target.value);
    }, false);*/


    function compressImage()
    {
        var settings;        
        width = compress_width; 
        height = compress_height; 


            settings = {
                toWidth : width,
                toHeight : height,
                mimeType : 'image/jpeg',
                mode: 'stretch', 
                quality : .8,
                speed : 'high',
                //grayScale : filter == 'grayscale',
                grayScale : false,
                //sepia: filter == 'sepia',
                sepia: false,
                vReverse : false,
                hReverse : false
                //vReverse : postEffect == 'vReverse' || postEffect == 'both',
                //hReverse : postEffect == 'hReverse' || postEffect == 'both'
            };

            if(parseInt(filter)){
                settings.threshold = parseInt(filter)
            }

            //Se le pasa ImageRead que se inicializa cuando se corta la imagen. 
            compressor.run(imageRead, settings, resultProcessor);

            return;
    }

    function resultProcessor (src) {
        //En SRC viene la imagen comprimida. 
        document.getElementById('result').src = src;
    }
    

    function fireClick(node){

        if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent('click', true, true);
            node.dispatchEvent(evt);
        } else if (document.createEventObject) {
            node.fireEvent('onclick') ;
        } else if (typeof node.onclick == 'function') {
            node.onclick();
        }

    }
