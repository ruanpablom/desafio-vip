const leituraOtica = (entrada) => {
  const input = require('fs').readFileSync(entrada, 'utf8')
  const lines = input.split('\n');

  for(let i = 0; i < lines.length; i++){
    const lineArray = lines[i].split(' ')
    if(Number(lineArray) === 0) break
    if(lineArray.length === 1){
      continue
    }
    let alternativaCorreta = undefined
    let qtdDeAlternativasMarcadas = 0
    for(let j = 0; j < 5; j++){
      if(Number(lineArray[j]) <= 127){
        alternativaCorreta = ++qtdDeAlternativasMarcadas === 1 ? j  : '*'
        if(alternativaCorreta === '*') break
      } 
    }
    switch(alternativaCorreta){
      case 0:
        console.log('A')
        break
      case 1:
        console.log('B')
        break
      case 2:
        console.log('C')
        break
      case 3:
        console.log('D')
        break
      case 4:
        console.log('E')
        break
      default:
        console.log('*')
    }
  }
}

leituraOtica(process.argv[2] || '/dev/stdin')
