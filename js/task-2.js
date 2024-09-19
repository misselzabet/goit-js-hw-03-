
function getShippingMessage(country, price, deliveryFee) { 
    const totalPriceShipping = price + deliveryFee;
return `Shipping to ${country} will cost ${totalPriceShipping} credits`;

}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

