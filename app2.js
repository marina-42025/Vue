Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Vladilen',
            lastName: 'Minin',
            age: 27
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
        computed:  {
            evenItems() {
                return this.items.filter(i =>i % 2 === 0)
            }
         }
    }

).mount('#app2')