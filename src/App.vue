<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      ref="drawer"
    >
      <v-list dense>
        <v-list-item @click="navigate('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Top Ediciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigate('browser')">
          <v-list-item-action>
            <v-icon>mdi-edge</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Navegadores frecuentes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
             <v-list-item @click="navigate('os')">
          <v-list-item-action>
            <v-icon>mdi-android</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sistemas Operativos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item @click="navigate('city')">
          <v-list-item-action>
            <v-icon>mdi-navigation</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Regiones frecuentes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
                 <v-list-item @click="navigate('country')">
          <v-list-item-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Países Frecuentes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard Pruni</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
     
        fluid
      >
           <router-view/>
      </v-container>
    </v-content>


  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    methods:{
      navigate(to){
         this.$router.push(to);
        if(window.innerWidth<960){
          this.$refs.drawer.close();
        }
      }
    }
  }
</script>