<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-left>
        <v-text-field
        clearable
        v-model="searchSite"
        :label="$t('device.search_by_name')"
        required
        ></v-text-field>
      	<v-expansion-panel focusable>
	      <v-expansion-panel-content
	      v-for="(site, i) in sites"
	      :key="site.site_id"
	      >
	      <div slot="header">{{ site.name }}</div>
	      <v-card>
	        <v-card-text>
	          <v-jumbotron dark color="#428bca">
      	        <v-container fluid grid-list-sm>
                  <v-layout align-center>
		            <v-flex xs12 sm6 offset-sm3>
		              <v-subheader
		              class="devices-list-header light-blue darken-3"
		              v-if="site.name"
		              :key="site.name"
		              md
		            	>
              			  {{ site.name }} Devices List
                      </v-subheader>
		              <v-expansion-panel v-if="site.devices.length !== 0" focusable popout>
				        <v-expansion-panel-content
				        v-for="(device, i) in site.devices"
				        :key="device.device_id"
				        md
				        >
				          <div md slot="header">{{ device.device_name }}</div>
				          <v-card>
				            <v-card-text>
				        	  <v-btn @click="connectToDevice(device.device_id)" color="info">{{ $t('device.device_connect_button') }}</v-btn>
				            </v-card-text>
				          </v-card>
				        </v-expansion-panel-content>
				      </v-expansion-panel>
				      <h4 v-else class="grey darken-3 no-devices">No Connected Devices</h4>
		            </v-flex>
		          </v-layout>
		        </v-container>
		      </v-jumbotron>
	        </v-card-text>
	      </v-card>
	    </v-expansion-panel-content>
	  </v-expansion-panel>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      searchSite: null,
      sites: this.$store.state.AppStore.sites || [],
      devices: this.$store.state.AppStore.devices || [],
      meters: this.$store.state.AppStore.meters || [],
      gradient: this.getGradient()
    }
  },
  created () {
  },
  methods: {
    connectToDevice (deviceId) {
      alert(deviceId)
    },
    getGradient () {
      let str = ['to top left ']
      let cnt = 0
      while (cnt < 129) {
        str.push('#4cb7ed, #fff')
        cnt++
      }
      return str.join(', ')
    }
  },
  watch: {
    searchSite () {
      if (this.searchSite === null) {
        this.sites = this.$store.state.AppStore.sites
      } else {
        this.sites = this.sites.filter(s => s.name.toLowerCase().includes(this.searchSite.toLowerCase()))
      }
    }
  }
}
</script>
<style scoped>
	.devices-list-header {
	    margin-bottom: 9px;
	    margin-left: 4px;
	}
	h4.no-devices {
		display: block;
		padding: 2px 3px 2px 3px;
	}
</style>