export const getFourCountries = () => {
    let num = []
    while(num.length < 4) {
        let newNum = randomNumber(250)
        if(!num.includes(newNum)) 
            num = [...num, newNum]
    }
    return num
}

export const randomNumber = (length) => 
    Math.floor(Math.random() * length)