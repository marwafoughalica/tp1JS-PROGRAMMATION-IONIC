// const addBtn = document.getElementById('btn-add');
// const restBtn = document.getElementById('btn-reset');
// const depenseName = document.getElementById('depense-name');
// const depenseMnt = document.getElementById('depense-mnt');
// const depenseList = document.getElementById('depense-list');
// const depenseMntTotal = document.getElementById('depense-total');
// let mntTotal = 0.0;
// let depeneses = [];


// const addToList = () => {
//     if (depenseList) {
//         depenseList.innerHTML = '';
//         depeneses.map((elm, index) => {
//             depenseList.innerHTML += `<ion-item>${elm.name} ${elm.montant} $<ion-item>`;
//         });
//     }
// }

// function addNewDepense() {
//     if (depenseName && depenseMnt && depenseMntTotal) {
//         const name = depenseName.value;
//         const mnt = depenseMnt.value;
//         if (isNaN(mnt)) {
//             console.log("error on montant");
//             return;
//         }
//         depeneses.push({
//             name, montant: Number(mnt)
//         });
//         mntTotal += Number(mnt);
//         depenseMntTotal.innerHTML = `${mntTotal} $`;  // === mntTotal + " $"  concat
//         addToList();
//         depenseName.value = '';
//         depenseMnt.value = '';
//     }

// }

// const reset = () => {
//     if (depenseName && depenseMnt && depenseMntTotal) {
//         depenseName.value = '';
//         depenseMnt.value = '';
//         depenseMntTotal.innerHTML = '';
//         depenseList.innerHTML = '';
//         depeneses = [];
//     }
// }

// // register events

// addBtn?.addEventListener('click', addNewDepense) // => addNewDepense()
// restBtn?.addEventListener('click', reset)