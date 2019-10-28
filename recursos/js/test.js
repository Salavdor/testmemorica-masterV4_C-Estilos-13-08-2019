// variables sí
let $nivel1 = $("#nivel1");

// llena dropdown con fondos de agn
function generateDropdown() {
    $.getJSON("recursos/nuevoagn.json", function(data) {
        $nivel1.append("<option disabled selected value=\"\">Selecciona un fondo</option>");
        $.each(data, function (index, value) {
            $nivel1.append("<option value=\"" + value.yo + "\">" + value.TITULO + "</option>");
        });
    });
};
generateDropdown();

// esto en teoría va a llenar la tabla con los objetos. WIP.
function generateTable(info) {
    $(".COD_REF").text(info.COD_REF);
    $(".TITULO").text(info.TITULO); // es este?
    $(".NOMBRE_PRODUCTOR").text(info.NOMBRE_PRODUCTOR);
    $(".NIVEL_DESC").text(info.NIVEL_DESC);
    $(".padre").text(info.padre);
    $(".FECHA_EXT_INI").text(info.FECHA_EXT_INI);
    $(".HIST_INSTUTUC").text(info.HIST_INSTUTUC);
    $(".LOCALIZ_ORIG").text(info.LOCALIZ_ORIG);
    $(".VOL_UNID").text(info.VOL_UNID);
    $(".FECHA_EXT_FIN").text(info.FECHA_EXT_FIN); //no, es este
    $(".NOTAS").text(info.NOTAS);
    $(".REGLAS_NORMAS").text(info.REGLAS_NORMAS);
    $(".NOTA_ARCHIVERO").text(info.NOTA_ARCHIVERO);
};

// esto escribe la descripción del fondo
function generateDescription(fondo) {
    $(".HIST_INSTUTUC").text(fondo.HIST_INSTUTUC);
};

//cambio en dropdown
$("#nivel1").change(function () {
    var key = $(this).val();

    // añade el valor de select al url
    // window.location.hash = "?param=" + key;
    window.location.hash = key;
    
    // switch de casos de dropdown
    switch (key) {
        case key:
            $.getJSON("recursos/nuevoagn.json", function (data) {
                // selecciona objeto dentro de arreglo
                var fondo = data.find(function (v) {
                    return v.yo === key;
                });
                console.log(fondo);

                // genera descripción de acervo
                generateDescription(fondo);

                $("#fondo-descripcion").removeClass("d-none");
                $("#fondo-descripcion").addClass("d-show");
                
                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");
            });
            break
    }
});