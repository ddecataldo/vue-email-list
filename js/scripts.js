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
        mailRandom: []
    },
    methods: {
        generateMailRandom(){

            this.mailRandom = [];

            for(i = 0; i < 10; i++){
                axios.get(this.urlApi).then((ajaxResponse) =>  {
                    const mailGenerate = ajaxResponse.data;
                    this.mailRandom.push(mailGenerate.response);
                });
            }

        }
    }
});