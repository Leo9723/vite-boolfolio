<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            menuItems: [
                {
                label: 'Homepage',
                routeName: 'homepage',
                },
                {
                label: 'list',
                routeName: 'project_list',
                }
        ]
        }
    }
}
</script>


<template>
    <nav class="navbar navbar-expand-md">
        <div class="container">
            <div class="navbar-brand">
                LOGO
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
<!--                             <a :href="item.routeName" class="nav-link">
                                {{ item.label }}
                            </a> -->
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
    
</style>