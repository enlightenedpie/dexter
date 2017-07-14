<template lang="html">
  <div id="Orders" class="tabcontent">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">

            <h1> Your Profile </h1>
            <!-- <div class="tab">
              <button class="tablinks" onclick="openTab(event, 'Profile')">Profile</button>
              <button class="tablinks" onclick="openTab(event, 'Orders')">Orders</button>
              <button class="tablinks" onclick="openTab(event, 'Courses')">Courses</button>
              <button class="tablinks" onclick="openTab(event, 'Settings')">Settings</button>
            </div> -->

            <tabs>

              <tab name="Orders" class="tabcontent" :selected="true">
                <h3>Orders</h3>
                <ul>
                  <li v-for="(item, index) in user.orders">
                    {{index}} 
                  </li>
                    <ul>
                      <li>{{item}}</li>
                    </ul>
                </ul>
              </tab>

              <tab name="Profile" class="tabcontent">
                <h3>Profile</h3>
                <img :src="user.profile.image" height="80">
                <p>{{user.profile.firstName}} {{user.profile.lastName}}</p>
              </tab>

              <tab name="Courses" class="tabcontent">
                <h3>Courses</h3>
                <ul>
                  <li v-for="(item, index) in user.courses">
                  {{index}}
                  </li>
                </ul>
              </tab>

              <tab name="Settings" class="tabcontent">
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
              </tab>

            </tabs>

            <button class="modal-default-button" @click="$emit('close')"> Confirm </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['user']
}
</script>
