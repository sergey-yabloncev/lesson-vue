<template>
    <div class="table-responsive" :class="{'d-none': !visible }">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Edit/view</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user  in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.company | uppercase }}</td>
                    <td>
                        <router-link :to="{ name: 'edit-user', params: { id: user.id }}"
                                     class="btn btn-sm btn-outline-secondary">
                            Edit user
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    users: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    filters: {
      uppercase: function(value) {
        return value.toUpperCase();
      }
    }
  }
};
</script>
