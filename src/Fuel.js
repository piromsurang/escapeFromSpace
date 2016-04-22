

var Fuel = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fuel.png' );
    },
    
    update: function( dt ) {
    },
    
    randomPositionX: function() {
        var position = Math.random() * ( screenWidth - 100 ) + 100;
        
        if ( position > 0 && position < 100 ) {
            position = 50;
        }
        else if ( position>= 100 && position < 200 ) {
            position = 150;
        }
        else if ( position >= 200 && position< 300 ) {
            position = 250;
        }
        else if ( position >= 300 && position < 400 ) {
            position = 350;
        }
        else if ( position >= 400 && position < 500 ) {
            position = 450
        }
        else {
            position = 550;
        }
        return position;
    },
    
    randomPositionY: function() {
        var position = Math.random() * ( screenHeight - 200 ) + 100;
        return position;
    },
    
    closeTo: function( rocket ) {
        var rocketPosition = rocket.getPosition();
        var fuelPosition = this.getPosition();
        if ( rocketPosition.x - fuelPosition.x >= -Fuel.BORDER && 
            rocketPosition.x - fuelPosition.x <= Fuel.BORDER &&
           rocketPosition.y - fuelPosition.y >= -Fuel.BORDER &&
            rocketPosition.y - fuelPosition.y <= Fuel.BORDER ) {
            
            return true;
        }
        else {
            return false;
        }
    }
});

Fuel.BORDER = 43;