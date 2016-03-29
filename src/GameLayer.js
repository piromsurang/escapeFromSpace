var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 1, 1, 1, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.rocket = new Rocket();
        this.rocket.setPosition( new cc.Point( 0, 0 ) );
        this.addChild( this.rocket );
        this.rocket.scheduleUpdate();
        
        this.addKeyboardHandlers();

        this.blackhole = new Blackhole();
        this.blackhole.setPosition( new cc.Point( 100, 700 ) );
        this.addChild( this.blackhole );
        this.blackhole.scheduleUpdate();
        
        return true;
    },
    
    onKeyDown: function( keyCode, event ) {
        if ( this.blackhole && !this.blackhole.hit( this.rocket )) {
            this.rocket.move( keyCode );
        }

    },
    
    onKeyUp: function( keyCode, event ) {
    },
    
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});