const app = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: [],
    },

    mounted() {

        for (i = 0; i < 10; i++) {
            axios
            .get(this.url)
            .then((risultato) => {
                this.emails.push(risultato.data.response)
            });
        }
        console.log(this.emails);

    },

});