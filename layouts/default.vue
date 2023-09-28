<template>
  <div class="px-4 sm:px-0">
    <NavBar />
    <slot />
  </div>
</template>

<style>
html {
  /* font-family: "Open Sans", Roboto, "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif; */
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: "#f9fafb";
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* p {
  font-family: "Merriweather", Roboto, "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
} */
</style>
