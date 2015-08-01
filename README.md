# ngOutClick
ngOutClick is a angular component for add event onBlur in any tag html.

```html
<element ng-out-click out-click-callback="callbackMethod()">Now, tag have onBlur event</element>
```

## Install
You can use bower for install:
`bower install ngOutClick`
`bower install ngOutClick --save` // for add to bower dependencies

and inject on your angular controller:
`angular.module('myModule', ['ngOutClick']);`


## Attributes
### out-click-callback="callbackMethod()"
This is an attribute for execute an action that you want after click outside element.

### out-click-init="initMethod()"
This is an extra attribute for execute an action when load the element.

## Live Demo
Live demo available on [Github Page](https://dimaslz.github.io/ngOutClick) and [Fiddle](https://fiddle.jshell.net/dimaslz/2qyus2aq/) for you can try your own examples.

## TODO
* tests
