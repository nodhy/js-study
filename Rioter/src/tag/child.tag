<child>
  <h3>Child Tag</h3>
  <grandchild/>

  <script>
    this.on('mount', ()=>{
      console.log('child mount');
    });
    this.on('unmount', ()=>{
      console.log('child unmount');
    });
  </script>
</child>
