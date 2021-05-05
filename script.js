const app = new Vue({
    el: "#app",
    data: {
        newMessages:"",
        userDragonball : globalUsersList,
        activeUser:{
            name: 'Vegeta',
            avatar: 'img/Vegeta.png',
            visible: true,
            messages: [
                {
                    date: '13/08/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
    },
    computed:{
        activeUserLastAcces(){
            const msgReceived = this.activeUser.messages.filter((msg)=> msg.status === 'received')
            const lastMsg = msgReceived[msgReceived.length-1].date;
            return this.formattaData(lastMsg)

        }
    },
    methods:{
        onUserClick(clickedUser){
            this.activeUser = clickedUser;
        },formattaData(dataString){
            const dataFormString = moment(dataString, "DD/MM/YYYY HH:mm:ss" );
            return dataFormString.format("HH:mm");
        },addMessages() {
            
			this.activeUser.messages.push({
				text: this.newMessages, 
				status: 'sent',
                date: moment().format("DD/MM/YYYY HH:mm:ss")

                
			})
            return this.newMessages = "" ;
            
		}


    

        
    }

})