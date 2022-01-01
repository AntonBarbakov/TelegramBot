const Hello = [
    `Здоров `,
    `Cколько лет, сколько зим! Здарова пидрило!`,
    `Привет пидр`,
    `Hello there!`,
    `Какие люди!`,
    `Cколько лет, сколько зим! Здарова пидрило!`
]


function rundomHello() {
    const index = Math.floor(Math.random() * Hello.length)
    return Hello[index]
}

function isHere (name, arr) {
    if(arr.indexOf(name) === -1){
        console.log("push")
        arr.push(name)
    }
}

module.exports.rundomHello = rundomHello;
module.exports.isHere = isHere;