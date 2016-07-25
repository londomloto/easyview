# easyview
Easy jQuery MVVM (model - view - viewmodel) plugin based on jsviews. For detail markup  documentation, see https://www.jsviews.com.

## Install

```javascript
npm install jquery-easyview
```

## Demo

[Live Demo (plunker)](https://plnkr.co/edit/Sakdl72AGpc1DNxkQafx?p=preview)

## Options

#### model

Type: `Object` Default: `{}`
Data represents real state content.

```javascript
model: {
	title: 'My Heroes',
    selected: null,
    heroes: [
    	{id: 1, name: 'Windstorm'},
        {id: 2, name: 'Bombasto'}
    ]
}
```

#### events
Type: `Object` Default: `{}`
DOM Events binding specification.

```javascript
events: {
	'click button': 'onButtonClick',
    'keypress input': function(e) {
    	if (e.keyCode === 13) {
        	// ...
        }
    }
},

onButtonClick: function(e){
	e.preventDefault();
    // ...
}
```

## Methods

#### set()
Set model property value. 

```javascript
// using string as key
$('#example').easyview('set', 'title', 'Untitled');
$('#example').easyview('set', 'selected.name', 'Magneta');

// using jQuery object
$('#example').easyview('set', $('li.selected'), 'name', 'Magma');
```

#### get()
Get model property value

```javascript
// using string as key
var hero = $('#example').easyview('get', 'selected');

// using jQuery object
var hero = $('#example').easyview('get', $('li.selected'));
```

## Example

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<!-- part of view -->
<div id="example">
	<h1>My Heroes</h1>
    <p>Click on hero to edit</p>
    <ul>
    {^{for heroes}}
    	<li data-link="class{merge:~root.selected && ~root.selected.id==id toggle='selected'}">
        	<a href="#" data-link="{:name}"></a>
        </li>
    {{/for}}
    </ul>
    {^{if selected}}
    <h2>My Hero Detail</h2>
    Edit hero: <input type="text" data-link="selected^name trigger=true">
    {{/if}}
</div>

<!-- include libraries -->
<script src="PATH_TO_JQUERY"></script>
<script src="jquery-easyview.js"></script>

<!-- your script -->
<script src="script.js"></script>

</body>
</html>
```

```javascript
// file: script.js

$(document).ready(function(){

	$('#example').easyview({
    	model: {
        	selected: null,
            heroes: [
            	{id: 1, name: 'Windstorm'},
                {id: 2, name: 'Bombasto'}
            ]
        },
        events: {
        	'click li > a': 'onSelectHero'
        },
        onSelectHero: function(e) {
        	e.preventDefault();
            
        	var hero = this.get($(e.currentTarget));
            this.set('selected', hero);
        }
    });

});

```

Example asynchronous loading or setting property value:

```javascript
// jQuery ajax
$.ajax({
	url: 'heroes.php',
    dataType: 'json'
}).done(function(heroes){
	$('#example').easeview('set', 'heroes', heroes);
});

// promise
funtion getHeroes() {
	return $.ajax({url: 'heroes'}).promise();
}

getHeroes().then(function(heroes){
	$('#example').easeview('set', 'heroes', heroes);
});


```