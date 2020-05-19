function ValidaFormulario() {
    

    var valorNombre = document.getElementById("txtnombre").value;
    var valorpass = document.getElementById("txtpass").value;

    // valida nombre
  if (valorNombre == null ||valorNombre.length == 0 ||/^\s+$/.test(valorNombre)) {
    alert("Debes escribir tu correo o telefono");
    document.getElementById("txtnombre").focus();
    return false;
  }
// valida password
  if (valorpass == null ||valorpass.length == 0 ||/^\s+$/.test(valorpass)) {
    alert("Debes escribir tu contraseña");
    document.getElementById("txtpass").focus();
    return false;
  }

  return true;
}


function ValidaFormulario2() {
  // alert ("funciono");

  var valorNombre2 = document.getElementById("txtnombre2").value;

  var valorapeido2 = document.getElementById("txtapeido2").value;

  var valoremail2 = document.getElementById("txtemail2").value;
  
  var valorpass2 = document.getElementById("txtpass2").value;

  
  
  
  var dia = document.getElementById("combo_dia2").selectedIndex;
  
  var semana = document.getElementById("combo_semana2").selectedIndex;
  
  var ano = document.getElementById("combo_ano2").selectedIndex;
  
  var radios = document.getElementsByName("marca2");



  
  if (valorNombre2 == null ||valorNombre2.length == 0 ||/^\s+$/.test(valorNombre2)) {
    alert("Debes escribir tu Nombre");
    document.getElementById("txtnombre2").focus();
    return false;
  }
  if (valorapeido2 == null ||valorapeido2.length == 0 ||/^\s+$/.test(valorapeido2)) {
    alert("Debes escribir tu apeido");
    document.getElementById("txtapeido2").focus();
    return false;
  } 

  if (valoremail2 == null ||valoremail2.length == 0 ||/^\s+$/.test(valoremail2)) {
    alert("Debes escribir tu correo o telefono");
    document.getElementById("txtemail2").focus();
    return false;
  }

// valida password
  if (valorpass2 == null ||valorpass2.length == 0 ||/^\s+$/.test(valorpass2)) {
    alert("Debes escribir tu contraseña");
    document.getElementById("txtpass2").focus();
    return false;
  }


 

  if (dia == null || dia == 00) {
    alert("Debes elegir un dia");
    document.getElementById("combo_dia2").focus();
    return false;
  }

  if (semana == null || semana == 00) {
    alert("Debes elegir un mes");
    document.getElementById("combo_semana2").focus();
    return false;
  }

  if (ano == null || ano == 00) {
    alert("Debes elegir una año");
    document.getElementById("combo_ano2").focus();
    return false;
  }

  var seleccionado = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if (!seleccionado) {
    alert("Debes elegir un sexo");
    document.getElementById("marca1").focus();
    return false;
  }
  


  return true;
}
