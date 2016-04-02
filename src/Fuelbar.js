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
        if ( checkGameEndAndFuelbarStop == 0 ) {
            this.setPosition( new cc.Point( this.getPositionX() - 0.05, this.getPositionY() ) );          
        }

    },
    
    gameEnd: function() {
        checkGameEndAndFuelbarStop = 1;
    }
});