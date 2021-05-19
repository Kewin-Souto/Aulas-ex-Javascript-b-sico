let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)//nesse caso o "1" está aqui porque ele veio logo depois do .sort() organizar os elementos.
console.log(num)
console.log(`Nosso vetor é o ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
