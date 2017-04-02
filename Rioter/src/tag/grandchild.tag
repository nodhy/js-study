<grandchild>
  <h4>Grandchild Tag.</h4>
  <script>
    // window.obs.on('call', () => {
    //   console.log('call event');
    //   console.log('this', this);
    // });

    this.on('mount', ()=>{
      console.log('grandchild mount');
    });

    this.on('unmount', ()=>{
      console.log('grandchild unmount');
    });

  </script>
</grandchild>
