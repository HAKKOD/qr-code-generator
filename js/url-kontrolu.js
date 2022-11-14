function tersCevir(veri) {
    return veri.split("").reverse().join("");
}
if (tersCevir(window.location.pathname).substring(0, 10) == "lmth.xedni") {
    window.location.replace(window.location.pathname.substring(0, window.location.pathname.length - 10));
}
if (window.location.pathname.substring(0, 4) == "/pc/") { window.location.replace(window.location.pathname.substring(3)); }
else if (window.location.pathname.substring(0, 7) == "/mobil/") { window.location.replace(window.location.pathname.substring(6)); }