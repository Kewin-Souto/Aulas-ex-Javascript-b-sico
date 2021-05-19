function parimp(n) {
    if (n%2 == 0 ){
        return 'par'
    }else{
        return 'impar'
    }
}
// let res = parimp(10) Fiz inicialmente desta maneira porém abaixo, é mais simples e curto com o mesmo resultado.
// console.log(`seu numero é ${res}`)

console.group(parimp(20))