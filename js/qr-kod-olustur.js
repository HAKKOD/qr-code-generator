const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
    });
}
async function sha512KarmaAl(veri) {
    var karma = await sha512(veri);
    return karma;
}


function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function indir(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

async function karekodOlustur(id, kareKodDonusturulecekVeri) {
    document.getElementById(id).innerHTML = "";
    await new QRCode(document.getElementById(id), kareKodDonusturulecekVeri);
    if (window.screen.width < 992) {
        document.getElementById(id).childNodes[0].style = 'display: block;margin-left: auto;margin-right: auto;';
        document.getElementById(id).childNodes[1].style = 'display: block;margin-left: auto;margin-right: auto;';
        document.getElementById(id).childNodes[0].classList.add('img-fluid');
        document.getElementById(id).childNodes[0].classList.add('p-5');
        document.getElementById(id).childNodes[0].classList.add('bg-white');
        document.getElementById(id).childNodes[0].classList.add('shadow-sm');
    } else if (window.screen.width > 992) {
        document.getElementById(id).childNodes[0].style = 'display: block;margin-left: auto;margin-right: auto;';
        document.getElementById(id).childNodes[1].style = 'display: block;margin-left: auto;margin-right: auto;';
        document.getElementById(id).childNodes[1].classList.add('img-fluid');
        document.getElementById(id).childNodes[1].classList.add('p-5');
        document.getElementById(id).childNodes[1].classList.add('bg-white');
        document.getElementById(id).childNodes[1].classList.add('shadow-sm');
        document.getElementById(id).childNodes[1].width = "3000";
        document.getElementById(id).childNodes[1].height = "3000";
    }

    const qrKodBase64 = document.getElementById(id).childNodes[0].toDataURL("image/png").split(';base64,')[1]
    const blob = b64toBlob(qrKodBase64, "image/png");
    const blobUrl = URL.createObjectURL(blob);
    document.getElementById("qr-kodu-yeni-sekmede-acan-link").href = `data:image/png;base64,${qrKodBase64}`;
    document.getElementById("qr-kodu-indiren-buton").href = blobUrl;
    document.getElementById("olusturulan-karekodu-base64-formatinda-indir").href = `data:text/plain;charset=UTF-8,${qrKodBase64}`;
    document.getElementById("olusturulan-karekod-bolumu").hidden = false;
    (async () => {
        document.getElementById("sha512-karmasi").innerText = (await sha512KarmaAl(kareKodDonusturulecekVeri));
    })()
    window.scrollTo(0, 0);
}


function temizle() {
    document.getElementById("qr-koda-donusturulecek-veri").value = "";
    document.getElementById("qr-koda-donusturulecek-veri").focus();
}
document.getElementById("temizleme-butonu").onclick = function () {
    temizle();
}

temizle();

function yeniKarekodOlustur() {
    var qrKodaDosusturulecekVeri = document.getElementById("qr-koda-donusturulecek-veri").value;
    if (qrKodaDosusturulecekVeri == "") return;
    karekodOlustur("olusturulan-karekod", qrKodaDosusturulecekVeri);
}

document.getElementById("buton-qr-kod-olustur").onclick = function () {
    yeniKarekodOlustur();
}

document.getElementById("qr-koda-donusturulecek-veri").value = "https://hakkod.com/";
yeniKarekodOlustur();
document.getElementById("qr-koda-donusturulecek-veri").focus();

(async () => {
    const origin = (await sha512KarmaAl(window.location.origin));
    if (origin != "cd1839476f44a1b93c5d442b671a99bbdd55dcd829c319a479460a5c58925f3cf7d4fa080c65b92de4375687b9616f78e28b431deb820bda2e3c76805fabe264" &&
        origin != "619a382dd62fc1b0ddbde261e88270e20b3837a5e0c848a2dc8769b69bca029d35f7c9526ec345ae1d9dc6968c8d28bb921ac493ef90299ae3d2693f8ea20142") {
        // eval(atob("d2luZG93LmxvY2F0aW9uLnJlcGxhY2UoImh0dHBzOi8vaGFra29kLmNvbS90ZWxpZi1oYWtsYXJpLWlobGFsaS10ZXNwaXRpLyIp"));
        console.log(window.location.origin)
    }
})()



