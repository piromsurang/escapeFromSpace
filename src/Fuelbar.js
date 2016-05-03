var checkGameEndAndFuelbarStop = 0;

var Fuelbar = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fuelbar.png' );
    },
    
    update: function( dt ) {
        if ( gameStart == true ) {
           this.decreaseFuelbar();         
        }

        
    },
    
    decreaseFuelbar: function() {
        var position = this.getPosition();
        if ( checkGameEndAndFuelbarStop == 0 ) {
            this.setPosition( new cc.Point( position.x - 0.06, position.y ) );          
        }

    },
    
    gameEnd: function() {
        checkGameEndAndFuelbarStop = 1;
    },
    
    restart: function() {
        checkGameEndAndFuelbarStop = 0;
    }
});

var Borderfuelbar = cc.Sprite.extend({
   ctor: function() {
       this._super();
       this.initWithFile( 'res/images/borderfuelbar.png' );
   } 
});