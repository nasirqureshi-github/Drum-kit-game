

    // paly differnt sound on each drum

    var numberOfdrum=document.querySelectorAll(".drum").length;
    for(var i=0;i<numberOfdrum; i++)
    {
       document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        //this refer to the given obj(drum which include alll button)
       var buttoninnerHTML=this.innerHTML 
       switch (buttoninnerHTML){
 case "w":
          var audio=new Audio("sounds/crash.mp3")
          audio.play();
          break;
  case "a":
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
  case "s":
                var audio=new Audio("sounds/snare.mp3")
                audio.play();
                break;
    case "j":
                    var audio=new Audio("sounds/tom-1.mp3")
                    audio.play();
                    break;
   case "d":
                        var audio=new Audio("sounds/tom-2.mp3")
                        audio.play();
                        break;
    case "k":
                 var audio=new Audio("sounds/tom-3.mp3")
                   audio.play();
                      break;                 
     case "l":
                      var audio=new Audio("sounds/tom-4.mp3")
                                audio.play();
                                break;  
        default : 
        console.log(buttoninnerHTML) ;
    }   
    
    });
    }


   


   // makesound by pressing keys
  // this code dectect button pressed
   var numberOfdrum=document.querySelectorAll(".drum").length;
   for(var i=0;i<numberOfdrum; i++)
   {
      document.querySelectorAll(".drum")[i].addEventListener("click",function() {
       //this refer to the given obj(drum which include alll button)
      var buttoninnerHTML=this.innerHTML 
       makeSound(buttoninnerHTML);
       
       //call function to add animation on button
       addAnimation(buttoninnerHTML);
      });
    }
// this code detecting keyboard press
    document.addEventListener("keypress" ,function(event){
      makeSound(event.key);
      
      // //call function addAnimation to add animation on keypressed
      addAnimation(event.key);
     });

function makeSound(key)
{
  switch (key){
    case "w":
             var audio=new Audio("sounds/crash.mp3")
             audio.play();
             break;
     case "a":
               var audio=new Audio("sounds/kick-bass.mp3")
               audio.play();
               break;
     case "s":
                   var audio=new Audio("sounds/snare.mp3")
                   audio.play();
                   break;
       case "j":
                       var audio=new Audio("sounds/tom-1.mp3")
                       audio.play();
                       break;
      case "d":
                           var audio=new Audio("sounds/tom-2.mp3")
                           audio.play();
                           break;
       case "k":
                    var audio=new Audio("sounds/tom-3.mp3")
                      audio.play();
                         break;                 
        case "l":
                         var audio=new Audio("sounds/tom-4.mp3")
                                   audio.play();
                                   break;  
           default : 
           console.log(buttoninnerHTML) ;
}
}




  // Adding animation to website

  function addAnimation(currentKey)
  {
   var activeButton=  document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   // setimeout is a method that take parameters function and millisecond
   //function is passed that is executed and millisecod how many time excuted by the setTimeout function
    setTimeout(
      function(){
      activeButton.classList.remove("pressed");
    },
    100
    );
  }
  

