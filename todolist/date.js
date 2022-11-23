//jshint esversion:6

//allow thes functions to be accessed from other files
//don't add brackets because we don't want to run it yet
exports.getDate = function(){
  const today = new Date();

  //selecting format for date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  //apply the format to the date and return it
  return today.toLocaleDateString("en-US", options);
}
exports.getDay = function(){
  const today = new Date();

  //selecting format for date
  const options = {
    weekday: "long"
  };

  //format the date
  return today.toLocaleDateString("en-US", options);
}
