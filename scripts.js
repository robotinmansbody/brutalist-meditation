$('.audio-control-wrapper').on('click', function() {

	var $audio = $(this).find('audio')[0];
	var $audioToggle = $(this).find('button');

	$audioToggle.toggleClass('audio-off audio-on');

	$audio.paused ? $audio.play() : $audio.pause();
});