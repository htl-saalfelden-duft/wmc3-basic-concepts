const pupils = [
    "Aberger Jonas",
    "Eder Jonas",
    "Ellmauthaler Philip",
    "Ellmer Johannes",
    "Faritsch Dominik",
    "Hafner Florian",
    "Haslinger Fabian",
    "Hechenberger Tim",
    "Hirzenberger Tobias",
    "Isma Aldin",
    "Julardzija Amar",
    "König Eric",
    "Krishan Raj",
    "Magos Christos",
    "Mikanovic Marko",
    "Pichler Leon",
    "Redzic Ernest",
    "Winkler Timo"
]   

const getRandom = (min=1, max = 20) => {
    const rand =  Math.floor(Math.random() * (max - min + 1) + min) - 1
    return rand
}

const getRandomPupil = () => {
    const index = getRandom(1, pupils.length)

    console.log(`${index}: ${pupils[index]}`)

    return pupils[index]
}

export { getRandom, getRandomPupil }