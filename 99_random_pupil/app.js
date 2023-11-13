import { getRandom, getRandomPupil } from './pupil.service.js'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#generateRandom').addEventListener('click', buttonClicked)
})

const buttonClicked = () => {
    const timer = ms => new Promise(res => setTimeout(res, ms))

    const randomPupilElement = document.querySelector('#random-pupil')
    randomPupilElement.style.display = 'block'

    const times = getRandom(10, 20)

    const start = async () => {
        for (let i = 0; i <= times; i++) {
            const randomPupil = getRandomPupil()
            randomPupilElement.innerHTML = randomPupil
            
            await timer(100)
        }
    }

    start()
}