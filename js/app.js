$(function(){

$('#form__chat').on('submit', function(event){
	var text = $('#mytext').val()
	event.preventDefault();
	$("#section__2").append('<div class="post">'+
		'<div class="foto">'+
		'<img src="img/push.jpg" alt="">'+
		'</div>'+
		text +
		'<a class="like like--red" href="#">'+
		'<span class="glyphicon glyphicon-heart"</span>'+
		'</a>'+
		'<span class="social__number">0</span>'+
		'<input type="submit" id="boton2" value="✔">'+
		'</div>')

});


$("#section__2").on('click', '#boton2', function(){
	$(this).parent().fadeOut();
});

$('.like').on("click",function(event){
		event.preventDefault();
		$(this).toggleClass('like--red');
});


$('#preview').hover(
    function() {
        $(this).find('a').fadeIn();
    }, function() {
        $(this).find('a').fadeOut();
    }
)
$('#file-select').on('click', function(e) {
     e.preventDefault();
    
    $('#file').click();
})

$('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();
    
    $('#file-info').text('');
    $('#file-info').text(file);
    
     reader.onload = function (e) {
         $('#preview img').attr('src', e.target.result);
	 }
     
     reader.readAsDataURL(this.files[0]);
});



$("#section__2").on("click",'.like',function(){
	counter = $(this).siblings('.social__number').text();
	counter= parseInt(counter);
	 $(this).siblings('.social__number').text(counter + 1);

});



$("#section__2").on('click', '.like--red', function(event){
	event.preventDefault();
	
});

$(".aside2").on("click", function(event){
	event.preventDefault();
	event.stopPropagation();

});



});