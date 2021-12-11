/**
 * K1: Nhập vào 3 số nguyên :
 * input :
 * num1
 * num2
 * num3
 * 
 * K2:
 * Click button
 * TH1 :
 * (num1 < number2) && (number1 < number3)
 * 
 * TH2
 * (number2 < number1) && (number2 < number3)
 * 
 * TH3 
 * (number3 < number1) && (number3 < number2)
 * 
 * K3
 * 
 * output
 * sắp xếp 3 số theo thứ tự tăng dần
 */



function sapXep() {
    var num1 = parseInt(document.getElementById("inpSo1").value);
    var num2 = parseInt(document.getElementById("inpSo2").value);
    var num3 = parseInt(document.getElementById("inpSo3").value);
    

    if (num1 > num2) {
        if (num2 > num3) {
            document.getElementById("txtThuTu").innerHTML = num3 + "<" + num2 + "<" + num1;
        } else if (num1 > num3) {
            document.getElementById("txtThuTu").innerHTML = num2 + "<" + num3 + "<" + num1;
        } else {
            document.getElementById("txtThuTu").innerHTML = num2 + "<" + num1 + "<" + num3;
        }
    }else if (num2 > num3) {
        if (num1 > num3) {
            document.getElementById("txtThuTu").innerHTML = num3 + "<" + num1 + "<" + num2;
        } else {
            document.getElementById("txtThuTu").innerHTML = num1 + "<" + num3 + "<" + num2;
        }
    } else {
        document.getElementById("txtThuTu").innerHTML = num1 + "<" + num2 + "<" + num3;
    }

}