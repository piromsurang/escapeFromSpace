var checkGameEndAndFuelbarStop = 0;

var Fuelbar = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fuelbar.png' );
    },
    
    update: function( dt ) {
        this.decreaseFuelbar();
        
    },
    
    decreaseFuelbar: function() {
        var position = this.getPosition();
        if ( checkGameEndAndFuelbarStop == 0 ) {
            this.setPosition( new cc.Point( position.x - 1, position.y ) );          
        }

    },
    
    gameEnd: function() {
        checkGameEndAndFuelbarStop = 1;
    }
});