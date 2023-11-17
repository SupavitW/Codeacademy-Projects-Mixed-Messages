
// function to generate 4-7 characters
const genLetters = () => {
    const length = Math.floor(Math.random() * 4) + 4; // Random length between 4 and 7
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};

// function to generate 2-3 numbers
const genNumbers = () => {
    const length = Math.floor(Math.random() * 2) + 2; // Random length between 2 and 3
    const numberArr = Array.from({length: 10}, (x, i) => i);
    let result = '';
    for (let i = 0; i < length; i++) {
        result += numberArr[Math.floor(Math.random() * 10)];
    }
    return result;
};

// function to shuffle string
const shuffleString = (inputString) => {
    const array = inputString.split('');
    for (let i = array.length - 1; i > 0; i--) {  // Fisher-Yates Shuffle
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
};

// geneate password by using every function
const genPassword = () => {
    const letters = genLetters();
    const numbers = genNumbers();
    const charArr = [letters, numbers];
    const toShuffle = charArr.join('');
    const Password = shuffleString(toShuffle);
    return Password;
}

console.log(genPassword());



