// variables sí
let $nivel1 = $("#nivel1");

// llena dropdown con fondos de agn
function generateDropdown() {
    $.getJSON("/work/models/memorica/recursos/nuevoagn.json", function(data) {
        $nivel1.append("<option disabled selected value=\"\">Selecciona un fondo</option>");
        $.each(data, function (index, value) {
            $nivel1.append("<option value=\"" + value.yo + "\">" + value.TITULO + "</option>");
        });
    });
};
generateDropdown();

// esto en teoría va a llenar la tabla con los objetos.
function generateTable(info) {
    // console.log(info);
    var table = document.getElementById("gable");
    info = JSON.parse(info);
    var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + info.data._id + "</td>" + 
            "<td>" + info.data.name + "</td>" + 
            "<td>" + info.data.alternate_name + "</td>" + 
            "<td>" + info.data.description + "</td>";
        table.appendChild(tr);
    });
};

// esto escribe la descripción del fondo
function generateDescription(fondo) {
    $(".HIST_INSTUTUC").text(fondo.HIST_INSTUTUC);
};

//cambio en dropdown
$("#nivel1").change(function () {
    var key = $(this).val();

    // añade el valor de select al url
    var pageUrl = "?param=" + key;
    window.history.pushState("", "", pageUrl);
    
    // switch de casos de dropdown
    switch (key) {
        case key:
            $.getJSON("/work/models/memorica/recursos/nuevoagn.json", function (data) {
                // selecciona objeto dentro de arreglo
                var fondo = data.find(function (v) {
                    return v.yo === key;
                });

                // obtiene objetos del agn y los imprime
                acervos.getData(key, true, function (data) {
                    generateTable(data)
                    // console.log(data)
                }, function err(e) {
                    console.log(e)
                });

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