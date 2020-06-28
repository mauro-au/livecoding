<template>
  <v-app>
    <v-main>
      <nav-bar></nav-bar>  
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapState} from 'vuex'
export default {
  name: 'App',

  components: {
    NavBar
  },
  computed: {
    ...mapState(['overlay'])
  },

  data: () => ({
    //
  }),
};
</script>
