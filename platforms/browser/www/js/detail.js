function loadAllData() {
    let result = getAllData()
    result.onsuccess = function(event) {
        let data = event.target.result
        console.log(data)
        for (let i in data) {
            let newContent = `<div class="col-md-4 text-center col-sm-6 col-xs-6">
        <div class="product-box">
            <div class="caption">
                <h3>${data[i].r_name}</h3>
                <p>${data[i].r_type}</p>
                <p>Average Rating: <span>${parseFloat((Number(data[i].r_food_rating) + Number(data[i].r_cleanliness_rating) + Number(data[i].r_service_rating))/3).toFixed(1)}</p>
                <button id="delete" feedbackId = "${data[i].id}" class="btn btn-danger">Delete</button>
                <button id="detail" class="btn btn-primary" feedbackId = "${data[i].id}">Information</button>
            </div>
        </div>
        </div>`

            $('#list_data').append(newContent)
        }

    }
}
$(window).on('load', function() {
    loadAllData()
})
$(document).ready(function() {
    $('#home').on('click', function() {
        loadAllData()
    })

    $(document).on('click', '#delete', function() {
        let id = $(this).attr('feedbackId')
        deleteFeedback(id)
        navigator.notification.beep(1);
        navigator.vibrate(100)
    })
    $(document).on('submit', '#form', function() {
        const data = {
            r_name: document.getElementById("r_name").value,
            r_type: document.getElementById("r_type").value,
            r_date: document.getElementById("r_date").value,
            average_price: document.getElementById("r_average_price").value,
            r_service_rating: document.getElementById("r_service_rating").value,
            r_cleanliness_rating: document.getElementById("r_cleanliness_rating").value,
            r_food_rating: document.getElementById("r_food_rating").value,
            r_notes: document.getElementById("r_notes").value
        }
        const create = createFeedback(data)
        create.onsuccess = function() {
            alert("Create successfully")
        }
        create.onerror = function() {
            alert("Create Fail")
        }
    })
    $(document).on('click', "#detail", function() {
        let id = $(this).attr('feedbackId')
        const feedback = getDetailFeedback(id)
        feedback.onsuccess = function(event) {
            navigator.notification.beep(1);
            navigator.vibrate(100)
            $(location).attr('href', '#detailPage')
            const data = event.target.result
            const html = `
                <p>Name:${data.r_name}</p>
                <p>Type: ${data.r_type}</p>
                <p>C: ${data.r_cleanliness_rating}</p>
                <p>F:${data.r_food_rating}</p>
                <p>S:${data.r_service_rating}</p>
                <p>Average Rating: <span>${parseFloat((Number(data.r_food_rating) + Number(data.r_cleanliness_rating) + Number(data.r_service_rating))/3).toFixed(1)}</p>
                <p>Notes: ${data.r_notes}</p>
                <p>Reporter: </p>
                `
            $('#details').empty().append(html)
        }
        feedback.onerror = function() {
            alert("Error get detail")
        }
    })

})