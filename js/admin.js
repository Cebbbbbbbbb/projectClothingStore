function irTienda(){
    window.open('../index.html','_blank');
}
function verProductos(){
    window.open('../productos/rosas.html', '_blank');
}

//Ver imagen predeterminada

const viewImg=document.getElementById('validater1');

const mus=document.getElementById("mostrar");

viewImg.addEventListener('change', function (){
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function() {
    mus.src = reader.result;
    });

    reader.readAsDataURL(file);
})
