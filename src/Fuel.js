var Fuel = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fuel.png' );
    },
    
    update: function( dt ) {
        console.log( 'Fuel ' + this.getPositionX() + '  ' + this.getPositionY() );
    },
    
    randomPositionX: function() {
        var position = Math.random() * ( screenWidth - 100 ) + 100;
        return position;
    },
    
    randomPositionY: function() {
        var position = Math.random() * ( screenHeight - 100 ) + 100;
        return position;
    },
    
    closeTo: function( rocket ) {
        var rocketPosition = rocket.getPosition();
        var fuelPosition = this.getPosition();
        if ( rocketPosition.x - fuelPosition.x >= -30 && rocketPosition.x <= 30 &&
           rocketPosition.y - fuelPosition.y >= -30 && rocketPosition.y - fuelPosition.y <= 30 ) {
            
            return true;
        }
        else {
            return false;
        }
    }
});