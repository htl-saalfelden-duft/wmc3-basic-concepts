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

const getRandom = () => {
    const min = 1, max = pupils.length
    const index =  Math.floor(Math.random() * (max - min + 1) + min) - 1

    console.log(`${index}: ${pupils[index]}`)

    return pupils[index]
}

export { getRandom }