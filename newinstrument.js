var numberofdrumsnew = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberofdrumsnew;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function()
    {
        var vikbutton = this.innerHTML;
        makesound(vikbutton);
        buttonanimation(vikbutton);
    }
);
}
document.addEventListener("keypress",
function(event)
{
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key)
    {
        switch(key)
           {
            case "w":
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
            break;
            
            case "a":
                    var audio = new Audio("tom-2.mp3");
                    audio.play();
            break;
        
            case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        
            case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        
            case "j":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        
            case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        
            case "l":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
            
            default:
            console.log(key);
           }            
    }    
    function buttonanimation(currentkey)
    {
        var currentbutton = document.querySelector("."+currentkey);
    
        currentbutton.classList.add("pressed");
    
        setTimeout(
            function()
            {
                currentbutton.classList.remove("pressed");
            },50
            );
    
    }
    