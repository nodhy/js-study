<content>
  <h1>Content Tag.</h1>
  <mContent/>

  <a href="javascript:void(0);" data-id="{TAG_MAIN}" onclick="{changeTag}">Main</a>
  <a href="javascript:void(0);" data-id="{TAG_SUB}" onclick="{changeTag}">Sub</a>
  <a href="javascript:void(0);" onclick="{callEve}">Event</a>

  <script>
    import './child.tag';
    import './subchild.tag';

    this.name = 'Content Name';
    this.TAG_MAIN = '0';
    this.TAG_SUB = '1';

    this.changeTag = (e) => {
      if (e.target.dataset.id === this.TAG_MAIN) {
        riot.mount('mContent', 'child');
      } else {
        riot.mount('mContent', 'subchild');
      }
    };
    this.callEve = (e) => {
      obs.trigger('call');
    };
  </script>
</content>
