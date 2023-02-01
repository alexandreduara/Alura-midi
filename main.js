

function tocaSom (idElementoAudio){
   const elemento = document.querySelector(idElementoAudio).play();

   if (elemento && elemento.localName === ('audio')){
        elemento.play();
   }

   else{
    alert('elemento não encontrado ou seletor inválido')
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

    tecla.onkeydown = function (evento){

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
