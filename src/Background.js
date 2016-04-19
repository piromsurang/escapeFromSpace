var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/background.png' );
    }
});

var GameOver = cc.Sprite.extend({
   ctor: function() {
       this._super();
       this.initWithFile( 'res/images/gameover.png' );
   } 
});