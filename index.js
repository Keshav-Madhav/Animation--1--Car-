let isAnimationRunning = true;
let carImage = document.querySelector('.car img');
let carElement = document.querySelector('.car-over ');
var music= new Audio("./assets/long-drive.mp3")
music.loop=true;

music.play();
let volumeSlider=document.querySelector('#volume-slider');
let muteButton =document.querySelector('#mute-button');
let isMuted=false;

volumeSlider.addEventListener('input',function(){
    music.volume=this.value;
})

muteButton.addEventListener('click',function(){
    if(isMuted){
        music.volume=volumeSlider.value;
        muteButton.innerText='Mute';
        isMuted=false;
    }
    else{
        music.volume=0;
        muteButton.innerText='Unmute';
        isMuted=true;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (isAnimationRunning) {
            document.querySelector('.surface').style.animationPlayState = 'paused';
            document.querySelector('.surface.num2').style.animationPlayState = 'paused';
            document.querySelector('.car-over').style.animationPlayState = 'paused';
            document.querySelector('.car').style.animationPlayState = 'paused';
            music.pause();
            isAnimationRunning = false;
        } else {
            document.querySelector('.surface').style.animationPlayState = 'running';
            document.querySelector('.surface.num2').style.animationPlayState = 'running';
            document.querySelector('.car-over').style.animationPlayState = 'running';
            document.querySelector('.car').style.animationPlayState = 'running';
            music.play();
            isAnimationRunning = true;
        }
    } else if (event.code === 'KeyU') {
        if (carImage.getAttribute('src') === './assets/Img_06.png') {
            carElement.style.left = '24%';
            carImage.setAttribute('src', './assets/Img_05.png');
        } else {
            carElement.style.left = '24.27%';
            carImage.setAttribute('src', './assets/Img_06.png');
        }
    }
});
