export default function () {


    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/Beatrizfernan/musica/blob/main/Teto%20WIU%20Matu%C3%AA%20-%20Flow%20Espacial%20%F0%9F%91%BD.mp3?raw=true")
    bgAudio.loop = true



    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }



    return {
        pressButton,
        timeEnd,
        bgAudio
    }


}

