function random(){
    return Math.random().toString(36).substring(7);
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
var dumData = [];
for(var i = 0; i < 5; i++)
{
    dumData.push({
        restaurant_name: 'dummy data '+ random(),
        restaurant_type: 'dummy data '+ random(),
        date_comming: randomDate(new Date(2012, 0, 1), new Date()),
        restaurant_average_price: getRandomInt(100000),
        restaurant_service_rating: getRandomInt(6),
        restaurant_cleanliness_rating: getRandomInt(6),
        restaurant_food_rating: getRandomInt(6),
        review_note: 'dummy data '+ random()
    })
}

var database;
var req = window.indexedDB.open("DB-RubySmile", 2);
req.onupgradeneeded = function(event) {
    var objectStore = event.target.result.createObjectStore("DBRubySmile", { keyPath: "id", autoIncrement: true });
    console.log(dumData);
    dumData.forEach((row)=>{
        objectStore.add(row);
    })
}

req.onsuccess = function(event) {
    database = req.result;
    getAllData();
}

function getAllData() {
    return database.transaction(["DBRubySmile"], "readonly").objectStore("DBRubySmile").getAll();
}
function deleteFeedback(feedbackID) {
    return database.transaction(["DBRubySmile"], "readwrite").objectStore("DBRubySmile").delete(Number(feedbackID))
}

function createFeedback(feedback) {
    return database.transaction(["DBRubySmile"], "readwrite").objectStore("DBRubySmile").add(feedback)
}

function getDetailFeedback(feedbackID) {
    return database.transaction(["DBRubySmile"], "readonly").objectStore("DBRubySmile").get(Number(feedbackID))
}