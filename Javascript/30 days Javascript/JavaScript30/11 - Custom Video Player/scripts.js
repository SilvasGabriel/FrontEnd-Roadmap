/*Acessar os elementos*/
const player = document.querySelector('.player')

const video = player.querySelector('.viewer')

const progress = player.querySelector('.progress')

const progressBarra = player.querySelector('.progress__filled')

const toogle = player.querySelector('.toggle')

const tela = player.querySelector('.toogle')

const skip_Buttons = player.querySelectorAll('[data-skip]')

const slider = player.querySelectorAll('.player__slider')

/*Construir as funções*/

function tooglePlay () {
    
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }

}

function updateButton(){
    const icon = this.paused ? ' ▶' : '⏸'

    toogle.textContent = icon

    //console.log(icon)
}

function skip(){

    //console.log(this.dataset.skip)

    video.currentTime += parseFloat(this.dataset.skip) 
}

function handleRangeUpdate (){
    
    video[this.name] = this.value

    //console.log(this.name)
    //console.log(this.value)

}

function handleProgress (){
    
    const percent = (video.currentTime/ video.duration) * 100

    progressBarra.style.flexBasis = `${percent}%`

}

function scrub (e){

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration

    video.currentTime = scrubTime
    console.log(e)
}


function fullScreen (){

    if(tela.requestFullscreen){
        return video.requestFullscreen()
    }

}


/*Acessar os eventlistners*/
video.addEventListener('click', tooglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate', handleProgress)

tela.addEventListener('click', fullScreen)

toogle.addEventListener('click', tooglePlay)

skip_Buttons.forEach(button => button.addEventListener('click', skip))

slider.forEach(range => range.addEventListener('change', handleRangeUpdate))
slider.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))


let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e))
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)
