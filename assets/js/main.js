(function ($) {
	"use strict";


//flight options preview
$('.flight-detail-wrap').slideUp();
$('.detail').on('click', function () {
	$(this).toggleClass('show');
	$(this).parent().parent().parent().parent().find('.flight-detail-wrap').slideToggle();
});

// date picker
$(function () {
	$(".form-grp .date").datepicker({
		autoclose: true,
		todayHighlight: true
	}).datepicker('update', new Date());
});

})(jQuery);