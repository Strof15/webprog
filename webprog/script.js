function order() {
    var name = document.getElementById("megrendeloneve").value;
    var address = document.getElementById("cim").value;
    var tel = document.getElementById("telefonsz").value;
    document.getElementById("megrendeloneve").innerHTML = "Név: "+ name;
    document.getElementById("cim").innerHTML = "Cím: "+ address; 
    document.getElementById("telefonsz").innerHTML = "Telefon: "+ tel;
}
function orderFocus(y) {
    y.style.background = "#D0D0D0";
    y.style.background = "#D0D0D0";
    y.style.background = "#D0D0D0";
}
function orderBlur(x) {
    x.style.background = "#fff";
    x.style.background = "#fff";
    x.style.background = "#fff";
}