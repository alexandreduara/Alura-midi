

function tocaSom (idElementoAudio){
   const elemento = document.querySelector(idElementoAudio).play();

   if (elemento === null){
        alert('elemento não encontrado')
   }

   if (elemento != null){
        if (elemento.localName === ('audio'){
            elemento.play();
        }
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const audio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom (audio);
    }

    tecla.onkeydown = function (evento.code){

        console.l

        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}


// while (contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador]
//     const instrumento = tecla.classList[1];

//     // template string
//     const audio = `#som_${instrumento}`;

//     tecla.onclick = function () {
//         tocaSom (audio);
//     }
//     contador = contador + 1;
// }
