<template lang="html">
<!-- Modal Window Template -->
  <div>
    <div id="toolbar">
      <ul>
          <!-- Button that opens / closes modal window in toolbar -->
          <li> <button class='modal-button' v-on:click="switchModal('menu')">
            <img src="https://cdn0.iconfinder.com/data/icons/account-avatar/128/user_2-512.png" height="14"> {{ user.profile.firstName }} </button>
          </li>
      </ul>
      <!-- Supertutortv logo in toolbar -->
      <div id="logo-holder"><img src="https://supertutortv.com/wp-content/uploads/2016/10/sttv_site_logo.png" height=40 class="logo"/></div>
    </div>
    <!-- Entire Modal displays if currentmodal is not empty string -->
    <div v-if="currentmodal != null" id="Orders" class="tabcontent">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <div v-if="currentmodal === 'menu'" class="tabs">
                <button @click="make_active_menu('profile')">Profile</button>
                <button @click="make_active_menu('orders')">Orders</button>
                <button @click="make_active_menu('courses')">Courses</button>
                <button @click="make_active_menu('settings')">Settings</button>
              </div>
              <ul>

                <!-- Profile Tab -->
                <div v-if="activemenu === 'profile' && currentmodal === 'menu'">
                  <h3>Profile</h3>
                  <img :src="user.profile.image" height="80">
                  <!-- Renders user's name -->
                  <p>{{user.profile.firstName}} {{user.profile.lastName}}</p>
                </div>

                <!-- Orders Tab -->
                <div v-if="activemenu === 'orders' && currentmodal === 'menu'">
                  <h3>Orders</h3>
                  <!-- Renders index and items of the JSON object -->
                  <ul v-for="(item, index) in user.orders">
                    <li>
                      {{index}}
                      <ul>
                        <li>- {{item}}</li>
                      </ul>
                    </li>
                  </ul>
                </div>


                <div v-if="activemenu === 'courses' && currentmodal === 'menu'">
                  <h3>Courses</h3>
                  <ul>
                    <li v-for="(item, index) in resources.courses">
                    <button class="course-buttons" v-on:click="switchcourse(index)"> {{index}} </button>
                    </li>
                  </ul>
                </div>

                <!-- Settings Tab -->
                <div v-if="activemenu === 'settings' && currentmodal === 'menu'">
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
                    <input type="checkbox" name="suggestcontent" class="onoffswitch-checkbox" id="offlineContent" v-model="user.settings.offlineContent">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </div></a>
                </div>
              </ul>






              <div v-if="currentmodal === 'act'" class="modal-body">
                <p> This is where the other modal will be </p>
              </div>
            </div>

            
            <button class="modal-close-button" v-on:click="switchModal(null)"> Confirm </button>
          </div>
        </div>
      </div>
    </div>


    <!-- SIDEBARS -->
    <div id="bar-holder">
      <!-- right bar -->
      <div class="menus" id="right-bar">
          <ul>
              <li><a> Downloads </a></li>
              <li><a> Links </a></li>
              <li> <img width="100%" src="https://ih1.redbubble.net/image.336024025.4199/flat,800x800,070,f.u1.jpg"> </li>
          </ul>
      </div>

      <!-- Menu button -->
      <div class='menus' id="menu-bar">
        <ul>
          <li> 
            <ul>
              <li> ACT: 36 </li>
              <li> <button class="act-modal-button" v-on:click="switchModal('act')">Add Score</button></li>
            </ul>
          </li>
          <li> {{user.profile.firstName}} {{user.profile.lastName}} </li>
          <li><a> Progress </a></li>
        </ul>
      </div>       
    </div>

  </div>
</template>

<script>
export default {
    data() {
      return {
//      Variable that controls the active tab, default is 'profile'
        activemenu: 'profile',
//      Variable that controls which modal to display, or not to display, that is the question isn't it....
        currentmodal : null
      }
    },
    methods: {
//    Selects a tab as activemenu
      make_active_menu: function(item){
        this.activemenu = item;
      },
      switchModal(modal) {
        this.currentmodal = modal;
      }
    },
    props: ['user', 'modal_switch', 'resources'],
    components: ['modal']
}
</script>
