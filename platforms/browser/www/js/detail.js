function showAllReview() {
    let resultGet = getAllData()
    resultGet.onsuccess = function(event) {
        let data = event.target.result;
        for (let i in data) {
            let HTML = `<div class="col-md-4 text-center col-sm-6 col-xs-6">
        <div class="product-box">
            <div class="caption">
                <h3>${data[i].restaurant_name}</h3>
                <p>${data[i].restaurant_type}</p>
                <p>Average Rating: <span>${AverageReviewPoint(data[i].restaurant_food_rating,data[i].restaurant_cleanliness_rating,data[i].restaurant_service_rating)}</p>
                <button id="delete" feedbackId = "${data[i].id}" class="btn btn-danger">Delete Review</button>
                <button id="detail" class="btn btn-primary" feedbackId = "${data[i].id}">Detail</button>
            </div>
        </div>
        </div>`

            $('#list_data').append(HTML);
        }

    }
}
function RingAndVibration() {
    navigator.notification.beep(1);
    navigator.vibrate(100);
}
function AverageReviewPoint(first,second,third){
    return parseFloat((Number(first)+Number(second)+Number(third))/3).toFixed(1);
}

$(window).on('load', function() {
    showAllReview();
})
$(document).ready(function() {
    $('#home').on('click', function() {
        showAllReview()
    })

    $(document).on('click', '#delete', function() {
        let feedbackID = $(this).attr('feedbackId');
        const res = deleteFeedback(feedbackID);
        res.onsuccess = function() {
            alert("Delete successfully")
            RingAndVibration();
            document.getElementById('list_data').innerHTML = ""
            showAllReview();
        }
        res.onerror = function() {
            RingAndVibration();
            alert("Delete Error")
        }
        
    })
    $(document).on('submit', '#form', function() {
        const data = {
            restaurant_name: document.getElementById("restaurant_name").value,
            restaurant_type: document.getElementById("restaurant_type").value,
            date_comming: document.getElementById("date_comming").value,
            average_price: document.getElementById("restaurant_average_price").value,
            restaurant_service_rating: document.getElementById("restaurant_service_rating").value,
            restaurant_cleanliness_rating: document.getElementById("restaurant_cleanliness_rating").value,
            restaurant_food_rating: document.getElementById("restaurant_food_rating").value,
            review_note: document.getElementById("review_note").value
        }
        const res = createFeedback(data);
        res.onsuccess = function() {
            alert("Create successfully");
        }
        res.onerror = function() {
            alert("Create failed");
        }
    })
    $(document).on('click', "#detail", function() {
        let feedbackID = $(this).attr('feedbackId')
        const res = getDetailFeedback(feedbackID)
        res.onsuccess = function(event) {
            RingAndVibration();
            $(location).attr('href', '#detailPage')
            const data = event.target.result
            const html = `
                <h3>Name: ${data.restaurant_name}</h3>
                <p>Type: ${data.restaurant_type}</p>
                <p>Cleanliness: ${data.restaurant_cleanliness_rating}</p>
                <p>Food review: ${data.restaurant_food_rating}</p>
                <p>Service rating: ${data.restaurant_service_rating}</p>
                <p>Average Rating: <span>${AverageReviewPoint(data.restaurant_food_rating,data.restaurant_cleanliness_rating,data.restaurant_service_rating)}</p>
                <p>Notes: ${data.review_note}</p>
                <p>Reporter: </p>
                <style>
                p{
                    color:red;
                }
                </style>
                `
            $('#details').empty().append(html);
        }
        res.onerror = function() {
            alert("Error: Get detail");
        }
    })

})