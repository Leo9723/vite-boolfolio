<script>
import axios from 'axios';
import { store } from '../store'


export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            loading : true,
            project: null,
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
        DETTAGLIO POST
    </div>
</template>


<style lang="">
    
</style>