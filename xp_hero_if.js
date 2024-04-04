// Importar módulo 'readline' para ler entradas do terminal
const readline = require('readline');

// Configurar interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar nome do herói
rl.question('Digite o nome do herói: ', (nome) => {
  // Solicitar XP do herói
  rl.question('Digite a quantidade de experiência (XP) do herói: ', (xp) => {
    // Determinar o nível do herói com base na XP
    let nivel;
    xp = parseInt(xp);
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

    // Exibir o resultado
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    // Fechar interface de leitura
    rl.close();
  });
});