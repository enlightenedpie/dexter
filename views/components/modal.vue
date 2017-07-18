<template lang="html">
  <div>
    <div id="toolbar">
      <ul>
          <li> <button class='modal-button'> Menu </button> </li>
          <li><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></li>
          <li> <button class='modal-button' v-on:click="modalswitch(true)"> Hi, {{ user.profile.firstName }} </button> </li>
      </ul>
    </div>
    <div v-if="showmodal" id="Orders" class="tabcontent">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <div class="tab">
                <button v-on:click="makeactive('profile')">Profile</button>
                <button v-on:click="makeactive('orders')">Orders</button>
                <button v-on:click="makeactive('courses')">Courses</button>
                <button v-on:click="makeactive('settings')">Settings</button>
              </div>
              <ul>

                <div v-if="active === 'profile'">
                  <h3>Profile</h3>
                  <img :src="user.profile.image" height="80">
                  <p>{{user.profile.firstName}} {{user.profile.lastName}}</p>
                </div>

                <div v-if="active === 'orders'">
                  <h3>Orders</h3>
                  <ul>
                    <li v-for="(item, index) in user.orders">
                      {{index}}
                      <ul>
                        <li>- {{item}}</li>
                      </ul>
                      </li>
                  </ul>
                </div>

                <div v-if="active === 'courses'">
                  <h3>Courses</h3>
                  <ul>
                    <li v-for="(item, index) in user.courses">
                    <button class="course-buttons" v-on:click="switchcourse(index)"> {{index}} </button>
                    </li>
                  </ul>
                </div>

                <div v-if="active === 'settings'">
                  <h3>Settings</h3>
                  <a>Recommend Content</a>
                  <div class="onoffswitch">
                      <input type="checkbox" name="suggestcontent" id="recommendContent"
                           v-model="user.settings.recommendContent">
                  </div>
                  <br>
                  <br>
                  <a>Reset password</a>
                  <div class="passwordreset">
                    <input type="text" name="resetpassword">
                      <br>
                      <input type="text" name="resetcheck">
                  </div>
                  <br>
                  <br>
                  <a>Offline Content</a>
                  <a><div class="onoffswitch">
                    <input type="checkbox" name="suggestcontent" class="onoffswitch-checkbox" id="offlineContent"
                              v-model="user.settings.offlineContent">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </div></a>
                </div>
              </ul>
            </div>
            <button class="modal-default-button" v-on:click="modalswitch(false)"> Confirm </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        active: 'profile'
      }
    },
    methods: {
      makeactive: function(item){
                this.active = item;
            }
    },
    props: ['currentcourse','user','switchcourse', 'showmodal', 'modalswitch'],
    components: ['modal']
}
</script>
