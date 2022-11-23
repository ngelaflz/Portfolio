
//server service
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//using a local module that we made
const date = require(__dirname+"/date.js");

//call it with brackets because we want to run it

let items = ["But Food", "Cook Food", "Eat Food"];
let workItems = [];

const app = express();
//connect out EJS to connect templating tool to html page
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
//so tht we can connect the css style as normal
app.use(express.static("public"));

mongoose.connect("mongodb+srv://ngela:test@cluster0.79qme9u.mongodb.net/todolistDB?retryWrites=true&w=majority");

//create blueprint for item object
const itemsSchema = {
  name: String
};

/* make a mongoose model using itemsSchema
  @ first param: singular name of object as String
  # second param: the schema to use to reate the model*/

const Item = mongoose.model( "Item", itemsSchema);

//creates new items
const item1 = new Item({name:"Enter your "});
const item2 = new Item({name:"to do list items "});
const item3 = new Item({name:"here "});

//puts items in array
const defaultItems = [item1, item2, item3];


app.get("/", function(req, res){
  //call the function bound to our model
  //use the brackets here because we;re actually running it
  let day = date.getDate();

  try {
    Item.find({},function(err, foundItems){
      //if the default items havent been added to the list add them
      if ( foundItems.length === 0 ) {
        Item.insertMany(defaultItems, function(err){
          if (err) {console.log(err);}
          else{console.log("Sucessfully saved default items.");}
        });
        res.redirect("/")
      }
      else {
        //pass found items into list.ejs
        res.render('list', { listTitle : day, newListItems: foundItems});
      }
    });
  }
  catch(err){
  console.log(err);
  }
});

//responds to the add button
app.post("/", function(req, res){
  //find the body of the request and get the item
  //based on HTML item name
  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  });

  item.save();
  //after we save we reload the page, so it reflects immediately
  res.redirect("/")

});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, function(err){
    if (err) {
      console.log(err)
    }
    else {
      console.log("Sucessfully removed item");
      // to update webpage
      res.redirect("/");
    }
  })
})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems });
});

app.get("/about",function(req,res){
  res.render("about");
});

//posts new item from the server to the webpage
app.post("/work", function(req, res){
  let item = req.bodyParser.newItem;
  workItems.push(item);
  res.redirect("/work");
})

let port = process.env.PORT;
if (port == null || port ==""){
  port = 3000;
}

app.listen(port, function(){
  console.log("Server started on port 3000");
});
