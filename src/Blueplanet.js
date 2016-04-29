
var Blueplanet = cc.Sprite.extend({
   ctor: function() {
       this._super();
       this.initWithFile( 'res/images/blueplanet.png' );
       this.velocity = Blueplanet.VELOCITY;
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
        this.velocity += Blueplanet.ACCELERATION;
    },
    
    randomPositionX: function() {
        
        var rand = Math.round( ( ( Math.random() * 5 ) + 0.5 ) * 100 );
        
        if ( rand > 0 && rand < 100 ) {
            rand = 50;
        }
        else if ( rand >= 100 && rand < 200 ) {
            rand = 150;
        }
        else if ( rand >= 200 && rand < 300 ) {
            rand = 250;
        }
        else if ( rand >= 300 && rand < 400 ) {
            rand = 350;
        }
        else if ( rand >= 400 && rand < 500 ) {
            rand = 450;
        }
        else {
            rand = 550;
        }
        return rand;
    },
    
    randomPositionY: function() {
        return ( Math.random() + 6.5 ) * 100;
    },
    
    checkPositionForReappear: function() {
        var position = this.getPosition();
        if ( position.y < -40 ) {
            this.setPosition( this.randomPositionX(), this.randomPositionY() );
        }
    },
    
    gameEnd: function() {
        this.velocity = 0;
    },
    
    restart: function() {
        this.velocity = Blueplanet.VELOCITY;
    }
});

Blueplanet.VELOCITY = 2;
Blueplanet.ACCELERATION = 0.0005;