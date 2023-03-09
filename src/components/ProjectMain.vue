<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'ProjectMain',

    components:{
    ProjectCard,
  },
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
                    console.log(this.projects)

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
                <div class="col-12 d-flex flex-column align-items-center">
                    <div v-if="loading">
                        <div class="loader">
                        </div> 
                    </div>
                    <div v-else class="d-flex flex-wrap col-12">

                            <ProjectCard class="card my-3 col-3 m-2" v-for="(project, index) in projects" :project="project" :key="project.id" />


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