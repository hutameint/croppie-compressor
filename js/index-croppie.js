/* Croppie Code */
var $uploadCroppedPhoto; 
var croppie_clone = $("#main-cropper").clone();
var original_input; 

/* File selected triggers second modal */
$('#croppie_input').change(function(){
  readFile(this);
});

var croppie_inner_width = 250; 
var croppie_inner_height = 250; 

var croppie_width = 400; 
var croppie_height = 400; 


$( "#cambiar-a-cuadrada" ).click(function() {
  
  croppie_inner_width = 250; 
  croppie_inner_height = 250; 
  
  $("#main-cropper").replaceWith(croppie_clone.clone());

  $uploadCroppedPhoto = $('#main-cropper').croppie({    
    viewport: { width: croppie_inner_width, height: croppie_inner_height },
    //Si se quita el boundary, toma por defecto el tamaño del container
    boundary: { width: croppie_width, height: croppie_height },
    //enableResize: true, 
    showZoomer: false
});
  //Volvemos a cargar la imagen. 
  reloadImage(); 
  
});

$( "#cambiar-a-vertical" ).click(function() {  
  croppie_inner_width = 250; 
  croppie_inner_height = 375;   

  $("#main-cropper").replaceWith(croppie_clone.clone());

  $uploadCroppedPhoto = $('#main-cropper').croppie({
    viewport: { width: croppie_inner_width, height: croppie_inner_height },
    //Si se quita el boundary, toma por defecto el tamaño del container
    boundary: { width: croppie_width, height: croppie_height },
    //enableResize: true, 
    showZoomer: false
});
  reloadImage(); 
  
});

$( "#cambiar-a-horizontal" ).click(function() {  
  croppie_inner_width = 375; 
  croppie_inner_height = 250;   

  $("#main-cropper").replaceWith(croppie_clone.clone());

  $uploadCroppedPhoto = $('#main-cropper').croppie({
    viewport: { width: croppie_inner_width, height: croppie_inner_height },
    //Si se quita el boundary, toma por defecto el tamaño del container
    boundary: { width: croppie_width, height: croppie_height },
    //enableResize: true, 
    showZoomer: false
});

  reloadImage(); 
  
});



/* Send selected file to Croppie */
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#main-cropper').croppie('bind', {
        url: e.target.result
      });
    }
    original_input = input.files[0]; 
    reader.readAsDataURL(input.files[0]);
  }
}
//Vuelve a cargar la imagen en cropie cuando se selecciona otro tamaño. 
function reloadImage()
{
  var reader = new FileReader();
    reader.onload = function (e) {
      $('#main-cropper').croppie('bind', {
        url: e.target.result
      });
    }  
    if(original_input!=null)
    {
      reader.readAsDataURL(original_input);
    }
}

 
/* Send crop to preview modal */
$('#actionCrop').on('click', function (ev) {

			$uploadCroppedPhoto.croppie('result', {
        format: 'png',         
				type: 'blob',
				size: 'original'        
			}).then(function (resp) {
        //this.picture = $("#finalizeModal img");          
        //Metemos la imagen en el compresor. 
        compress_width = croppie_inner_width * 2; 
        compress_height = croppie_inner_height * 2; 
        file = resp; 
        fileReader.readAsDataURL(resp);        
			});
      
		});

    fileReader.onloadend = function () {

        imageRead = fileReader.result;        
        compressImage(); 
        

    };

    
