<!-- <template>
  <v-app id="example-3">
    <v-navigation-drawer permanent clipped light>
      <v-list dense class="pt-0">
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile :href="item.link" router>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="teal" light>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <window-buttons></window-buttons>
    </v-toolbar>
    <main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template> -->

<!--<script>
  import WindowButtons from './Dashboard/WindowButtons.vue'

  export default {
    name: 'dashboard',
    data () {
      return {
        drawer: null,
        items: [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'Terminal', icon: 'tv', link: 'terminal' }
        ],
        right: null
      }
    },
    components: { WindowButtons },
    methods: {}
  }
</script> -->

<template>
  <v-app id="example-8" dark>
    <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" dark>
      <v-list class="pa-0">
        <v-list-item v-if="mini">
          <v-list-tile @click.native.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon light>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon light @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-item v-for="item in items" :key="item">
          <v-list-tile :href="item.link" router>
            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <window-buttons></window-buttons>
    </v-toolbar>
    <main>
      <v-container>
        <v-card height="500px">
          <router-view></router-view>
        </v-card>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import WindowButtons from './Dashboard/WindowButtons.vue'

  export default {
    name: 'dashboard',
    data () {
      return {
        drawer: null,
        items: [
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'Terminal', icon: 'tv', link: 'terminal' }
        ],
        mini: false,
        right: null
      }
    },
    components: { WindowButtons },
    methods: {}
  }
</script>

<style>
  @import '~@/assets/google.css';
  
  #example-8 .card {
    background: #424242
  }
</style>
