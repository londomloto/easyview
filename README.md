# easyview
Easy jQuery MVVM (model - view - viewmodel) plugin.

## Install

```javascript
npm install jquery-easyview
```

## Options



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
