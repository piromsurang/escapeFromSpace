var checkCollision = function( rocketX, rocketY, obstacleX, obstacleY ) {
    if ( rocketY - obstacleY >= -85 && rocketY - obstacleY <= 85) {
        if ( rocketX - obstacleX >= - 50 && rocketX - obstacleX <= 50 ) {
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