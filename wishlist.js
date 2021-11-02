
  var cartEmpty;
  var itemsCount;
  var numItems;

window.onload = function() {

//gets data from local storage
  cartEmpty = localStorage.getItem("cartEmpty");
  numItems = localStorage.getItem("numItems");
  itemsCount = JSON.parse(localStorage.getItem("wishlistCount"));


//updates the document
  document.getElementById("wishlist-count").innerHTML = numItems;
    if ( cartEmpty == "true" ) {
      document.getElementById("empty-wl").style.display="block";
    }
    else {
      document.getElementById("empty-wl").style.display="none";
      populateList();
    }
  }

function populateList() {
  itemsCount = JSON.parse(localStorage.getItem("wishlistCount"));
  console.log(itemsCount[0]);
  if ( itemsCount[0] != 0 ) {
    document.getElementById("bg1-wl-item").innerHTML="Pumpkin Purse"+" x"+itemsCount[0];
  }
  else {
    document.getElementById("bg1-wl-item").innerHTML="";
  }
  if ( itemsCount[1] != 0 ) {
    document.getElementById("bg2-wl-item").innerHTML="Beary Backpack"+" x"+itemsCount[1];
  }
  else {
    document.getElementById("bg2-wl-item").innerHTML="";
  }
  if ( itemsCount[2] != 0 ) {
    document.getElementById("bg3-wl-item").innerHTML="Butterly Backpack"+" x"+itemsCount[2];
  }
  else {
    document.getElementById("bg3-wl-item").innerHTML="";
  }
  if ( itemsCount[3] != 0 ) {
    document.getElementById("bg4-wl-item").innerHTML="Moon Handbag"+" x"+itemsCount[3];
  }
  else {
    document.getElementById("bg4-wl-item").innerHTML="";
  }
  if ( itemsCount[4] != 0 ) {
    document.getElementById("bg5-wl-item").innerHTML="BTS Backpack"+" x"+itemsCount[4];
  }
  else {
    document.getElementById("bg5-wl-item").innerHTML="";
  }
  if ( itemsCount[5] != 0 ) {
    document.getElementById("bg6-wl-item").innerHTML="Checkered Mini Bag"+" x"+itemsCount[5];
  }
  else {
    document.getElementById("bg6-wl-item").innerHTML="";
  }

}

//checks if the wishist is empty
function checkEmpty(item, index) {
  if ( item!= 0 ) {
    cartEmpty="false";
  }
}



// window.addEventListener('load',function(){
//   window.atc1.addEventListener("click",addBag(1));});






//
// console.log(localStorage.getItem('bag1'));
//
// localStorage.setItem('bag1','spooky bag');
//
//
// localStorage.setItem("bag2","bear bag");
// localStorage.setItem("bag3","Butterly bag");
//
// var counter=3;function augment() {
//   counter=(counter+1)%10;
//   window.bar.value=counter;
// }
//
// function swap(id) {document.getElementById(id).src="https://picsum.photos/200/300/?image="+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);}
