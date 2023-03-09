<script>
export default {
    props: {
        project: Object,
    },
    data(){
        return{
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
}
</script>


<template>
    <div>
        <div class="card-body">
                                <div class="card-img-top">
                                    <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
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
                                <a href="">
                                    Leggi
                                </a>
                            </div>
    </div>
</template>


<style lang="scss">
    
</style>