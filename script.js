console.log("hello world!")

var btnCascading = document.getElementById("btn-cascading")

var template = `This asset is supposed to be returned to IT and if another or different system is needed, then a request needs to be submitted in InfinIT.

Please understand that cascading an IT owned asset is against policy and this system account will be disabled at once per that policy:

SAFE@Dell  
https://inside.dell.com/docs/DOC-275825  1.1.1 Devices Policy: 11 (page 2)

If you have any question, please let me know.`

btnCascading.addEventListener('click', function(){navigator.clipboard.writeText(template).then(function(){alert("The template is copied in your clipboard.");}, function(err){alert("No se pudo copiar el texto: ", err)})

})
