var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 7, 23, 34, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.rocket = new Rocket();
        this.rocket.setPosition( new cc.Point( 50, 50 ) );
        this.addChild( this.rocket );
        this.rocket.scheduleUpdate();
        this.addKeyboardHandlers();
        

        this.fuel = new Fuel();
        this.fuel.setPosition( new cc.Point( this.fuel.randomPositionX(), 
                                            this.fuel.randomPositionY() ) );
        this.addChild( this.fuel );
        this.fuel.scheduleUpdate();

        this.obstacles = this.generateObastacles();
        for( var i = 0 ; i < this.obstacles.length ; i++ ) {
            this.obstacles[i].setPosition( new cc.Point( this.obstacles[i].randomPositionX(),                                                             this.obstacles[i].randomPositionY() + i * 170 ) );
            this.addChild( this.obstacles[i] );
            this.obstacles[i].scheduleUpdate();
        }
        

        
        return true;
    },
    
    onKeyDown: function( keyCode, event ) {
        
        var checkGameover = false;
        
        for ( var i = 0 ; i < this.obstacles.length ; i++ ) {
            if ( this.rocket.checkHit( this.obstacles[i] ) ) {
                checkGameover = true;
            }
        }
        if ( !checkGameover ) {
            this.rocket.move( keyCode );
        }
        else {
            this.rocket.gameEnd();
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
    },
    
    generateObastacles: function() {
        var blackhole = new Blackhole();
        
        var blueplanet = new Blueplanet();
        
        var orangeplanet = new Orangeplanet();
        
        var purpleplanet = new Purpleplanet();
        
        var redplanet = new Redplanet();
       
        var shootingstar = new Shootingstar();
        
        var listOfObstacles = [ blackhole, blueplanet, orangeplanet, purpleplanet, 
                               redplanet, shootingstar ];
        return listOfObstacles;
        
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