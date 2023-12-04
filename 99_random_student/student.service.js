export class RandomStudent {
    constructor(students) {
        this.students = students
    }
    choosen = []

    getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
    
    getRandomStudent = (tweak = false) => {
        const must = this.notChoosen(this.students.filter(s => s.must))

        if(tweak && must.length > 0) {
            const index = this.getRandom(0, must.length)
            const student = must[index].name
            return student
        }

        const prefered = this.notChoosen(this.students.filter(s => s.prefer))

        if(tweak && prefered.length > 0) {
            const index = this.getRandom(0, prefered.length)
            const student = prefered[index].name
            return student
        }

        const all = this.notChoosen(this.students)

        if(all.length > 0) {
            const index = this.getRandom(0, all.length)
            const student = all[index].name
            return student  
        } else {
            return 'None left!'
        }        
    }

    notChoosen(students) {
        return students.filter(s => !this.choosen.includes(s.name))
    }

    addChoosen(student) {
        this.choosen.push(student)
        console.log(`Student ${student} choosen!`)
    }
}
