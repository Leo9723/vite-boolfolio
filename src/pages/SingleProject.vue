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
            this.project = response.data.project
            this.loading = false
        })
    }
}
</script>


<template lang="">
    <div>
        <img :src="project.cover_image != null ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <p v-if="project.type">{{ project.type.name }}</p>
        <ul v-if="project.technologies">
            <li v-for="technology, index in project.technologies" :key="index">
                {{ technology.name }}
            </li>
        </ul>

    </div>
</template>


<style lang="">
    
</style>