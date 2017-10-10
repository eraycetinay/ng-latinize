# ng-latinize
A simple angular directive for latinize.js with capitalize option.

Installation
```
npm install ng-latinize or bower install ng-latinize
```

Add latinize.js and ng-latinize.js to your source. Eg;
```
<script src="bower_components/latinize/latinize.js"></script>
<script src="bower_components/angular-latinize/angular-latinize.js"></script>
```

Add ng-latinize directive to your html element. Eg;
```
<input type="text" ng-model="test" latinize />
<input type="text" ng-model="test" data-capitalize="true" latinize />
```
