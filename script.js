const app = new Vue({
    el: "#app",
    data: {
        messaggio: false,
        newMessages: "",
        query: "",
        userDragonball: globalUsersList,
        activeUser: {
            name: 'Vegeta',
            avatar: 'img/Vegeta.png',
            visible: true,
            messages: [
                {
                    date: '13/08/2020 15:30:55',
                    text: 'Ciao Vegeta',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Riesci a trasformarti in super sayan 3?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Sparisci Kakarot',
                    status: 'received'
                }
            ],
        },
    },
    computed: {
        activeUserLastAcces() {
            const msgReceived = this.activeUser.messages.filter((msg) => msg.status === 'received')
            const lastMsg = msgReceived[msgReceived.length - 1].date;
            return this.formattaData(lastMsg)

        }, searchUser: function () {
            return this.userDragonball.filter(element => element.name.includes(this.query))
                .map((element) => {
                    if (this.query == "")
                        return element;

                    return {
                        name: element.name,
                        avatar: element.avatar,
                        visible: element.visible,
                        messages: element.messages
                    }
                });
        }


    },
    methods: {
        onUserClick(clickedUser) {
            this.activeUser = clickedUser;
        }, formattaData(dataString) {
            const dataFormString = moment(dataString, "DD/MM/YYYY HH:mm:ss");
            return dataFormString.format("HH:mm");
        }, addMessages() {


            this.activeUser.messages.push({
                text: this.newMessages,
                status: 'sent',
                date: moment().format("DD/MM/YYYY HH:mm:ss")
            })

            setTimeout(() => {
                if (this.activeUser.name === 'Vegeta') {
                    this.activeUser.messages.push({
                        text: "Muori Karot",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Bulma') {
                    this.activeUser.messages.push({
                        text: "Hai trovato le sfere?",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Chichi') {
                    this.activeUser.messages.push({
                        text: "Goku abbiamo bisogno di soldi torna",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Crilin') {
                    this.activeUser.messages.push({
                        text: "Amico mio Freezer vuole uccidermi",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Freezer') {
                    this.activeUser.messages.push({
                        text: "Sparisci scimmione",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Piccolo') {
                    this.activeUser.messages.push({
                        text: "Goku tuo figlio è una pappamolla",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Beerus') {
                    this.activeUser.messages.push({
                        text: "Ho fame quando arrivi",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Maestro Muten') {
                    this.activeUser.messages.push({
                        text: "Vuoi portarmi qualche giornale sconcio?",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Gohan') {
                    this.activeUser.messages.push({
                        text: "Padre non voglio più allenarmi voglio studiare",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                } if (this.activeUser.name === 'Goten') {
                    this.activeUser.messages.push({
                        text: "La mamma mi ha detto che ha bisogno di soldi",
                        status: 'received',
                        date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    }
                    )
                }

            }, 1000)

            return this.newMessages = "";


        }, messaggioChange: function () {
            this.messaggio = true
        }, messaggioRiChange: function () {
            this.messaggio = false

        }



    }

})