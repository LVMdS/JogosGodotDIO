const readline = require('readline');

// Criando uma interface de leitura para obter entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o herói com base na experiência
function classificarHeroi(nome, xp) {
    // Utilizando uma estrutura de decisão para determinar o nível do herói com base na quantidade de experiência
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo a mensagem com o nome do herói e seu nível
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    
    // Fechando a interface de leitura
    rl.close();
}

// Solicitando ao usuário que insira o nome e a quantidade de experiência do herói
rl.question("Digite o nome do herói: ", function(nome) {
    rl.question("Digite a quantidade de experiência do herói: ", function(xp) {
        // Convertendo xp para um número inteiro
        xp = parseInt(xp);
        // Chamando a função para classificar o herói
        classificarHeroi(nome, xp);
    });
});
