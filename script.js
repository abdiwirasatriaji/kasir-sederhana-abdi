/ Aplikasi Kasir Sederhana - script.js
receiptTableBody.appendChild(tr);
});
rSubtotal.innerText = formatRupiah(subtotal);
rDiskon.innerText = formatRupiah(diskonRp);
rPajak.innerText = formatRupiah(pajak);
rTotal.innerText = formatRupiah(totalAkhir);
receiptTime.innerText = new Date().toLocaleString();
}




function handlePrint(){
// tampilkan receipt lalu print
document.querySelectorAll('main > *').forEach(el=> el.style.display='none');
receipt.style.display = 'block';
window.print();
// restore
receipt.style.display = 'none';
document.querySelectorAll('main > *').forEach(el=> el.style.display='');
}




function saveToStorage(){
try{ localStorage.setItem(KEY, JSON.stringify(keranjang)); }
catch(e){ console.warn('Gagal simpan ke LocalStorage', e); }
}




function loadFromStorage(){
try{
const raw = localStorage.getItem(KEY);
if(raw){ keranjang = JSON.parse(raw); }
}catch(e){ console.warn('Gagal load data', e); keranjang = []; }
}




function formatRupiah(num){
if(typeof num !== 'number') num = Number(num) || 0;
return num.toLocaleString('id-ID', { style:'currency', currency:'IDR' }).replace(',00','');
}




function escapeHtml(text){
return text.replace(/[&<>"']/g, function(m){
return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
});
}




// expose hapusItem to global so button onclick works
window.hapusItem = hapusItem;