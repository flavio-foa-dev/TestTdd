const mediaa = [80, 70, 50, 100, 100, 10]

function media(notas){
  media = 0
  notas.map((notas)=> media += notas)
  return media/ mediaa.length
}

const result = media(mediaa)
console.log(result.toFixed(2))


if ( result < 70 ) {
  console.log("Sua falta de Dedicação o Reprovou")
}else[
  console.log(" Seus esforços foram Recompensados Aprovado ")
]