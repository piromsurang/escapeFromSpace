

var Shootingstar = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/shootingstar.png' );
        this.velocity = Shootingstar.VELOCITY;
    },

    update: function( dt ) {
        if ( gameStart == true ) {
            this.checkPositionForReappear();
            this.moveDown();
        }    
    },

    moveDown: function() {
        var position = this.getPosition();
        this.setPosition( new cc.Point( position.x, position.y - this.velocity ) );
        this.velocity += Shootingstar.ACCELERATION;
    },

    randomPositionX: function() {
        return Math.round( ( ( Math.random() * 4 ) + 0.75 ) * 100 );
    },

    randomPositionY: function() {
        return ( Math.random() + 6.5 ) * 100;
    },

    checkPositionForReappear: function() {
        var position = this.getPosition();
        if ( position.y < -500 ) {
            this.setPosition( this.randomPositionX(), this.randomPositionY() );
        }
    },

    gameEnd: function() {
        this.velocity = 0;
    },

    restart: function() {
        this.velocity = Shootingstar.VELOCITY;
    }
});

Shootingstar.VELOCITY = 4;
Shootingstar.ACCELERATION = 0.009;
