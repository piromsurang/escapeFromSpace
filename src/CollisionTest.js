var checkCollision = function( rocketX, rocketY, obstacleX, obstacleY ) {
    if ( rocketY - obstacleY >= -checkCollision.BORDERSIDE && 
        rocketY - obstacleY <= checkCollision.BORDERSIDE ) {
        
        if ( rocketX - obstacleX >= -checkCollision.BORDERSIDE && 
            rocketX - obstacleX <= checkCollision.BORDERSIDE ) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
checkCollision.BORDERSIDE = 60; 