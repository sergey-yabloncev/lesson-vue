<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Users</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button v-on:click="switcher" class="btn btn-sm btn-outline-secondary">
                        <span data-feather="plus"></span> hide/show
                    </button>
                </div>
            </div>
        </div>

        <table-users :users="users" :visible="is_visible" />
    </div>
</template>

<script>
import axios from "axios";
import feather from "feather-icons";

export default {
  name: "Users",
  components: {
    "table-users": () => import("@/components/UsersTable.vue")
  },
  data: function() {
    return {
      is_visible: true,
      users: []
    };
  },
  mounted() {
    this.getUsers();
    feather.replace();
  },
  methods: {
    getUsers() {
      axios
        .get("http://localhost:3004/users/")
        .then(response => {
          this.users = response.data;
        })
        .catch(error => console.error(error));
    },
    switcher: function() {
      this.is_visible = !this.is_visible;
    }
  }
};
</script>
