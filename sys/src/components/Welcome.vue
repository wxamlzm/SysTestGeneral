<template>
    <div class="welcome">
        <h3>welcome,{{username}}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'welcome',
    computed: {
        ...mapState(["username"])
    },
    mounted(){
        console.log('hi',this.username)
    }
}
</script>

