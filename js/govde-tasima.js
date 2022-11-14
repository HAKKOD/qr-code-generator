function rastgeleVeriUret(e) {
    try {
        for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = t.length, o = 0; o < e; o++)n += t.charAt(Math.floor(Math.random() * a)); return n
    } catch (error) {

    }
}
const konumlar = [], konumSayisi = 100;
for (let e = 0; e < 100; e++) {
    const e = `hakkod-${rastgeleVeriUret(20)}`; konumlar.push(e); const n = document.createElement("span"); n.id = e, document.getElementsByTagName("body")[0].appendChild(n)
}
document.getElementById("qr-koda-donusturulecek-veri").onfocus = function () {
    govdeTasimaCalissinmi = !1
},
    document.getElementById("qr-koda-donusturulecek-veri").onblur = function () {
        govdeTasimaCalissinmi = !0
    };
let govdeTasimaCalissinmi = !0, anaGovde = document.getElementById("hakkod-0"); anaGovde.id = `hakkod-${rastgeleVeriUret(20)}`,
    setInterval((() => {
        try {
            const e = konumlar[parseInt(100 * Math.random())]; if (govdeTasimaCalissinmi) {
                for (let e = 0; e < konumlar.length; e++)null == document.getElementById(konumlar[e]) && document.write("&nbsp;"); document.getElementById(`${e}`).appendChild(anaGovde)
            }    
        } catch (error) {
            
        }
    }), 1e3);