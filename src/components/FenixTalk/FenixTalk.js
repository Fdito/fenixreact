export default function FenixTalk(speach) {
/*     var voicechoosed = localStorage.getItem('voice')
    let rate = localStorage.getItem('rate')
    let volume = localStorage.getItem('volume')
    let pitch = localStorage.getItem('pitch') */
    let voices = window.speechSynthesis.getVoices()
    var message = new SpeechSynthesisUtterance()
    message.text = speach
    message.volume = 1
    message.rate = 1
    message.utter = 1
    message.pitch = 1
    message.voice = voices[1]
    speechSynthesis.speak(message)
    console.log('tes')
}
