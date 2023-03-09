<script>
import axios from 'axios';


export default {
    name: 'ProjectMain',
    data(){
        return{
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProject(project_page){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`, {params: {page: project_page}}).then((response) => {
                if(response.data.success){
                    this.projects = response.data.projects.data
                    this.currentPage = response.data.projects.current_page
                    this.lastPage = response.data.projects.last_page
                    this.loading = false;
                    

                }
                else{
                    this.loading = false
                }
            });

        }
    },
    mounted() {
        this.getProject()
    },
}
</script>


<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                        Boolfolio
                </div>
                <div class="col-12">
                    <div v-if="loading">
                        <div class="loader">
                        </div> 
                    </div>
                    <div v-else class="d-flex flex-wrap col-12">
                        <div class="card my-3 col-3 m-2" v-for="project in projects" :key="project.id">
                            <div class="card-body">
                                <div class="card-img-top">
                                    <img :src="project.cover_image != null ? `${baseUrl}/storage/app/${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
                                </div>
                                <div class="card-title">
                                    <h5>{{ project.title }}</h5>
                                </div>
                                <div class="card-text">
                                    <h5>{{ project.description }}</h5>
                                    
                                    <em v-if="project.type">Tipologia: {{ project.type.name }}</em>
                                    <ul v-if="project.technologies">
                                        <li v-for="technology in project.technologies">
                                            {{ technology.name }}
                                        </li>
                                    </ul>
                                </div>
                                <a href="">
                                    Leggi
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <nav>
                                    <ul class="pagination">
                                        <li>
                                            <button class="page-link" @click="getProject(currentPage - 1)">
                                                Prev
                                            </button>
                                        </li>
                                        <li v-for="i in lastPage">
                                            <button class="page-link" @click="getProject(i)">
                                                {{ i }}
                                            </button>
                                        </li>
                                        <li>
                                            <button class="page-link" @click="getProject(currentPage + 1)">
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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