var canh1 = document.getElementById("canh1")
var canh2 = document.getElementById("canh2")
var canh3 = document.getElementById("canh3")
var ketQuaEl = document.getElementById("ketqua")

function tinhtoan() {
    var a = canh1.value *1
    var b = canh2.value *1
    var c = canh3.value *1
    if (a == b && a == c) {
        alert("Tam Giac Đều")
    }
    else if (a == b || a == c || b == c) {
        alert("Tam Giác Cân")
    }
    else if ((a * a) == (b * b) + (c * c)){
        alert("Tam Giác Vuông")
    }
    else if ((b * b) == (a * a) + (c * c)){
        alert("Tam Giác Vuông")
    }
    else if ((c * c) == (b * b) + (a * a)){
        alert("Tam Giác Vuông")
    }
}
