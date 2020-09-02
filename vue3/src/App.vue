<template>
  <div>
    <button @click="changeIcon()">Change Icon</button>
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icon: "cog",
    };
  },
  methods: {
    changeIcon() {
      if (this.icon === "cog") {
        this.icon = "search";
      } else {
        this.icon = "cog";
      }
      console.log(this.icon);
    },
  }
};
</script>
