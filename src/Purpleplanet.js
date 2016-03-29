var Purpleplanet = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/purpleplanet.png' );
        this.velocity = Purpleplanet.VELOCITY;
    },
    
    update: function( dt ) {
        this.checkPositionForReappear();
        this.moveDown();
        
    },
    
    moveDown: function() {
        var position = this.getPosition();
        this.setPosition( new cc.Point( position.x, position.y - this.velocity ) );
       // this.velocity += Purpleplanet.ACCELERATION;
    },
    
    randomPositionX: function() {
        return Math.round( ( ( Math.random() * 4 ) + 0.75 ) * 100 );
    },
    
    randomPositionY: function() {
        return ( Math.random() + 6.5 ) * 100;
    },
    
    checkPositionForReappear: function() {
        var position = this.getPosition();
        if ( position.y < -50 ) {
            this.setPosition( this.randomPositionX(), this.randomPositionY() );
        }
    }
});

Purpleplanet.VELOCITY = 2;
Purpleplanet.ACCELERATION = 0.005;