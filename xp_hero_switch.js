// Importação do módulo readline, que é usado para criar interfaces de leitura de entrada.
const readline = require('readline');

//createInterface é usado para criar uma interface de leitura
//process.stdin representa a entrada padrão do processo (normalmente o teclado).
//process.stdout representa a saída padrão do processo (normalmente o terminal).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//rl.question, o usuário é solicitado a digitar o nome do herói e o xp em seguida
rl.question('Digite o nome do herói: ', (hero) => {
    rl.question('Digite a quantidade de experiência do herói: ', (xp) => {
        xp = parseInt(xp);

        let nivel;
        switch(true) {
            case xp < 1000:
                nivel = "Ferro";
                break;
            case xp >= 1001 && xp <= 2000:
                nivel = "Bronze";
                break;
            case xp >= 2001 && xp <= 5000:
                nivel = "Prata";
                break;
            case xp >= 5001 && xp <= 7000:
                nivel = "Ouro";
                break;
            case xp >= 7001 && xp <= 8000:
                nivel = "Platina";
                break;
            case xp >= 8001 && xp <= 9000:
                nivel = "Ascendente";
                break;
            case xp >= 9001 && xp <= 10000:
                nivel = "Imortal";
                break;
            default:
                nivel = "Radiante";
        }

        //Exibição do resultado
        console.log(`O herói de nome ${hero} está no nível ${nivel}!`);

        //rl.close() é chamado para fechar a interface readline, encerrando o programa de forma adequada
        rl.close();
    });
});
