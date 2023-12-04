import { RandomStudent } from './student.service.js'
import students from './data/2324_3ahinf.json' assert { type: 'json' }

const randomStudent = new RandomStudent(students)

const generateRandomButton = document.querySelector('#generateRandom')
const randomStudentDiv = document.querySelector('#random-student')

const buttonRightClicked = (ev) => {
    ev.preventDefault()
    getStudent(true)
}

const buttonClicked = () => {
    getStudent(undefined)
}

const getStudent = (tweak = false) => {
    const timer = ms => new Promise(res => setTimeout(res, ms))

    randomStudentDiv.style.display = 'block'
    randomStudentDiv.classList.add('alert-warning')

    const times = randomStudent.getRandom(10, 20)

    const start = async () => {
        for (let i = 0; i <= times; i++) {
            const rs = randomStudent.getRandomStudent()
            randomStudentDiv.innerHTML = rs
            
            await timer(100)
        }
        if(tweak) {
            randomStudentDiv.innerHTML = randomStudent.getRandomStudent(tweak)
        }
    }

    start()
}

const chooseStudent = () => {
    const student = randomStudentDiv.innerHTML
    randomStudentDiv.classList.remove('alert-warning')
    randomStudentDiv.classList.add('alert-success')
    randomStudent.addChoosen(student)
}

generateRandomButton.addEventListener('click', buttonClicked)
generateRandomButton.addEventListener('contextmenu', buttonRightClicked)

randomStudentDiv.addEventListener('dblclick', chooseStudent)