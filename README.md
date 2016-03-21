
Extends the $exceptionHandler to utilize toastr for showing and hiding error/success messages.

## Requirements

- AngularJS

## Usage


You can get it from [Bower](http://bower.io/)

```sh
bower install angular-toastr-exception
```

Load the script files in your application:

```html
<link rel="stylesheet" type="text/css" href="angular-toastr.css" />
<script src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="angular-toastr.tpls.js"></script>
<script src="bower_components/angular-toastr-exception/dist/angular-toastr-exception.min.js"></script>

```

Add the specific module to your dependencies:

```javascript
angular.module('myApp', ['toastr', ...])
```

Example Usage:
```javascript
//After injecting Exception
var bodyText = 'This is the body text.';
var headerText = 'This is the header text.'
Exception.catcher(bodyText)(headerText);
```
You can still modify the toastr options by

```javascript
angular.module('mms-util-client').config(ToastrConfigFunction);
    ToastrConfigFunction.$inject = ['toastrConfig'];

    function ToastrConfigFunction(toastrConfig) {
        angular.extend(toastrConfig, {
            closeButton: true,
            extendedTimeOut: 100000,
            timeOut: 4000
        });
    }
```