<script>
export default {
  data() {
    return {
      headline: 1,
    };
  },
  render(h) {
    return /* returns vNode tree */ h(
      "div",
      {
        attrs: {
          id: "app",
        },
      },
      [
        h(
          `h${this.headline}`,
          {
            style: {
              color: "indigo",
              fontSize: "50px",
            },
          },
          "Hello World!"
        ),
        h(
          "p",
          {
            on: {
              click: () => {
                alert("Hello World!");
              },
            },
          },
          "Click me!"
        ),
        h("p", {
          domProps: {
            innerHTML: "Hello World!",
          },
        }),
      ]
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
