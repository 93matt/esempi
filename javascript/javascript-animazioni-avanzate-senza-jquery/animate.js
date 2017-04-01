var Animation =
{
  init: function()
  {
  
    Animation.frameRate = 25;
    Animation.acceleration = 2;
    Animation.threshold = 0.5;
    Animation.div = document.getElementById("test");
    Animation.targetX = 530;
    Animation.targetY = 330;
    Animation.originX = 5;
    Animation.originY = 5;
    
    if (Animation.targetX < Animation.originX)
    {
      Animation.x = Animation.originX - Animation.threshold;
    }
    else
    {
      Animation.x = Animation.originX + Animation.threshold;
    }
    
    Animation.distanceY = Animation.targetY - Animation.originY;
    
    Animation.animate();
  },

  animate: function()
  {
    Animation.x += (Animation.x - Animation.originX) / Animation.acceleration;
    var movementRatio = (Animation.x - Animation.originX) / (Animation.targetX - Animation.originX);
    var y = Animation.originY + Animation.distanceY * movementRatio;
    
    if ((Animation.targetX > Animation.originX && Animation.x >= Animation.targetX) || (Animation.targetX < Animation.originX && Animation.x <= Animation.targetX))
    {
      Animation.x = Animation.targetX;
      y = Animation.targetY;
    }
    else
    {
      setTimeout(Animation.animate, 1000 / Animation.frameRate)
    }

    Animation.div.style.left = Math.round(Animation.x) + "px";
    Animation.div.style.top = Math.round(y) + "px";
  }
};

window.onload = Animation.init;