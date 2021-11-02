
var wishlist;
var checkInCart;
var numItems;
var remButtons;

window.onload = function(){
  var path = window.location.pathname;
  var pagename = path.split("/").pop();

//only dispalay the remove buttons if we're on the prod overview page
  if ( pagename == "bags.html" ) {
    displayRemoveButtons();
  }
  applyNumItems();
}

//adds an item to the cart
function addToCart( index ){
    //gets data from local storage
    wishlist = JSON.parse(localStorage.getItem("wishlistCount"));
    remButtons = JSON.parse(localStorage.getItem("removeButtons"));
    numItems = localStorage.getItem("numItems");


    //update total item counter and individual item counter
    wishlist[index]++;
    numItems++;

    //apply changes to document
    document.getElementById("wishlist-count").innerHTML = numItems;
    if ( wishlist[index] != 0  ) {
      console.log(remButtons[index]);
      document.getElementById(remButtons[index]).style.display="inline-block";
    }

    //update local storage
    localStorage.setItem("wishlistCount", JSON.stringify(wishlist));
    localStorage.setItem("numItems", numItems);
    localStorage.setItem("cartEmpty", "false");
}

//removes an item from the cart
function removeFromCart( index ){
  //get data from local storage
  wishlist = JSON.parse(localStorage.getItem("wishlistCount"));
  remButtons = JSON.parse(localStorage.getItem("removeButtons"));
  numItems = localStorage.getItem("numItems");

  //if we can remove the item
  if ( wishlist[index] > 0 ) {

    //update item counts
    wishlist[index]--;
    numItems--;

    // update local storage
    localStorage.setItem("numItems", numItems);
    localStorage.setItem("wishlistCount", JSON.stringify(wishlist));
    if ( numItems == 0 ) {
      localStorage.setItem("cartEmpty", "true");
    }

    //apply changes to document
    document.getElementById("wishlist-count").innerHTML = numItems;
    if ( wishlist[index] == 0 ) {
      document.getElementById(remButtons[index]).style.display="none";
    }
  }
}

//applys the correct total items number when page loads
function applyNumItems(){
  numItems = localStorage.getItem("numItems");
  document.getElementById("wishlist-count").innerHTML = numItems;
  console.log("num items "+numItems);
}

//displays the necessary remove buttons
function displayRemoveButtons(){
  wishlist = JSON.parse(localStorage.getItem("wishlistCount"));
  remButtons = JSON.parse(localStorage.getItem("removeButtons"));
  console.log(remButtons);
  //console.log(remButtons[0]);
  wishlist.forEach(displayRemoveButtonsEach);
}

function displayRemoveButtonsEach(item, index) {
  console.log(index);
  if ( wishlist[index] != 0 ) {
    document.getElementById(remButtons[index]).style.display="inline-block";
  }
  else {
    document.getElementById(remButtons[index]).style.display="none";
  }
}


//dont think i acutally use this
function checkEmpty(){
  wishlist = JSON.parse(localStorage.getItem("wishlistCount"));
  //everytime we check if the wish list is empty we assume it is
  localStorage.setItem("cartEmpty", "true");
  wishlist.forEach(checkEmptyEach);
}

//dont think i acutally use this
function checkEmptyEach(item, index) {
  if ( item!= 0 ) {
    localStorage.setItem("cartEmpty","false");
  }
}
