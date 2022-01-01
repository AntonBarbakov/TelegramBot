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

module.exports.rundomHello = rundomHello;