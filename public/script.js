(function(){
var st={},tt;
function toast(m){var t=document.getElementById('toast');t.textContent=m;t.className='on';clearTimeout(tt);tt=setTimeout(function(){t.className='';},2200);}
function render(){
var n=0,k;for(k in st){if(st[k]){n++;}}
document.getElementById('cnt').textContent=n;
var b=document.querySelectorAll('a.add');
for(var i=0;i<b.length;i++){b[i].textContent=st[b[i].getAttribute('data-p')]?'Ajouté \u2713':'Ajouter';}
}
var ab=document.querySelectorAll('a.add');
for(var i=0;i<ab.length;i++){ab[i].addEventListener('click',function(e){
e.preventDefault();var p=this.getAttribute('data-p');st[p]=!st[p];render();toast(st[p]?'Ajouté au panier':'Retiré du panier');});}
var f='all',ph=document.getElementById('ph1'),q=document.getElementById('q1');
function filt(){
var its=ph.querySelectorAll('.item'),v=q.value.toLowerCase();
for(var i=0;i<its.length;i++){
var a=its[i].querySelector('.add');if(!a){continue;}
var ok=(f==='all'||a.getAttribute('data-p')===f)&&its[i].textContent.toLowerCase().indexOf(v)>-1;
its[i].style.display=ok?'':'none';}}
var ch=ph.querySelectorAll('.chip');
for(var j=0;j<ch.length;j++){ch[j].addEventListener('click',function(){
for(var m=0;m<ch.length;m++){ch[m].className='chip';}
this.className='chip on';f=this.getAttribute('data-f');filt();});}
q.addEventListener('input',filt);
var pb=document.querySelectorAll('[data-pay]');
for(var z=0;z<pb.length;z++){pb[z].addEventListener('click',function(){toast('Maquette : le paiement n\u2019est pas encore activ\u00e9');});}
})();
