<template>
  <v-container>
    <h1>Cursos</h1>
    <v-row>
      <v-col cols="12" md="4" sm="6"
      v-for="(course, index) in courses" :key="index">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="course.data.name">
            <v-card-title>{{course.data.name}}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>{{course.data.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Ver Más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import { mapActions, mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    // NavBar
  },
  methods: {
    ...mapActions(['setCourses']),
  },
  computed: {
    ...mapState(['courses'])
  },
  created() {
    this.setCourses()
  },
};
</script>
