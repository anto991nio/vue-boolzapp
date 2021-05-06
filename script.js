const app = new Vue({
    el: "#app",
    data: {
        
        messaggio: false,
        newMessages: "",
        query: "",
        userDragonball: globalUsersList,
        activeUser: {

        },
    }, mounted() {
        this.activeUser = this.userDragonball[0]
    },

    computed: {
        activeUserLastAcces() {
            const msgReceived = this.activeUser.messages.filter((msg) => msg.status === 'received')
            const lastMsg = msgReceived[msgReceived.length - 1].date;
            return this.formattaData(lastMsg)

        }, searchUser: function () {
            return this.userDragonball.filter(element => element.name.toLowerCase().startsWith(this.query.toLowerCase()))
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

            if (this.newMessages === "") {
                return

            } else {
                this.activeUser.messages.push({
                    text: this.newMessages,
                    status: 'sent',
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    showPop: false,
                    messaggioDelet: false,


                })
                this.scrollToBottom();

                setTimeout(() => {
                    if (this.activeUser.name === 'Vegeta') {
                        this.activeUser.messages.push({
                            text: "Muori Karot",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,

                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Bulma') {
                        this.activeUser.messages.push({
                            text: "Hai trovato le sfere?",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,

                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Chichi') {
                        this.activeUser.messages.push({
                            text: "Goku abbiamo bisogno di soldi torna",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Crilin') {
                        this.activeUser.messages.push({
                            text: "Amico mio Freezer vuole uccidermi",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Freezer') {
                        this.activeUser.messages.push({
                            text: "Sparisci scimmione",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Piccolo') {
                        this.activeUser.messages.push({
                            text: "Goku tuo figlio è una pappamolla",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Beerus') {
                        this.activeUser.messages.push({
                            text: "Ho fame quando arrivi",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Maestro Muten') {
                        this.activeUser.messages.push({
                            text: "Vuoi portarmi qualche giornale sconcio?",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Gohan') {
                        this.activeUser.messages.push({
                            text: "Padre non voglio più allenarmi voglio studiare",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    } if (this.activeUser.name === 'Goten') {
                        this.activeUser.messages.push({
                            text: "La mamma mi ha detto che ha bisogno di soldi",
                            status: 'received',
                            date: moment().format("DD/MM/YYYY HH:mm:ss"),
                            messaggioDelet: false,
                            showPop: false
                        }
                        )
                    }
                    this.scrollToBottom();
                }, 1000)

                return this.newMessages = "";
            }

        }, messaggioChange: function () {
            this.messaggio = true
        }, messaggioRiChange: function () {
            this.messaggio = false

        },
        scrollToBottom() {
            this.$nextTick(() => {
                const Htmlelemento = this.$refs.chatContainer;
                Htmlelemento.scrollTop = Htmlelemento.scrollHeight;
            });
        },

        messaggioCancellato: function (index) {
            console.log(this.activeUser.messages[index])
            this.activeUser.messages[index].messaggioDelet = true
        }


    },
    

})