const tratarEntrada = (entrada) => {
  const input = require('fs').readFileSync(entrada, 'utf8')
  const lines = input.split('\n');

  let entradaTratada = {}
  let qtdFolhasDeResposta = 1
  for(let i = 0; i < lines.length; i++){
    const lineArray = lines[i].split(' ')
    //se a linha lida tiver o valor de zero finaliza a função
    if(Number(lineArray) === 0) break
    //caso a linha possua somente um valor criar o objeto folha de questões
    if(lineArray.length === 1){
      //define o valor do numero da questão para 1, esse valor é usado para popular as questões da folha de resposta
      var numeroDaquestao = 1
      //inicializa uma folha dentro do objeto
      entradaTratada[`folha${qtdFolhasDeResposta}`] = {}
      qtdFolhasDeResposta++
      continue
    }
    // criação do objeto questao X
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`] = {}
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`].A = lineArray[0]
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`].B = lineArray[1]
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`].C = lineArray[2]
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`].D = lineArray[3]
    entradaTratada[`folha${qtdFolhasDeResposta - 1}`][`questao${numeroDaquestao}`].E = lineArray[4]
    numeroDaquestao++
  }

  return entradaTratada
}

const alternativaFoiMarcada = (alternativa) => {
  return alternativa <= 127
}

const processamentoDaQuestao = (questao) => {
  let alternativaCorreta
  let qtdDeAlternativasMarcadas = 0
  for(const alternativa in questao){
    if(alternativaFoiMarcada(questao[alternativa])){
      alternativaCorreta = ++qtdDeAlternativasMarcadas === 1 ? alternativa : '*'
      if(alternativaCorreta === '*') break
    }
  }
  questao.resposta = alternativaCorreta ? alternativaCorreta : '*'
  console.log(questao.resposta)
}

const processamentoDaFolha = (folha) => {
  for(const questao in folha){
    processamentoDaQuestao(folha[questao])
  }
}

const main = (entrada) => {
  const folhas = tratarEntrada(entrada)
  for(const folha in folhas){
    processamentoDaFolha(folhas[folha])
  }
}

main(process.argv[2] || '/dev/stdin')