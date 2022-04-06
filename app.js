Vue.createApp({
    data() {
        return {
            // Estado de la app
            textInput: '',
            showTextLength: '',
        }
    },
    methods: {
        saludar(nombre) {
            return 'Alo!!!!!' + nombre;
        },
        calculate() {
            this.showTextLength = this.textInput;
        },

    },
    // Las computed properties NO deberían modificar el estado
    computed: {
        setColorNumber() {
            // una función que está calculando un estado a partir de otro
            if (this.showTextLength.length % 2 == 0) {
                return 'blue';
            }

            return 'red';
        },
        getTextLength() {
            return this.showTextLength.length;
        },
        getArrayFromText() {
            // me crea un array con tantos elementos como carácteres tien
            return this.showTextLength.split('')
        }
    }

}).mount('#app')