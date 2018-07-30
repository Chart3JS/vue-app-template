<template>
  <v-app light>
    <settings-dialog></settings-dialog>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      v-show="isLoggedIn"
      app
    >
      <v-list v-show="isLoggedIn">
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon v-show="isLoggedIn" @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" color="#01579B"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge color="red" left style="margin: 6px 0 0 0;">
        <span sm slot="badge">2</span>
        <v-icon
          medium
          color="#428bca"
        >
          notification_important
        </v-icon>
      </v-badge>
      <v-icon
        medium
        color="#428bca"
        @click="showSettings"
      >
        settings
      </v-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
    <v-spacer></v-spacer>
    <v-divider dark></v-divider>  
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import SettingsDialog from '@/components/Settings.vue'
  export default {
    components: {
      SettingsDialog
    },
    data () {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: false,
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
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
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
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
