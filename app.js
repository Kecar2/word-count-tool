Vue.createApp({
    data() {
        return {
            // Estado de la app
            textInput: '',
            showTextLength: '',
        }
    },
    methods: {
        calculate() {

        this.showTextLength = this.textInput;

        },
        setColorNumber() {
            if (this.showTextLength.length % 2 == 0) {
                return 'blue';
            }
            return 'red';
        }
    }
}).mount('#app')
