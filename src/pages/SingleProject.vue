<script>
import axios from 'axios';
import { store } from '../store'


export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            loading : true,
            project: {},
        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.id}`).then((response) => {
            if(response.data.success){
                this.project = response.data.project
                this.loading = false
            }
            else{

                this.$router.push({ name:'not-found' })

            }
        })
    }
}
</script>


<template lang="">
    <div v-if="loading">
            <div class="loader">
            </div> 
    </div>
    <div v-else>
        <img :src="project.cover_image != null ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
        <h1>TITOLO: {{ project.title }}</h1>
        <p>DESCRIZIONE: {{ project.description }}</p>
        <p v-if="project.type">TIPOLOGIA: {{ project.type.name }}</p>
        TECNOLOGIE UTILIZZATE:
        <ul v-if="project.technologies">
            <li v-for="technology, index in project.technologies" :key="index">
                {{ technology.name }}
            </li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>
        .loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>