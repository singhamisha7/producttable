let String = " ";
function addProduct() {
    let productId = document.getElementById("ProductId").value;
    let productName = document.getElementById("ProductName").value;
    let productPrice = document.getElementById("ProductPrice").value;
    document.getElementById("ProductIdError").innerHTML = " ";
    document.getElementById("ProductNameError").innerHTML = " ";
    document.getElementById("ProductPriceError").innerHTML = " ";

    if(productId == "" || productName == "" || productPrice == ""){
        document.getElementById("ProductIdError").innerHTML = "Fill all the details";

    }else{
        String += "<tr><td>" + productId + 
        "</td><td>" + productName + 
        "</td><td>" + productPrice + 
        "</td></tr>"
        document.getElementById("tbody").innerHTML = String;
    }
console.log(String);
}