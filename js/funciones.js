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