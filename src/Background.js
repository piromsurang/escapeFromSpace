var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/background.png' );
    },

    update: function( dt ) {
        if ( gameStart == true ) {
           this.checkPositionForReappear();
        }

    },

    moveDown: function() {
        var position = this.getPosition();
        this.setPosition( new cc.Point( position.x, position.y - 2 ) );
    },

    checkPositionForReappear: function() {
        var position = this.getPosition();
        if ( position.y <= -1800 ) {
            this.setPosition( new cc.Point( position.x, 0 ) );
        }
        else {
            this.moveDown();
        }
    }
});

var GameOver = cc.Sprite.extend({
   ctor: function() {
       this._super();
       this.initWithFile( 'res/images/gameover.png' );
   }
});

var Explosion = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/explosion.png' );
    }
});
