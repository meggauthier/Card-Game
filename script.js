

var correctCards = 0;
$( init );
	
function init() {
	
	
	//hide the success message
	$('successMessage').hide().css( {
		left: '580px',
		top: '250px',
		width: 0,
		height: 0,
	} );

	
	
	//reset the game
	correctCards = 0;
	$('#cardPile').html( '' );
	$('#carsSlots').html( '' );
	
	//create the pile of shuffled cards
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	//var numbers = Array(1-10);
	
	
	//Randomly orders number array
	numbers.sort( function() {return Math.random() -.5 } ); 
	
	for ( var i=0; i<10; i = i+1 ) {
		$('<div>' + numbers[1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card' +numbers[1] ).appendTo( '#cardPile' ).draggable( {
			containment: '#content',
			stack: '#cardPile div',
			cursor: 'move',
			revert: true
		});
	}
	
}<!--closes init function-->