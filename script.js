const app = new Vue({
    el: "#app",
    data: {

        messaggio: false,
        newMessages: "",
        query: "",
        userDragonball: globalUsersList,
        activeUser: "",
    },

    computed: {

        //Funzione che mi restituisce l'ultimo accesso
        activeUserLastAcces() {
            if (this.activeUser === "") {
                return
            } else {
                const msgReceived = this.activeUser.messages.filter((msg) => msg.status === 'received')
                const lastMsg = msgReceived[msgReceived.length - 1].date;
                return this.formattaData(lastMsg)
            }
            //Funzione che mi filtra gli utenti in base al nome
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



        sort(list){
            list.sort((userA, userB)=>{
                const dateA = moment(userA.lastMsgDate, "DD/MM/YYYY HH:mm:ss" );
                const dateB = moment(userB.lastMsgDate, "DD/MM/YYYY HH:mm:ss" );

                if(dateA.isBefore(dateB)){
                    return 1;
                }else if(dateA.isAfter(dateB)){
                    return -1;
                }

                return 0;
            })

            return list
        },
        //questa funzione seleziona l'utente da mostrare
        onUserClick(clickedUser) {
            this.activeUser = clickedUser;

            //Questa funzione formatta la data
        }, formattaData(dataString) {
            const dataFormString = moment(dataString, "DD/MM/YYYY HH:mm:ss");
            return dataFormString.format("HH:mm");

            //Questa funzione permette di inviare un messaggio all'utente scelto 
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

                // Dopo l'invio del messaggio dopo un secondo a seconda dell'utente con cui si parla ci manderà un messaggio personalizzato
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

            // Fa comparire e scomparire l'icona dell'invio

        }, messaggioChange: function () {
            this.messaggio = true
        }, messaggioRiChange: function () {
            this.messaggio = false

        },

        // fa scrollare la chat ogni volta che aggiungendo un messaggio ha bisogno di scollare
        scrollToBottom() {
            this.$nextTick(() => {
                const Htmlelemento = this.$refs.chatContainer;
                Htmlelemento.scrollTop = Htmlelemento.scrollHeight;
            });
        },
        //Cancella il messaggio selezionato
        messaggioCancellato: function (index) {
            console.log(this.activeUser.messages[index])
            this.activeUser.messages[index].messaggioDelet = true
        }

        // fa comparire il pop
        , msgClick(message, event) {
            this.$set(message, "showPop", true);
            event.currentTarget.focus();


        // fa scomparire il pop
        }, msgOut(message) {
            this.$set(message, "showPop", false);

            // Fa in modo che nella sezione dei contatti compaia l'ultimo messaggio 
        },lastMsg(user){
            const messages = user.messages;



            if(messages.lenght === 0){
                return "Nessun Messaggio disponibile"
            }
            const lastMsg = messages[messages.length-1];
            let trimmedMsg =lastMsg.text.slice(0, 30);

            if(lastMsg.text.length > 30){
                trimmedMsg+= "..."
            }

            this.$set(user, "lastMsgDate",lastMsg.date);

            return trimmedMsg
        }







    }, mounted() {
        this.activeUser = this.userDragonball[2]
    }


})