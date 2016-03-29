var Blackhole = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/blackhole.png' );
        this.velocity = Blackhole.STARTING_VELOCITY;
    },
    
    update: function( dt ) {

        this.moveDown();


        console.log( 'Blackhole: ' + this.getPositionX() );
    },
    
    checkPosition: function() {
        var position = this.getPosition();
        if ( position.x < 0 ) {
            
        }
    },
    
    moveDown: function () {
        var position = this.getPosition();
        
        this.setPosition( new cc.Point( position.x, position.y - this.velocity) );
        this.velocity += Blackhole.ACCELERATION;
    },
    
    hit: function( rocket ) {
        var rPosition = rocket.getPosition();
        var oPosition = this.getPosition();
        
        return checkCollision( rPosition.x, rPosition.y, oPosition.x, oPosition.y );
    }
});

Blackhole.STARTING_VELOCITY = 2;
Blackhole.ACCELERATION = 0.005;