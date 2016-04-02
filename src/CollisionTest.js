var checkCollision = function( rocketX, rocketY, obstacleX, obstacleY ) {
    if ( rocketY - obstacleY >= -80 && rocketY - obstacleY <= 80) {
        if ( rocketX - obstacleX >= - 80 && rocketX - obstacleX <= 80 ) {
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