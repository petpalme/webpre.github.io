//--some sound for the site  

function nomaderr() {
    mySound = new sound("nomaderr.mp3");
    mySound.play();}

    function sound(src) {

        this.sound = document.createElement("audio");
    
        this.sound.src = src;
    
        this.play = function() {
    
            this.sound.play();
    
        }
    }