//variables sí
var vals = [];
var $nivel1 = $("#nivel1");
var $nivel2 = $("#nivel2");

function generateDescription(info) {
    $(".HIST_INSTUTUC").text(info.HIST_INSTUTUC);
};

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

//cambio en primer dropdown
$("#nivel1").change(function () {
    var $dropdown = $(this);
    var key = $dropdown.val();

    function generateDropdown(vals) {
        $nivel2.append("<option selected disabled value=\"\">Selecciona un subfondo</option>");
        $.each(vals, function (index, value) {
            $nivel2.append("<option value=\"" + value.yo + "\">" + value.TITULO + "</option>");
        });
    };

    switch (key) {
        case 'H_MX09017AGNCL01FO001AYSE001AP':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {
                $nivel2.empty();

                vals = data.H_MX09017AGNCL01FO001AYSE001AP.hijos;
                generateDropdown(vals)

                $("#dropdowns").removeClass("col-sm-6");
                $("#dropdowns").addClass("col-sm-12");

                $("#nivel2").removeClass("d-none");
                $("#nivel2").addClass("d-show");

                $("#fondo-descripcion").removeClass("d-none");
                $("#fondo-descripcion").addClass("d-show");

                $("#objetos").removeClass("d-show");
                $("#objetos").addClass("d-none");

                info = data.H_MX09017AGNCL01FO001AYSE001AP;
                $(".cedula1titulo").text(info.TITULO);
                generateDescription(info);
            });
            break
        case 'H_MX09017AGNCL01FO008RHSE002AL':
            $.getJSON("recursos/json/MX09017AGNCL01FO008RHSE002ALSS03ALI22262.json", function (data) {
                $nivel2.empty();

                vals = data.H_MX09017AGNCL01FO008RHSE002AL.hijos;
                generateDropdown(vals)

                $("#dropdowns").removeClass("col-sm-6");
                $("#dropdowns").addClass("col-sm-12");

                $("#nivel2").removeClass("d-none");
                $("#nivel2").addClass("d-show");

                $("#fondo-descripcion").removeClass("d-none");
                $("#fondo-descripcion").addClass("d-show");

                $("#objetos").removeClass("d-show");
                $("#objetos").addClass("d-none");

                info = data.H_MX09017AGNCL01FO008RHSE002AL;
                $(".cedula1titulo").text(info.TITULO);
                generateDescription(info);
            });
            break
        case '':
            $nivel2.empty();
            vals = ['Favor de seleccionar un fondo'];
            $nivel2.append("<option>" + vals + "</option>");

            $("#dropdowns").removeClass("col-sm-12");
            $("#dropdowns").addClass("col-sm-6");

            $("#nivel2").removeClass("d-show");
            $("#nivel2").addClass("d-none");

            $("#fondo-descripcion").removeClass("d-show");
            $("#fondo-descripcion").addClass("d-none");

            $("#objetos").removeClass("d-show");
            $("#objetos").addClass("d-none");

            $('#nivel2').html('<option value="">Favor de seleccionar un fondo</option>');
            
            break
    }
});

//cambio en segundo dropdown
$("#nivel2").change(function () {
    var $dropdown = $(this);
    var key = $dropdown.val();

    //iteración??
    // let subfondos = [];

    // subfondos.forEach(function (subfondo, index) {
    //     console.log(`El fondo ${index+1} es ${subfondo}`);
    // });

    //iteración 2
    // info = data.H_MX09017AGNCL01FO008RHSE002AL.hijos.H_MX09017AGNCL01FO008RHSE002ALSS01ALV;

    // let subfondos = [];

    // subfondos.push(info.TITULO);

    // subfondos.forEach(function (subfondo, index) {
    //     console.log(`El fondo ${index + 1} es ${subfondo}`);
    // });

    switch (key) {
        case 'H-MX09017AGNCL01FO008RHSE002ALSS01ALV':
            $.getJSON("recursos/json/MX09017AGNCL01FO008RHSE002ALSS03ALI22262.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO008RHSE002AL.hijos.H_MX09017AGNCL01FO008RHSE002ALSS01ALV;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI001':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI001;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI002':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI002;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI003':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI003;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI004':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI004;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI005':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI005;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI006':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI006;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI007':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI007;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case 'H-MX09017AGNCL01FO001AYSE001APUI008':
            $.getJSON("recursos/json/MX09017AGNCL01FO001AYSE001AP8.json", function (data) {

                $("#objetos").removeClass("d-none");
                $("#objetos").addClass("d-show");

                // info = data.H_MX09017AGNCL01FO001AYSE001AP.hijos.H_MX09017AGNCL01FO001AYSE001APUI008;
                // $(".cedula1titulo").text(info.TITULO);
                // generateTable(info);
            });
            break
        case '':
            break
    }
});