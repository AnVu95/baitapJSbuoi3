/**
 * K1 :
 * Input : nhập 3 số nguyên  và đếm số lẽ và số chẵn
 * 
 * K2 :
 * TH1 :
 * num1 % 2 == 0 -> chẵn và ngược lại
 * num2 % 2 == 0 -> chẵn và ngược lại
 * num3 % 2 == 0 -> chẵn và ngược lại
 * 
 * K3:
 * output 
 * Đến số chẵn và số lẻ
 */

function chanLe(){
    var num1 = parseInt(document.getElementById("inpNum1").value);
    var num2 = parseInt(document.getElementById("inpNum2").value);
    var num3 = parseInt(document.getElementById("inpNum3").value);
    var chan = 0;
    var le = 0;

    if (num1 % 2 == 0) {
        chan++;
    }else {
        le++;
    }
    if (num2 % 2 == 0) {
        chan++;
    }else {
        le++
    }
    if (num3 % 2 == 0) {
        chan++;
    }else {
        le++;
    }
    document.getElementById("txtKq").innerHTML = "Có " + chan + " số chẵn" + " và " + le +" số lẻ"
}