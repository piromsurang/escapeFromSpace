var distance = 0;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 7, 23, 34, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.rocket = new Rocket();
        this.rocket.setPosition( new cc.Point( 50, 50 ) );
        this.addChild( this.rocket );
        this.rocket.scheduleUpdate();
        this.addKeyboardHandlers();
        
        this.distanceLabel = cc.LabelTTF.create( 'Distance: 0 m', 'Arial', 20 );
	    this.distanceLabel.setPosition( new cc.Point( 510, 570 ) );
        this.addChild( this.distanceLabel, 2 );
        
        this.fuel = new Fuel();
        this.fuel.setPosition( new cc.Point( this.fuel.randomPositionX(), 
                                            this.fuel.randomPositionY() ) );
        this.addChild( this.fuel );
        this.fuel.scheduleUpdate();
        
        this.scheduleUpdate();
        
        this.borderfuelbar = new Borderfuelbar();
        this.borderfuelbar.setPosition( new cc.Point( 95, 575 ) );
        this.addChild( this.borderfuelbar, 2 );
        
        this.fuelbar = new Fuelbar();
        this.fuelbar.setPosition( new cc.Point( 105, 575 ) );
        this.addChild( this.fuelbar, 1 );
        
        this.fuelbar.scheduleUpdate();
        
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
        if ( this.fuelbar.getPositionX() <= -40 ) {
            checkGameover = true;
        }
        if ( this.fuel.closeTo( this.rocket ) ) {
            var fuelbarPosition = this.fuelbar.getPosition();
            this.fuel.setPosition( new cc.Point( this.fuel.randomPositionX(), 
                                         this.fuel.randomPositionY() ) );
            
            if ( fuelbarPosition.x + 15 > 95 ) {
                this.fuelbar.setPosition( new cc.Point( 105, fuelbarPosition.y ) );
            }
            else {
                this.fuelbar.setPosition( new cc.Point( fuelbarPosition.x + 30 ), fuelbarPosition.y );
            }
   
        }

        if ( !checkGameover ) {
            this.rocket.move( keyCode );
        }
        else {
            this.rocket.gameEnd();
            
            for ( var i = 0 ; i < this.obstacles.length ; i++ ) {
                this.obstacles[i].gameEnd();
            }
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
        
    },
    
    update: function( dt ) {
        this.distanceLabel.setString( 'Distance: ' + distance + ' m' );
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