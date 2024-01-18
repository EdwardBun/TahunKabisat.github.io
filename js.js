// let tahun = Number(prompt("Masukkan tahunnya"))

//kabisat dengan do while
do {
if (tahun % 4 != 0){
        hasil = "bukan tahun kabisat"
}else if (tahun % 100 != 0){
        hasil = "tahun kabisat"
}else if (tahun % 400 == 0){
        hasil = "tahun kabisat"
}else {
        hasil = "bukan tahun kabisat"
    }   
    console.log(tahun + hasil)
    tahun += 4 
} while ( tahun <= 2024)

 //kabisat dengan for
for(let tahun = Number(prompt("Masukkan tahunnya")); tahun <= 2024; tahun+=4){
    if (tahun % 4 != 0){
        hasil = "bukan tahun kabisat"
}else if (tahun % 100 != 0){
        hasil = "tahun kabisat"
}else if (tahun % 400 == 0){
        hasil = "tahun kabisat"
}else {
        hasil = "bukan tahun kabisat"
    } 
    console.log(tahun + hasil)
}

//kabisat dengan while
while (tahun<= 2024){ 
    if (tahun % 4 != 0){
        hasil = "bukan tahun kabisat"
}else if (tahun % 100 != 0){
        hasil = "tahun kabisat"
}else if (tahun % 400 == 0){
        hasil = "tahun kabisat"
}else {
        hasil = "bukan tahun kabisat"
    } 
    console.log(tahun + hasil)
    tahun +=4
}