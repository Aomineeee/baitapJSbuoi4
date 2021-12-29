

function sapxep() {
    var a = document.getElementById("songuyen1").value
    var b = document.getElementById("songuyen2").value
    var c = document.getElementById("songuyen3").value
    var countChan = 0
    var countLe = 0
    var ketQua=document.getElementById("ketqua")
    if (a % 2 == 0)
        countChan += 1
    else
        countLe += 1
    if (b % 2 == 0)
        countChan += 1
    else
        countLe += 1
    if (c % 2 == 0)
        countChan += 1
    else
        countLe += 1
    ketQua.innerText="Số chẵn:"+countChan+" "+"Số lẻ:"+countLe
}