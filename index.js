const app = Vue.createApp({
    data() {
        return {
            name: null,
            message: null,
            messageLow: null,
            messgaeLUpper: null
        }
    },
    methods: {
        stringManipulation(name) {
            if (!name)
               name = "No Name"
                        
            this.message = name;
            this.messageLow = name.toLowerCase();
            this.messageUpper = name.toUpperCase();
        }
    }
})