let name1 = prompt('Digite o nome do seu personagem: ')
let power1 = parseInt(prompt('Digite o poder de ataque do seu personagem: '))
let name2 = prompt('Digite o nome de outro personagem: ')
let healthPoints2 = parseInt(prompt('Digite a vida do outro personagem: '))
let defense2 = parseInt(prompt('Digite a defesa do outro personagem: '))
let shield2 = prompt('O outro personagem possui escudo?')

if (shield2 == 'não' && power1 > defense2) {
  alert(`${name1} atacou. ${name2} sofreu ${power1 - defense2} de dano e não possui escudo. Sua vida agora é ${healthPoints2 - (power1 - defense2)}`)
} else if (shield2 == 'sim' && power1 > defense2) {
  alert(`${name1} atacou. ${name2} sofreu ${(power1 - defense2)/2} de dano por possuir escudo. Sua vida agora é ${healthPoints2 - ((power1 - defense2)/2)}.`)
} else {
  alert(`${name1} atacou, mas não afetou ${name2}. Nenhum dano causado!`)
}
