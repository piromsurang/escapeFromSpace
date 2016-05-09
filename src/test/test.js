var assert = function( actual, expected, message ) {
    var msg = "";
 
    if ( actual === expected ) {
	msg = '<span style="color: green">OK</span>';
    } else {
	msg = '<span style="color: red; font-weight: bold">Failed:</span> ' + message;
    }
 
    var elt = document.getElementById( 'test-output' );
    elt.innerHTML += "<li>" + msg + "</li>";
};
 
assert( checkCollision( 100, 100, 300, 200 ), false,
	'when the rocket is very far left' );
assert( checkCollision( 300, 300, 300, 240 ), true,
	'when the rocket hit the middle of the obstacle' );
assert( checkCollision( 50, 50, 100, 50 ), true,
	'when the rocket hit the left of the obstacle' );
assert( checkCollision( 150, 50, 100, 50 ), true,
	'when the rocket hit the right of the obstacle' );
assert( checkCollision( 50, 100, 100, 50 ), true,
	'when the rocket hit the top of the obstacle' );
assert( checkCollision( 2000, 100, 50, 200 ), false,
	'when the rocket is very far right' );