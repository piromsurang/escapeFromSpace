var checkCollision = function( rocketX, rocketY, obstacleX, obstacleY ) {
    if ( rocketY - obstacleY >= -80 && rocketY - obstacleY <= 80) {
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