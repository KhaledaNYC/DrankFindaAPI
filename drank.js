


$('button#get-dranks').click(function(){
  var address = $('#full-address').val();
  var addressUrl = address.split(' ').join("+");
  var zipcode = $('#zip-code').val();
  var alcohol = $('#alcohol').val();

  var base_url = `https://www.delivery.com/api/data/search?search_type=alcohol&?section=${alcohol}&address=${addressUrl},${zipcode}&order_time=ASAP&order_type=delivery&client_id=brewhacks2016`

  $.ajax({
    url: base_url,
    method: 'GET',
    error: function(request,error){
      alert("Address not found or is not in a deliverable area.");
    },
    success: function (response,status) {
      for (var i = 0; i < response.data.merchants.length; i++) {
        var merchantName = response.data.merchants[i]
        .summary.name
        var merchantLogo = response.data.merchants[i].summary.merchant_logo
        var phone = response.data.merchants[i].summary.phone
        var rating = response.data.merchants[i].summary.overall_rating
        $('div.result').append(
          `<div class='merch' id=result${i}>
          <img src=${merchantLogo}>
          <h1>${merchantName} </h1>
          <h4>Phone:</h4>
          <p>${phone} </p>
          <h4>Rating:</h4>
          <p>${rating} </p>
          <h4>Yelp Excerpts: </h4>
          </div><br>
          `);
          for (var j = 0; j < response.data.merchants[i].yelp_info.rating.reviews.length; j++) {
            debugger;
            var excerpt = response.data.merchants[i].yelp_info.rating.reviews[j].excerpt
            $(`div#result${i}`).append(`<div id=review${i}><li>${excerpt}</li></div>`);
          }



      }
    }
      // var merchantName = response.data.merchants[i]
      // .summary.name
      // var merchantLogo = response.data.merchants[i].summary.merchant_logo
      // var phone = response.data.merchants[i].summary.phone
      // var rating = response.data.merchants[i].summary.overall_rating
      // $('#merchant-label').text("Merchant: ")
      // $('#merchant-name').text(merchantName);
      // $('img#merchant-logo').attr('src', merchantLogo)
      //   $('#phone-label').text("Phone: ")
      // $('#merchant-phone').text(phone);
      //   $('#rating-label').text("Rating: ")
      // $('#merchant-rating').text(rating);
    // }
  });

});
