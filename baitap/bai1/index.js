function sapxep(){
    var a=document.getElementById("songuyen1").value
    var b=document.getElementById("songuyen2").value
    var c=document.getElementById("songuyen3").value
    var ketQua=document.getElementById("ketqua");
    var temp = 0;

    if (a > b)
    {
        temp = a;
        a = b;
        b = temp;
    }console.log(temp);

    if (a > c)
    {
        temp = a;
        a = c;
        c = temp;
    }console.log(temp);

    if ( b > c)
    {
        temp = b;
        b = c;
        c = temp;
    }console.log(temp);

    ketQua.innerText="Sắp xếp:"+""+a+b+c

    // if (a<b && b<c){
    //     ketQua.innerText="Sắp xếp:"+""+a+b+c
    // }
    // else if (a<c && c<b){
    //     ketQua.innerText="Sắp xếp:"+""+a+c+b
    // } 
    // else if (b<a && b<c && a<c){
    //     ketQua.innerText="Sắp xếp:"+""+b+a+c
    // } 
    // else if (b<a && b<c && c<a){
    //     ketQua.innerText="Sắp xếp:"+""+b+c+a
    // } 
    // else if (c<a && a<b){
    //     ketQua.innerText="Sắp xếp:"+""+c+a+b
    // } 
    // else if (c<a && b<a){
    //     ketQua.innerText="Sắp xếp:"+""+c+b+a
    // } 

    
        
}
          