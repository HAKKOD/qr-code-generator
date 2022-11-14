const b64toBlob=(e,t="",n=512)=>{const o=atob(e),d=[];for(let e=0;e<o.length;e+=n){const t=o.slice(e,e+n),l=new Array(t.length);for(let e=0;e<t.length;e++)l[e]=t.charCodeAt(e);const a=new Uint8Array(l);d.push(a)}return new Blob(d,{type:t})};function sha512(e){return crypto.subtle.digest("SHA-512",new TextEncoder("utf-8").encode(e)).then((e=>Array.prototype.map.call(new Uint8Array(e),(e=>("00"+e.toString(16)).slice(-2))).join("")))}async function sha512KarmaAl(e){return await sha512(e)}function bekle(e){return new Promise((t=>setTimeout(t,e)))}function indir(e){const t=document.createElement("a");t.href=e,t.download=e.split("/").pop(),document.body.appendChild(t),t.click(),document.body.removeChild(t)}async function karekodOlustur(e,t){for(document.getElementById(e).innerHTML="",await new QRCode(document.getElementById(e),t),document.getElementById(e).childNodes[0].style="display: block;margin-left: auto;margin-right: auto;",document.getElementById(e).childNodes[1].style="display: block;margin-left: auto;margin-right: auto;",document.getElementById(e).childNodes[1].classList.add("img-fluid"),document.getElementById(e).childNodes[1].classList.add("p-5"),document.getElementById(e).childNodes[1].classList.add("bg-white"),document.getElementById(e).childNodes[1].classList.add("shadow-sm"),document.getElementById(e).childNodes[1].width="3000",document.getElementById(e).childNodes[1].height="3000";;){const e=document.getElementById("olusturulan-karekod").lastChild.src;if(""!=e){const n=e.split("data:image/png;base64,")[1],o=b64toBlob(n,"image/png"),d=URL.createObjectURL(o);document.getElementById("qr-kodu-yeni-sekmede-acan-link").href=d,document.getElementById("qr-kodu-indiren-buton").href=d,document.getElementById("olusturulan-karekodu-base64-formatinda-indir").href=`data:text/plain;charset=UTF-8,${n}`,document.getElementById("olusturulan-karekod-bolumu").hidden=!1,(async()=>{document.getElementById("sha512-karmasi").innerText=await sha512KarmaAl(t)})(),window.scrollTo(0,0);break}await bekle(100)}}function temizle(){document.getElementById("qr-koda-donusturulecek-veri").value="",document.getElementById("qr-koda-donusturulecek-veri").focus()}function yeniKarekodOlustur(){var e=document.getElementById("qr-koda-donusturulecek-veri").value;""!=e&&karekodOlustur("olusturulan-karekod",e)}document.getElementById("temizleme-butonu").onclick=function(){temizle()},temizle(),document.getElementById("buton-qr-kod-olustur").onclick=function(){yeniKarekodOlustur()},document.getElementById("qr-koda-donusturulecek-veri").value="https://hakkod.com/",yeniKarekodOlustur(),document.getElementById("qr-koda-donusturulecek-veri").focus(),(async()=>{await sha512KarmaAl(window.location.hostname)})();