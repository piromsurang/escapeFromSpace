var Startbutton = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/startbutton.png' );
    }
});

var StartBackground = cc.Sprite.extend({
   ctor: function() {
       this._super();
       this.initWithFile( 'res/images/startBackground.png' );
       this.setPosition( new cc.Point( 300, 300 ) );
   } 
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        this.startbackground = new StartBackground();
        this.startbackground.setPosition( new cc.Point( 300, 300 ) );
        this.addChild( this.startbackground );
        
        this.startbutton = new Startbutton();
        this.startbutton.setPosition( new cc.Point( 300, 200 ) );
        this.addChild( this.startbutton );
        
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});