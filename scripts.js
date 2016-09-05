
$( "#wordFilter" ).keyup(function() {
  var filterWord = $(this).val();
  var notTheWordsIWant = $( "dt:not(:contains(" + filterWord + "))" );
  var theWordsIWant = $("dt:contains(" + filterWord + ")"
  );
  theWordsIWant.show().next("dd").show();
  // theWordsIWant.next("dd").show();
  notTheWordsIWant.hide().next("dd").hide();
  // notTheWordsIWant.next("dd").hide();
});
