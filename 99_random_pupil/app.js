import { getRandom } from './pupil.service.js'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#generateRandom').addEventListener('click', buttonClicked)
})

const buttonClicked = () => {
    const randomPupil = getRandom()

    const randomPupilElement = document.querySelector('#random-pupil')
    randomPupilElement.style.display = 'block'
    randomPupilElement.innerHTML = randomPupil
}