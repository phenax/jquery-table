// Take the widths of the header
var headerWidths = [];
var rowWidths = [];

// Reading the CSS width property
var bodyStyles = window.getComputedStyle(document.body);
var tableWidth = String(bodyStyles.getPropertyValue('--width-table'));
var tableHeight = String(bodyStyles.getPropertyValue('--height-table'));
var paddingTable = String(bodyStyles.getPropertyValue('--padding-table'));
var borderTable = String(bodyStyles.getPropertyValue('--border-table'));

paddingTable = paddingTable.replace("px", "");
borderTable = borderTable.replace("px", "");

// Take the headers width
var headerRow = $('thead').children('tr').children('th');
$(headerRow).each(function() {
  headerWidths.push($(this).width());
});

console.log(headerWidths);

// Create new div
$(".headerContainer").css("position", "absolute");
$('thead').clone().appendTo('.headerContainer table').removeClass("headerRow");
$(".headerRow").css("visibility", "hidden");

$('.headerContainer thead th').each(function() {
  var i = $(this).index();
  $(this).attr("id", "header" + i);
  $('#header'+i).css("width", headerWidths[i]);
  // $(this).css("width", );
  console.log("Dovrebbe " + i + " " + headerWidths[i]);
  console.log("Riga " + i + " " + $(this).width());
});

// Position absolute

// Scroll event and repositioning
$(window).scroll(function(event){
  var scrollY = $(window).scrollTop();
  // var scrollX = $(window).scrollLeft();
      // $(".headerContainer").css("top", scrollY);
      console.log(scrollY);
      $('.headerContainer').css('transform', 'translate(0px,' + scrollY + 'px )');
      // $(".headerContainer").css("left", scrollX);
});
