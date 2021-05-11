const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите список заметок',
            inputValue: '',
            notes: ['Заметка1', 'Заметка2', 'Заметка3']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            } 
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)

        }
    },
    computed: {
       doubleCountComputed() {
           return this.notes.length * 2
       } 
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')