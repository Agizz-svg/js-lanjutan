function hitung_kata()
{
    var pesan = document.FormKu.pesan.value
    banyak_kata = pesan.split(" ")
    document.FormKu.jumlah.value = banyak_kata.length
}