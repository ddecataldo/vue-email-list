/* 
    Descrizione:
    Attraverso l’apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

Vue.config.devtools = true;

new Vue({
    el: "#main",
    data: {
        urlApi: "https://flynn.boolean.careers/exercises/api/random/mail",
        mailRandom: [],
        show: false
    },
    methods: {
        generateMailRandom(){

            this.mailRandom = [];

            for(i = 0; i < 10; i++){
                axios.get(this.urlApi).then((ajaxResponse) =>  {
                    const mailGenerate = ajaxResponse.data;
                    this.mailRandom.push(mailGenerate.response);

                    /* Dopo aver pushato tutti gli elementi nell'array 'mailRandom' effettuo un controllo 
                       SE la lunghezza dell'array è >=10 "accedo" alla condizione.
                       Qui viene impostato il valore booleano true solo quando l'array è formato da 10 elementi
                       Grazie al valore booleano nell'html andiamo a mostrare la lista delle mail soltanto quando sono 10.
                       Quindi le mail saranno mostrare soltanto quando l'array è arrivato a 10 elementi
                    */

                    if(this.mailRandom.length >= 10){
                        this.show = true;
                        console.log("Mostra")
                    }

                });
            }

        }
    }
});