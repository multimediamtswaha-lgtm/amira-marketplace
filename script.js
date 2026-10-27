//alert("helooww")

const qtyplus = document.querySelector(".qty-plus")
const qtyvalue = document.querySelector(".qty-value")
const qtymin = document.querySelector(".qty-min")
const btnBuy =document.querySelector(".button-beli")
const cartvalue=document.querySelector("#cart")

const btnBuys = document.querySelectorAll (".button-beli");
const qtyValues = document.querySelectorAll(".qty-value");
const qtyPlueses = document.querySelectorAll(".qty-plus");
const qtyMinuses = document.querySelectorAll(".qty-min")

qtyPlueses.forEach((btn,i) => {
    btn.addEventListener("click", function () {
        let jumlahbarang = parseInt(qtyValues[i].value);
        jumlahbarang = jumlahbarang + 1;

        qtyValues[i].value = jumlahbarang;
    });
});
 qtyMinuses.forEach((btn,i) => {
btn.addEventListener("click", function () {
    let jumlahbarang = parseInt(qtyValues[i].value);
    jumlahbarang = jumlahbarang - 1;

    qtyValues[i].value=jumlahbarang;
});
 });
btnBuys.forEach((btn,i) => {
btn.addEventListener("click", function () {
    let jumlahbeli = parseInt(cartvalue.textContent)
    jumlahbeli = jumlahbeli + parseInt(qtyValues[i].value);

    cartvalue.textContent= jumlahbeli;

});
});


