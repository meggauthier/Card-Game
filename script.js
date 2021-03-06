

var correctCards = 0;
$( init );
	
function init() {
	
	
	
	
	//hide the success message
	$('#successMessage').hide().css( {
		left: '580px',
		top: '250px',
		width: 0,
		height: 0,
	});

	
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
		$('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card' +numbers[i]		 ).appendTo( '#cardPile' ).draggable({
			containment: '#content',
			stack: '#cardPile div',
			cursor: 'move',
			revert: true,
			
		});
	}
	
	
	//creates drop place for the cards
	var slots = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
  		for ( var i=1; i<=10; i++ ) {
    	$('<div>' + slots[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
     	 accept: '#cardPile div',
     	 hoverClass: 'hovered',
     	 drop: handleCardDrop
   	 });
	}
	
}
  
 	function handleCardDrop( event, ui ) {
		 var slotNumber = $(this).data( 'number' );
		 var cardNumber = ui.draggable.data( 'number' );
		 
 
  		if ( slotNumber == cardNumber ) {
			ui.draggable.addClass( 'correct' );
			ui.draggable.draggable( 'disable' );
			$(this).droppable( 'disable' );
			ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
			ui.draggable.draggable( 'option', 'revert', false );
			correctCards++;
 		} 
  
 		if (correctCards === 10 ) {
			$('successMessage')
			.show()
			.fadeIn('slow')
			.animate( {
				left: '380px',
				top: '200px',
				width: '400px',
				height: '100px',
				opacity: 1
			
		});
			
	}
		 this._score = 0;
   		 this.score = new PIXI.Text('Score ' + this._score, {
			  font: 'bold ' + Math.round(this._scale * 40) + 'px Arial',
			  fill: '#fff',
			  stroke: 'black',
			  strokeThickness: Math.ceil(this._scale * 6),
			  align: 'left'
    });
	
		this.score.position.x = Math.round(this._scale * 20);
		this.score.position.y = Math.round(this._scale * 20);
		this.stage.addChild(this.score);
		
		//updates the score
	    this._score++;
	    this.score.setText('Score ' + this._score);
  

	
}<!--closes init function-->