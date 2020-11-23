const listRes = [{
        r_name: 'KFC',
        r_type: 'Fried Chicken',
        r_date: '17/08/2020',
        r_average_price: '60,000',
        r_service_rating: 3,
        r_cleanliness_rating: 4,
        r_food_rating: 1,
        r_notes: 'Funny'
    },
    {
        r_name: 'Chicken Bros',
        r_type: 'Grilled Chicken',
        r_date: '23/10/2020',
        r_average_price: '100,000',
        r_service_rating: 5,
        r_cleanliness_rating: 5,
        r_food_rating: 5,
        r_notes: 'Very good'
    },
    {
        r_name: 'Coconut Coffee',
        r_type: 'Coffee',
        r_date: '30/11/2020',
        r_average_price: '90,000',
        r_service_rating: 4,
        r_cleanliness_rating: 3,
        r_food_rating: 3,
        r_notes: ''
    },
    {
        r_name: 'Meat plus',
        r_type: 'Grill meat',
        r_date: '21/12/2020',
        average_price: '500,000',
        r_service_rating: 4,
        r_cleanliness_rating: 4,
        r_food_rating: 4,
        r_notes: 'Expensive'
    }
]

var db;
var request = window.indexedDB.open("Re-Data", 2);
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("ReData", { keyPath: "id", autoIncrement: true });
    for (var i in listRes) {
        objectStore.add(listRes[i])
    }
}

request.onsuccess = function(event) {
    db = request.result;
    console.log("Success: " + db);
    getAllData()
}

function getAllData() {
    const transaction = db.transaction(["ReData"], "readonly");
    const objectStore = transaction.objectStore("ReData");
    request = objectStore.getAll();
    return request;
}


//delete
function deleteFeedback(feedbackId) {
    feedbackId = Number(feedbackId)
    const deleteFb = db.transaction(["ReData"], "readwrite").objectStore("ReData").delete(feedbackId)
    deleteFb.onsuccess = function() {

        alert("delete successfully")
        document.getElementById('list_data').innerHTML = ""
        loadAllData()
    }
    deleteFb.onerror = function() {
        alert("Delete Error")
    }

}

function createFeedback(data) {
    return db.transaction(["ReData"], "readwrite").objectStore("ReData").add(data)
}

function getDetailFeedback(id) {
    return db.transaction(["ReData"], "readonly").objectStore("ReData").get(Number(id))
}