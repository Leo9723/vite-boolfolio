<script>
import { store } from '../store'

export default {
    props: {
        project: Object,
    },
    data(){
        return{
            projects: [],
            store,
        }
    },
}
</script>


<template>
    <div>
        <div class="card-body">
                                <div class="card-img-top">
                                    <img :src="project.cover_image != null ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
                                </div>
                                <div class="card-title">
                                    <h5>{{ project.title }}</h5>
                                </div>
                                <div class="card-text">
                                    <h5>{{ project.description }}</h5>
                                    
                                    <em v-if="project.type">Tipologia: {{ project.type.name }}</em>
                                    <ul v-if="project.technologies">
                                        <li v-for="technology, index in project.technologies" :key="index">
                                            {{ technology.name }}
                                        </li>
                                    </ul>
                                </div>
                                <router-link :to="{ name: 'single_project', params: { id: project.id } }" class="btn btn-sm btn-success">Leggi</router-link>
                            </div>
    </div>
</template>


<style lang="scss" scoped>
    img{
        width: 200px;
        height: 300px;
    }
</style>