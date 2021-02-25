
  var $form = $('form#test-form'),
  url = 'https://script.google.com/macros/s/AKfycbyF6wlQhtaZ0X3XHaB-CYoDVvOOPTlddeubaM1Rlic4RqXIsKyP-c0uVA/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
  url: url,
  method: "GET",
  dataType: "json",
  data: $form.serializeObject()
}).success(
  // do something
);
})

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
