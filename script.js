//Math.trunc - убирает дробную часть
//DOM(DocumentObjectModel - объектная модель документа)
// поиск элемнета по его идентефикатору
const e = document.getElementById('test');
console.log(e);
console.log(e.id);
e.id='hello';
e.style.color='blue';
e.style['font-size']='26px';
e.style.textAlign='center';
e.innerText='hello, batle brother';
e.innerHTML='<p>warhammer</p>';
console.log(e.className);
e.className +=' dog';
e.classList.add('rabbit', 'cow');
e.classList.remove('cat');
console.log(e.classList);
e.classList.replace('cow','astartes');
