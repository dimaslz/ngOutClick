angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h3>Example with element DIV and content text</h3>\n" +
    "<h4>with init method</h4>\n" +
    "<div out-click out-click-callback=\"outClickChangeExampleText1Callback()\" out-click-init=\"changeExampleText1Init()\" ng-click=\"clickOnExample1()\">Click on me for change the next text: \"{{ textExample1 }}\"</div>\n" +
    "\n" +
    "<h4>without init method</h4>\n" +
    "<div out-click out-click-callback=\"outClickChangeExampleText2Callback()\" ng-click=\"clickOnExample2()\">Click on me for change the next text: \"{{ textExample2 }}\"</div>\n" +
    "\n" +
    "<hr>\n" +
    "");
}]);
