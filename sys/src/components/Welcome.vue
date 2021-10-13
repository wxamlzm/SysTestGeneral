<template>
    <div class="welcome">
        <h3>welcome, {{username}}</h3>
    </div>
</template>

<script>

export default {
    name: 'welcome',
    data(){
        return{
            username: sessionStorage.getItem('username')
        }
    }
}
</script>

