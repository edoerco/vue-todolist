// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista


// BONUS:
// modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti.
// Con la proprietà done colorare in verde gli <li> di todos  che sono stati svolti, in rosso gli <li> con todos non ancora svolti.
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        red: 'red',
        green: 'green',
        
        newToDo: "",
        
        // toDos: [
            //     'Fare i compiti',
            //     'Fare la spesa',
            //     'Fare il bucato'
            // ]
            
            // trasformo l'array di stringhe in array d'oggetti 
            toDos: [ 
                {
                    titolo: 'Fare i compiti',
                    done: false
                },
                {
                    titolo: 'Fare la spesa',
                    done: true
                },
                {
                    titolo: 'Fare il bucato',
                    done: false
                }
            ],
        },
        methods: {
            // aggiungiamo alla lista 
            addToDo() {
                let newObj = {
                    titolo: this.newToDo,
                    done: false
                }
                if(this.newToDo != "") {
                    this.toDos.push(newObj);
                    this.newToDo = "";
                }
            },
            // rimuoviamo dalla lista tramite l'X
            removeToDo(index) {
                this.toDos.splice(index, 1);
            },
            // Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa.
            changeColor(e, i) {
                this.toDos[i].done = !this.toDos[i].done;
            }
    }
})