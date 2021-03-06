console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#app',
    data: {
        test: 'Ciao Vue',
        emails: [],
        error: false,
    },
    methods: {
        getEmail(arr) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const currentEmail = res.data.response;
                    arr.push(currentEmail);
                })
                .catch((err) => {
                    this.error = true;
                })
        },
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.getEmail(this.emails)
        }
    }
})