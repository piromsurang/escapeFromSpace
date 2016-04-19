
var Rocket = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/rocket.png' );
        this.direction = null;
        //this.velocity = ( screenWidth - 100 ) / 6;
        this.velocity = 50;
        this.acceleration = 2;
    },
    
    update: function( dt ) {
        var position = this.getPosition();

        this.checkThenMove();
        

    },
    
    move: function( key ) {
        var position = this.getPosition();
        
        if ( key == cc.KEY.w ) {
            this.setPosition( new cc.Point( position.x, position.y + this.velocity ) );
        }
        else if ( key == cc.KEY.a ) {
            this.setPosition( new cc.Point( position.x - this.velocity, position.y ) );
        }
        else if ( key == cc.KEY.s ) {
            this.setPosition( new cc.Point( position.x, position.y - this.velocity ) );
        }
        else if ( key == cc.KEY.d ) {
            this.setPosition( new cc.Point( position.x + this.velocity, position.y ) );
        } 
    },
    
    checkThenMove: function() {  
        var position = this.getPosition();
        if ( position.x < 50 ) {
            if ( position.y < 50 ) {
                this.setPosition( new cc.Point( 50, 50 ) );
            }
            else if ( position.y > screenHeight - 50 ) {
                this.setPosition( new cc.Point( 50, screenHeight - 50 ) );
            }
            else {
                this.setPosition( new cc.Point( 50, position.y ) );
            }
        }
        else if ( position.x > screenWidth - 50 ) {
            if ( position.y < 50 ) {
                this.setPosition( new cc.Point( screenWidth - 50, 50 ) );
            }
            else if ( position.y > screenHeight - 50 ) {
                this.setPosition( new cc.Point( screenWidth - 50, screenHeight - 50 ) );
            }
            else {
                this.setPosition( new cc.Point( screenWidth - 50, position.y ) );
            }
        }
        else {
            if ( position.y < 50 ) {
                this.setPosition( new cc.Point( position.x, 50 ) );
            }
            else if ( position.y > screenHeight - 50 ) {
                this.setPosition( new cc.Point( position.x, screenHeight - 50 ) );
            }
            else {
                this.setPosition( new cc.Point( position.x, position.y ) );
            }
        }
    },
    
    checkHit: function( obstacle ) {
        var rPosition = this.getPosition();
        var oPosition = obstacle.getPosition();
        
        return checkCollision( rPosition.x, rPosition.y, oPosition.x, oPosition.y );
    },
    
    gameEnd: function() {
        this.velocity = 0;
    }
});

