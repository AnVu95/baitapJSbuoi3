/**
 * K1 : Chào hỏi các thành viên trong gia đình
 * Bố,Mẹ,Anh Trai, Em Gái
 * 
 * K2 :
 * Chọn trường hợp rồi Click button 
 * Bố 
 * Mẹ 
 * Anh Trai 
 * Em gái 
 * 
 * K3 :
 * Bố -> Xin Chào Bố
 * Mẹ -> Xin Chào Mẹ
 * Anh Trai -> Xin Chào Anh Trai
 * Em gái -> Xin Chào Em gái
 */





function chaoHoi(){
    var family = document.getElementById("inpGiaDinh").value;

    switch (family){
        case "b":
            document.getElementById("txtXuat").innerHTML = "Xin chào Bố!";
            break;
        case "m":
            document.getElementById("txtXuat").innerHTML = "Xin chào Mẹ!";
            break;
        case "at":
            document.getElementById("txtXuat").innerHTML = "Xin chào Anh trai!";
            break;
        case "eg":
            document.getElementById("txtXuat").innerHTML = "Xin chào Em gái!";
            break;
        default:
    }
}