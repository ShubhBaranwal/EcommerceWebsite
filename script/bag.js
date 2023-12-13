let bagItemObject;
onLoad()


function onLoad(){
    loadBagItemObjects()
    displayBagItems();
    displayBagSummery()
}

function displayBagSummery(){
    let displayBagSummeryElement=document.querySelector('.bag-summary');

    let totalItems=bagItemObject.length;
let totalMrp=0;
let totalDiscount=0;
let finalPayment=0;


bagItemObject.forEach((item)=>{
    totalMrp=item.Price;
    totalDiscount= item.MRP - item.Price;
})
finalPayment= totalMrp-totalDiscount + 99;




    displayBagSummeryElement.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs ${totalMrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
    `
}

function loadBagItemObjects(){
    bagItemObject= bagItems.map(itemId =>{
        for(let i = 0; i < items.length; i++){
            if(itemId == items[i].id){
                return items[i]
            }
        }
    })
    console.log(bagItemObject);
}





function displayBagItems(){
    let containerElement=document.querySelector(".bag-items-container");

    let innerHTML=" ";
    bagItemObject.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem)
    });
    containerElement.innerHTML =innerHTML;
}


function removeFromBag(itemId){
   bagItems= bagItems.filter(bagitemId => bagitemId != itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   loadBagItemObjects()
   displayBagIcon()
   displayBagItems()
   displayBagSummery()
}


function generateItemHTML(item){
return `
<div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src="${item.Img}">
        </div>
        <div class="item-right-part">
          <div class="company">${item.Type}</div>
          <div class="item-name">${item.Name}</div>
          <div class="price-container">
            <span class="current-price">Rs ${item.Price}</span>
            <span class="original-price">Rs ${item.MRP}</span>
            <span class="discount-percentage">(0% OFF)</span>
          </div>
          <div class="return-period">
            <span class="return-period-days">14 days</span> return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">10 Oct 2023</span>
          </div>
        </div>

        <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
      </div>

`
}