function calcularNivel(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível do jogador com base no saldo de vitórias
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando o saldo de vitórias e o nível do jogador
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const resultado = calcularNivel(75, 20);
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
