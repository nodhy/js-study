<grandchild>
  <h4>Grandchild Tag.</h4>
  <p>{ test }</p>
  <script>
    this.test = 'hoge';

    this.mixin('eventCbFunc');

    obs.on('call', this.onMounted(() => {
        console.log('call');
        this.update({test: 'fuga' + (new Date()).getSeconds()});
      })
    );

    this.on('mount', ()=>{
      console.log('grandchild mount');

    });

    this.on('unmount', ()=>{
      console.log('grandchild unmount');
    });

    this.on('update', ()=>{

    });

    this.shouldUpdate = () => {
      return this.isMounted;
    }

  </script>
</grandchild>
