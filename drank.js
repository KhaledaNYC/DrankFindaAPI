


$('button#get-dranks').click(function(){
  var address = $('#full-address').val();
  var addressUrl = address.split(' ').join("+");
  var zipcode = $('#zip-code').val();
  var alcohol = $('#alcohol').val();
  debugger;
  var base_url = `https://www.delivery.com/api/data/search?search_type=alcohol&?section=${alcohol}&address=${addressUrl},${zipcode}&order_time=ASAP&order_type=delivery&client_id=brewhacks2016`

  $.ajax({
    url: base_url,
    method: 'GET',
    success: function (response,status) {
      var merchantName = response.data.merchants[0]
      .summary.name
      var merchantLogo = response.data.merchants[0].summary.merchant_logo
      var phone = response.data.merchants[0].summary.phone
      var rating = response.data.merchants[0].summary.overall_rating
      $('#merchant-label').text("Merchant: ")
      $('#merchant-name').text(merchantName);
      $('img#merchant-logo').attr('src', merchantLogo)
        $('#phone-label').text("Phone: ")
      $('#merchant-phone').text(phone);
        $('#rating-label').text("Rating: ")
      $('#merchant-rating').text(rating);
    }
  });

});
