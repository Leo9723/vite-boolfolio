<script>
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'Contacts',

    data(){
        return{
            name: '',
            surname: '',
            mail: '',
            phone: '',
            message: '',
            errors: null,
            store,
        }
    },
    methods:{
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                mail: this.mail,
                phone: this.phone,
                message: this.message,
            }
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                    if(!response.data.success){
                        this.errors = response.data.errors
                    }
                    else{
                        this.name = '';
                        this.surname = '';
                        this.mail = '';
                        this.phone = '';
                        this.message = '';
                    }
            });
        }
    }
}
</script>


<template>
    <div>
        <h1>Pagina dei contatti</h1>
    </div>
    <div class="col-12">
        <div class="row">
            <div class="col-12 col-md-6">
                DATI COLONNA SX
            </div>
            <div class="col-12 col-md-6">
                DATI COLONNA DX
            </div>
        </div>
    </div>
    <div class="col-12">
        <h3>Contattaci</h3>
        <form @submit.prevent="sendForm">
            <div class="row">
                <div class="col-12 col-md-6 my-2">
                    <label class="control-label" for="nome">nome:</label>
                    <input type="text" class="form-control" name="nome" id="nome" v-model="name" placeholder="nome">
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label class="control-label" for="cognome">cognome:</label>
                    <input type="text" class="form-control" name="cognome" id="cognome" v-model="surname" placeholder="cognome">
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label class="control-label" for="email">email:</label>
                    <input type="text" class="form-control" name="email" id="email" v-model="mail" placeholder="email">
                </div>
                <div class="col-12 col-md-6 my-2">
                    <label class="control-label" for="telefono">telefono:</label>
                    <input type="text" class="form-control" name="telefono" id="telefono" v-model="phone" placeholder="telefono">
                </div>
                <div class="col-12 my-2">
                    <textarea name="messaggio" id="messaggio" cols="30" rows="10" placeholder="messaggio" v-model="message">
                    </textarea>
                </div>
                <div class="col-12 col-md-6">
                    <button type="submit" class="send_email">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>


<style lang="">
    
</style>