$(document).ready(function(){ //on load do the stuff below
    var count = 0;
    
    myAnimation();//play my animation the first time so the user doesn't have to wait on the loop
        
     var action = setInterval(function(){//start loop
            myAnimation();//play animation
                
            
            if(count == 1000){ //if the user has sat here and watched this for about an hour they are a champ, so congrats ;)
                clearInterval(action); //stop animation after 1000 runs, its been a good one
            }
            count++; //add one to our counter
            console.log(count);},33000);//log the number of times the animation has played for giggles, and replay every 33 seconds
    
    
    
    function myAnimation(){
           //start x rotation full 360
    TweenLite.to(".box-wrapper", 5, {rotationX: 360, transformOrigin:"62px 120px"});
    //flip the sides to end at their original location
    setTimeout(function(){
        TweenLite.to(".box-wrapper .front, .box-wrapper .back, .box-wrapper .left, .box-wrapper .right",2, {rotationX: 360});
            
        TweenLite.to(".box-wrapper .bottom, .box-wrapper .top",2, {rotationX: 270});},3000);
    
    //scale down the sides to 7/10's their size
    setTimeout(function(){TweenLite.to(".box-wrapper div", 2, {scale: 0.7});}, 3500);
    //rotate the y axis to 0 so we can see the front of the box
    setTimeout(function(){TweenLite.to(".box-wrapper", 5, {rotationY: 0});}, 4000);
    //rotate z axis to 315
    setTimeout(function(){TweenLite.to(".box-wrapper", 5, {rotationZ: 315});}, 5000);
    //rotate z axis back to 0 (we are now facing the front)
    setTimeout(function(){TweenLite.to(".box-wrapper", 5, {rotationZ: 0});}, 7500);
    //rotate x axis to the back veiw of the box
    setTimeout(function(){TweenLite.to(".box-wrapper", 4, {rotationX: 200});},10500);
    //rotate y to see a little bit of the side view
    setTimeout(function(){TweenLite.to(".box-wrapper", 5, {rotationY: 50});}, 13500);
    //scale down the sides
    setTimeout(function(){TweenLite.to(".box-wrapper div", 2, {scale: 0.3});}, 14000);
    
    //flip the box sides to look like it just fell apart
    setTimeout(function(){
        
        TweenLite.to(".box-wrapper .left, .box-wrapper .right", 2, {rotationY: -55, rotationX: 0});
        TweenLite.to(".box-wrapper .back, .box-wrapper .top", 2, {rotationX: 340, rotationY: 310});           
        TweenLite.to(".box-wrapper .front",2, {rotationX: -20, rotationY: -50});
        TweenLite.to(".box-wrapper .bottom",2, {rotationX: 0, rotationY: 310});
    
    },18000);
    //set the y axis so the user can see the whole box opened
    setTimeout(function(){
        TweenLite.to(".box-wrapper", 5, {rotationY: 320});
    }, 20000);
    
    //spin the sides
    setTimeout(function(){
        TweenLite.to(".box-wrapper div", 3, {rotationZ:900, rotationY: 360});
    },23000);
    
     //lets bring it back
    setTimeout(function(){
        
        TweenLite.to(".box-wrapper .right", 2, {rotationY: 90, rotationX: 0});
        TweenLite.to(".box-wrapper .left", 2, {rotationY: 270, rotationX: 0});
        TweenLite.to(".box-wrapper .back", 2, {rotationX: 0, rotationY: 180});           
        TweenLite.to(".box-wrapper .top", 2, {rotationX: 90, rotationY: 0});           
        TweenLite.to(".box-wrapper .front",2, {rotationX: 0, rotationY: 0});
        TweenLite.to(".box-wrapper .bottom",2, {rotationX: -90, rotationY: 0});
    
    },25000);
    
    //scale down the sides
    setTimeout(function(){
        TweenLite.to(".box-wrapper div", 2, {scale: 1});
        TweenLite.to(".box-wrapper", 2, {rotationX: 180, rotationY: 180});
                         }, 28000);
    
      //scale down the sides
    setTimeout(function(){
        TweenLite.to(".box-wrapper", 3, { rotationY: 3600, ease: Power2.easeInOut});
        
                         }, 31000);  
       
    }
});

