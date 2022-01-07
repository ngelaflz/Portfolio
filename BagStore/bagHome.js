

var itemsCount = [0, 0, 0, 0, 0, 0]; //keeps track of the number of each item in cart
var removeButtons = ["rfc1", "rfc2", "rfc3", "rfc4", "rfc5", "rfc6"];
var cartEmpty = "true";
var numItems = 0;

localStorage.setItem("wishlistCount", JSON.stringify(itemsCount));
localStorage.setItem("removeButtons", JSON.stringify(removeButtons));
localStorage.setItem("cartEmpty", cartEmpty);
localStorage.setItem("numItems", numItems);


window.onload = function(){
  numItems = localStorage.getItem("numItems");
  document.getElementById("wishlist-count").innerHTML = numItems;
}
