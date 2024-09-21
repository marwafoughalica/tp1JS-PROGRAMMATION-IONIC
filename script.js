const Name = document.getElementById('depense-name')
const mnt = document.getElementById('depense-mnt')
const reset = document.getElementById('btn-reset')
const add = document.getElementById('btn-add')
const Liste = document.getElementById('depense-list')
const total = document.getElementById('depense-total')
let montantTotal =0


function addEle()
{

const name = Name.value;
const montant = mnt.value;
Liste.innerHTML += `<ion-item>${name} : ${montant} $</ion-item>`
montantTotal+=Number(montant);
total.innerHTML= `${montantTotal}$`


}

 function resetEle()
 {

    Name.value='';
    mnt.value='';
    Liste.innerHTML='';

    total.innerHTML =``;

 }
 reset.addEventListener('click',resetEle)
 add.addEventListener('click',addEle)
