var $navToggle = $('.nav-toggle');
var $mainNavUl = $('.main-nav ul');
var $window = $(window);

$navToggle.on('click', function() {
  $mainNavUl.slidetoggle();
  $navToggle.toggleClass('active');
});

$(window).on('resize', function() {
  if ($(window.width() > 767) {
  $mainNavUl.show();
  $navToggle.addClass('active');
}
})
