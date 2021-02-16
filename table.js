let idname = prompt("Digite seu Nome")
let lastname = prompt("Digite seu Sobrenome")
let age = prompt("Digite a sua Idade")
let nacionality = prompt("Digite a sua Nacionalidade")
let favoritecolor = prompt("Digite a sua Cor Favorita")

console.log(`Fala, ${idname}`);
console.log(`Nome e Sobrenome, ${idname} ${lastname} `);
console.log(`Idade, ${age}`);
console.log(`Nacionalidade, ${nacionality}`);
console.log(`Cor Favorita, ${favoritecolor}`);

console.table({
    idname: [idname],
    lastname: [lastname],
    age: [age],
    nacionality: [nacionality],
    favoritecolor: [favoritecolor]
})


