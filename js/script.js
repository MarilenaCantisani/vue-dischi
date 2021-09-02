console.log("Vue ok", Vue);
Vue.config.devtools = true;

//// Initialization of Vue 
const app = new Vue({
    el: "#root",
    data: {
        cards: [],


    },
    methods: {


    },
    computed: {

    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            this.cards = (res.data.response);
        });
    }
})