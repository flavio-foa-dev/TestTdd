const mediaa = [80, 70, 50, 100, 100]

function media(notas){
  media = 0
  notas.map((notas)=> media += notas)
  return media/ mediaa.length
}

console.log(media(mediaa))