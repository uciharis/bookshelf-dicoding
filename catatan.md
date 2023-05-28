instruksi Submission dicoding :

1. simpan buku lewat route dg method POST, url "/books", dan
body request harus :

{
    "id" : string (pake fungsi)
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean,
    "insertedAt" : 
}

dengan contoh struktur :

{
    "id": "Qbax5Oy7L8WKf74l" -> diolah di server, pake nanoid, "npm install nanoid@3"

    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "finished": false -> jika pageCount === readPage
    "reading": false,
    "insertedAt": "2021-03-04T09:11:44.598Z" -> menampung tanggal dimasukkan buku. pake new Date().toISOString(),
    
    "updatedAt": "2021-03-04T09:11:44.598Z"
}

detail selengkapnya : https://www.dicoding.com/academies/261/tutorials/14967/submission-guidance