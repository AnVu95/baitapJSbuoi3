/**
 * K1:
 * input: Nhập vào 3 cạnh của tam giác (a, b, c)
 * 
 * 
 * K2:
 * TH1: (a == b && b != c) || (a == c && c != b) || (b == c && c != a) => đây là tam giác cân
 * TH2: a == b && b == c => đây là tam giác đều
 * TH3: a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b => đây là tam giác vuông
 * TH4: Là loại tam giác nào đó
 * 
 * K3:
 * Output:
 * Tam giác cân
 * Tam giác vuông
 * Tam giác đều
 * Tam giác nào đó
 */

function tamGiac() {
    var a = document.getElementById("inpCanh1").value;
    var b = document.getElementById("inpCanh2").value;
    var c = document.getElementById("inpCanh3").value;
    if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
        document.getElementById("txtTamGiac").innerHTML = "Đây là tam giác cân";
    }else if (a == b && b == c) {
        document.getElementById("txtTamGiac").innerHTML = "Đây là tam giác đều";
    }else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
        document.getElementById("txtTamGiac").innerHTML = "Đây là tam giác vuông";
    }else {
        document.getElementById("txtTamGiac").innerHTML = "Đây là tam giác nào đó";
    }
}