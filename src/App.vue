<template>
  <v-app id="crossword">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height pt-2>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  export default {
    components: {},
    props: {
      source: String
    },
    data () {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: null,
        items: [
          {
            icon: 'bubble_chart',
            title: 'Menu'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Lightapp',
        isLoggedIn: this.$store.state.AppStore.currentUser,
        selectedLang: this.$i18n.locale
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
        screen.orientation.lock('landscape')
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
          alert(window.screen.orientation)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      },
      showSettings () {
        this.$store.dispatch('AppStore/setShowSettings', true)
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{  Apply this to v-bottom-nav if necessary. 
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
