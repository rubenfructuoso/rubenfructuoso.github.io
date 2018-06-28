$(document).ready(function(){
  alert('gopfetami!');
  $('body').toggle(
    function(){$('body').css('background','red');},
    function(){$('body').css('background','white');},
  );
}
);
