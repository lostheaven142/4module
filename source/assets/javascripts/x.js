// $(function() {
//     function First() {
//         this.object = {
//             x:0,
//             y:0
//         };
//     }
//     First.prototype.lolwat = function(){
//         var X = this.object.x + 100
//         var Y = this.object.y
//         console.log(X, Y)
//     }
    
//     var Second = new First()
//     Second.lolwat()
// });

$( document ).ready(function() {
    $('.button').on('click', function(){
        var myTextField = document.getElementById('name');
	       // myTextField.value
	       // console.log(myTextField.value);
        document.getElementById('ghost').innerHTML = "I'm a "+ myTextField.value;
        $('form').animate({opacity:0}, 500);
        $(window).on('mousemove', function(e){
            console.log(e.pageX, e.pageY);
            // $('body').append( $('.ghost') );
            // $('.ghost').animate({opacity:1, top:''+ event.pageX+'px', left:''+event.pageY+'px' }, 100);
            $('.ghost').css('left',(e.pageX+20)+'px').css('top',(e.pageY+20)+'px').css('opacity',1);
            $('.ghost').animate({opacity:0.6, queue:false}, 100);
        })
    })
});