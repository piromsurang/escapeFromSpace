var distance = 0;
var checkGameEnd = false;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 7, 23, 34, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background();
        this.background.setPosition( new cc.Point( 300, 300 ) );
        this.addChild( this.background );
        
        this.rocket = new Rocket();
        this.rocket.setPosition( new cc.Point( 50, 50 ) );
        this.addChild( this.rocket, 1 );
        this.rocket.scheduleUpdate();
        this.addKeyboardHandlers();
        
        this.distanceLabel = cc.LabelTTF.create( 'Distance: 0 m', 'Arial', 20 );
	    this.distanceLabel.setPosition( new cc.Point( 510, 570 ) );
        this.addChild( this.distanceLabel, 3 );
        
        this.fuel = new Fuel();
        this.fuel.setPosition( new cc.Point( this.fuel.randomPositionX(), 
                                            this.fuel.randomPositionY() ) );
        this.addChild( this.fuel, 1 );
        this.fuel.scheduleUpdate();
        
        this.scheduleUpdate();
        
        this.borderfuelbar = new Borderfuelbar();
        this.borderfuelbar.setPosition( new cc.Point( 95, 575 ) );
        this.addChild( this.borderfuelbar, 3 );
        
        this.fuelbar = new Fuelbar();
        this.fuelbar.setPosition( new cc.Point( 105, 575 ) );
        this.addChild( this.fuelbar, 2 );
        
        this.fuelbar.scheduleUpdate();
        
        this.explosion = new Explosion();
        this.explosion.setPosition( new cc.Point( 700, 700 ) );
        this.addChild( this.explosion, 3 );
        
        this.obstacles = this.generateObastacles();
        for( var i = 0 ; i < this.obstacles.length ; i++ ) {
            this.obstacles[i].setPosition( new cc.Point( this.obstacles[i].randomPositionX(),                                                             this.obstacles[i].randomPositionY() + i * 170 ) );
            this.addChild( this.obstacles[i], 1 );
            this.obstacles[i].scheduleUpdate();
        }
        
        
        
        return true;
    },
    
    onKeyDown: function( keyCode, event ) {

        if ( checkGameEnd == false ) {
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
        this.checkRocketHitObstacles();
        this.checkFuelCloseToRocket();

    },
    
    gameEnd: function() {
        this.rocket.gameEnd();
        this.fuelbar.gameEnd();
        this.explosion.setPosition( new cc.Point( this.rocket.getPositionX(),
                                                 this.rocket.getPositionY() ) );
        
        for ( var i = 0 ; i < this.obstacles.length ; i++ ) {
            this.obstacles[i].gameEnd();
        }       
    },
    
    checkFuelCloseToRocket: function() {
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
    },
    
    checkRocketHitObstacles: function() {
        for ( var i = 0 ; i < this.obstacles.length ; i++ ) {
            if ( this.rocket.checkHit( this.obstacles[i] ) ) {
                checkGameEnd = true;
                this.gameEnd();
            }
        }
        
        if ( this.fuelbar.getPositionX() <= -40 ) {
            checkGameEnd = true;
            this.gameEnd();
        }
    }
});

 
