function hasCollided(object1, object2) {
  
    if (wall.x - bullet.x < (bullet.width + wall.width)) {
      
        return true;
  } else {
    return false;
  }
  
  }