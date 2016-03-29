var Blackhole = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/blackhole.png' );
        this.velocity = Blackhole.STARTING_VELOCITY;
    },
    
    update: function( dt ) {
        
        this.checkPositionForReappear();
        this.moveDown();
        

        
    },
    
    moveDown: function() {
        var position = this.getPosition();
        
        this.setPosition( new cc.Point( position.x, position.y - this.velocity) );
        //this.velocity += Blackhole.ACCELERATION;
    },
    
    randomPositionX: function() {
        var rand = Math.round( Math.random() * 4 + 0.5 ) * 100 ;
        return rand;
    },
    
    randomPositionY: function() {
        return ( Math.random() + 6.5 ) * 100;
    },
    
    checkPositionForReappear: function() {
        var position = this.getPosition();
        if ( position.y < -50 ) {
            this.setPosition( new cc.Point( this.randomPositionX(), this.randomPositionY() ))
        }
    }
});

Blackhole.STARTING_VELOCITY = 2.3;
Blackhole.ACCELERATION = 0.005;