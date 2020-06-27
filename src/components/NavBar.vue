
<template>
    <v-app-bar
      color="primary"
      dark>
      <div class="d-flex align-center">
        <h1 class="mr-2">Live Coding</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
        <span class="mr-2">Cerrar Sesion</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      })
    }
  },
};
</script>

 