// Take the widths of the header
var headerWidths = [];

var headerRow = $('thead').children('tr').children('th');
$(headerRow).each(function() {
  headerWidths.push($(this).width());
});

// Create new div containing the header
$(".headerContainer").css("position", "absolute");
$('thead').clone().appendTo('.headerContainer table').removeClass("headerRow");
$(".headerRow").css("visibility", "hidden");

// Resizing the columns
$('.headerContainer thead th').each(function() {
  var i = $(this).index();

  $(this).attr("id", "header" + i);
  $('#header' + i).css("width", headerWidths[i]);
});

// Scroll event and repositioning
$(window).scroll(function(event) {
  var scrollY = $(window).scrollTop();
  $('.headerContainer').css('transform', 'translate(0px,' + scrollY + 'px )');
});
