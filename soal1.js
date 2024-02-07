function akarPangkatDua(x) {
    if (x < 0) {
        throw "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        throw "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

try {
    var angka = parseInt(prompt("Masukkan bilangan genap positif: "));
    var hasil = akarPangkatDua(angka);
    console.log("Akar pangkat dua dari", angka, "adalah:", hasil);
} catch (error) {
    console.error(error);
}