// Milestone 1
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse


Vue.config.devtools = true;
new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    user:'./img/avatar_1.jpg',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
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
                {
                    name: 'Fabio',
                    user: './img/avatar_2.jpg',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    user: './img/avatar_3.jpg',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mirco',
                    user: './img/avatar_4.jpg',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                    
                },
               
            ],

            indexContacts: 0,
            indexMessage: 0,
            userMessage: '',
        
            
        },
        

         methods: {
            moveTo: function (index) {
                this.indexContacts = index;
            },
              

            // Milestone 2
            // Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
            // Click sul contatto mostra la conversazione del contatto cliccato


            printMessage: function(index) 
            {
               const status = this.contacts[this.indexContacts].messages[index].status
                if (status === 'sent') {
                    return 'sentMessage';
                    
                } else {
                    return 'receivedMessage';
                }
            },
            
            getCurrentDateTime: function () {
              
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                
            },
             



            // FUNZIONE VISTA IN CLASSE CON OTTAVIO
            // PER LA STAMPA DEI MESSAGGI


            // Milestone 3
            // Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
            // Risposta dall’interlocutore: ad ogni inserimenßto di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


            sendMessage: function () {
                this.contacts[this.indexContacts].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.userMessage,
                    status: 'sent',
                });
            
                this.userMessage = "";
                
                setTimeout(() => {
                    this.contacts[this.indexContacts].messages.push({
                        date: this.getCurrentDateTime(),
                        text: "perfetto!",
                        status: 'received',
                    });
                }, 1000);
            }
           
        }, 

            // Milestone 4
            // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

        
       
    } 
);


