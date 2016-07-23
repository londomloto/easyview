# easyview
Easy jQuery data binding powered by jsviews

# Examples

- Simple usages
  
  ```html
  <div id="example">
    <h1 data-link="{:name}"></h1>
    <input type="text" data-link="name">
    <button name="submit">Submit</button>
  </div>
  ```
  
  ```javascript
  $('#example').easyview({
    model: {
        name: 'Londomloto'
    },
    events: {
        'click button[name=submit]': function(e) {
            alert(this.get('name'));
        }
    }
  });  
  ```

- Advance Usages
