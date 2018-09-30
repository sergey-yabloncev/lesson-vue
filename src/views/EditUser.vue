<template>
    <div>
        <h2>User: {{ user.lastName }} {{ user.firstName }}</h2>
        <form>
            <div class="form-group">
                <label for="user-name">Name</label>
                <input v-model="user.firstName" type="text" class="form-control" id="user-name">
            </div>
            <div class="form-group">
                <label for="user-surname">Surname</label>
                <input v-model="user.lastName" type="text" class="form-control" id="user-surname">
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="user-image">Avatar</label>
                        <input v-model="user.picture" type="text" class="form-control" id="user-image">
                    </div>
                </div>
                <div class="col">
                    <img v-if="user.picture" :src="user.picture" alt="">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditUser",
  data: function() {
    return {
      user: {}
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:3004/users/" + this.$route.params.id)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => console.error(error));
    }
  }
};
</script>
