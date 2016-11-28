// Take the widths of the header
var headerWidths = [];

// Cache elements as much as possible
var $mainContainer= $('.mainContainer');
var $headerContainer= $('.headerContainer');


var headerRow = $('thead').children('tr').children('th');
$(headerRow).each(function() {
  headerWidths.push($(this).width());
});

// Create new div containing the header
$headerContainer.css("position", "absolute");
$('thead').clone().appendTo('.headerContainer table').removeClass("headerRow");
$(".headerRow").css("visibility", "hidden");

// Resizing the columns
$headerContainer.find('thead th').each(function() {
  var i = $(this).index();

  $(this).attr("id", "header" + i);
  $('#header' + i).css("width", headerWidths[i]);
});

// Scroll event and repositioning
// 
// The scroll is happening to the main container so 
// thats where the event needs to be bound
$mainContainer.on('scroll', function(event) {
  var scrollY = $mainContainer.scrollTop();
  $headerContainer.css('transform', 'translate(0px,' + scrollY + 'px )');
});
