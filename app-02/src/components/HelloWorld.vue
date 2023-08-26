<script>
  import { h, useSlots } from 'vue';

  export default {
    props: {
      msg: String,
      items: Array,
    },
    setup(props) {
      const slots = useSlots();

      const vnode = () =>
        h('div', { id: 'hello-world' }, [
          h('h1', props.msg),

          // default slot
          slots.default?.({
            title: 'Hello World',
            src: 'https://vuejs.org/images/logo.png',
          }),

          // unsplash list
          h(
            'div',
            { id: 'unsplash-list' },
            props.items?.map((item) =>
              h(item.containerTag, { key: item.id }, [
                h('p', item.title),
                h('img', { src: item.src, alt: item.title, width: 100 }),
              ])
            )
          ),
        ]);

      return vnode;
    },
  };
</script>
