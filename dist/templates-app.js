angular.module('templates-app', ['example/example.tpl.html']);

angular.module("example/example.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("example/example.tpl.html",
    "<div class=\"container\">\n" +
    "  <section id=\"install\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <h1>How to use</h1>\n" +
    "        <p>\n" +
    "          <b>ngOutClick</b> is available on <a href=\"http://bower.io/search/\" target=\"_blank\">Bower</a>, so you can execute the next command:<br>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <code>bower install ngOutClick</code>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          and inject module on your controler:\n" +
    "          <code>angular.module('myModule', ['ngOutClick']);</code><br>\n" +
    "          Now, you can use this directive like following examples.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "  <section id=\"examples\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <h1>Examples</h1>\n" +
    "        <h3>Example with element DIV and content text</h3>\n" +
    "        <div class=\"example\">\n" +
    "          <h4>with init method</h4>\n" +
    "          <h5>code</h5>\n" +
    "          <pre>\n" +
    "            &lt;div\n" +
    "              ng-click=\"clickOnExample1()\"\n" +
    "              <b>ng-out-click</b>\n" +
    "              <b>out-click-callback=\"outClickChangeExampleText1Callback()\"</b>\n" +
    "              <b>out-click-init=\"changeExampleText1Init()\"</b>&gt;\n" +
    "                Click on me for change the next text: \"&#123;&#123; textExample1 &#125;&#125;\"\n" +
    "            &lt;/div&gt;\n" +
    "          </pre>\n" +
    "\n" +
    "          <br>\n" +
    "          <h5>result</h5>\n" +
    "          <div\n" +
    "            ng-click=\"clickOnExample1()\"\n" +
    "            ng-out-click\n" +
    "            out-click-callback=\"outClickChangeExampleText1Callback()\"\n" +
    "            out-click-init=\"changeExampleText1Init()\">\n" +
    "              Click on me for change the next text: \"{{ textExample1 }}\"\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"example\">\n" +
    "          <h4>without init method</h4>\n" +
    "          <h5>code</h5>\n" +
    "          <pre>\n" +
    "            &lt;div\n" +
    "              ng-click=\"clickOnExample2()\"\n" +
    "              <b>ng-out-click</b>\n" +
    "              <b>out-click-callback=\"outClickChangeExampleText2Callback()\"</b>&gt;\n" +
    "                Click on me for change the next text: \"{{ textExample2 }}\"\n" +
    "            &lt;/div&gt;\n" +
    "          </pre>\n" +
    "\n" +
    "          <h5>result</h5>\n" +
    "          <div\n" +
    "            ng-click=\"clickOnExample2()\"\n" +
    "            ng-out-click\n" +
    "            out-click-callback=\"outClickChangeExampleText2Callback()\">\n" +
    "              Click on me for change the next text: \"{{ textExample2 }}\"\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <h3>Example with Dropdown</h3>\n" +
    "        <div class=\"example\">\n" +
    "          <h5>code</h5>\n" +
    "          <pre>\n" +
    "            &lt;div ng-click=\"toggleEdit()\" ng-if=\"showText\"&gt;Click to edit with dropdown. Current option selected:\n" +
    "              &lt;strong&gt;\"{{ currentOption.value }}\"&lt;/strong&gt;\n" +
    "            &lt;/div&gt;\n" +
    "            &lt;div class=\"btn-group\" dropdown is-open=\"status.isopen\" ng-if=\"!showText\"&gt;\n" +
    "              &lt;button\n" +
    "                class=\"btn btn-primary dropdown-toggle\"\n" +
    "                dropdown-toggle ng-disabled=\"disabled\"\n" +
    "                <b>ng-out-click</b>\n" +
    "                <b>out-click-callback=\"toggleEdit()\"</b>\n" +
    "                <b>out-click-init-count=\"true\"</b>\n" +
    "                type=\"button\"&gt;\n" +
    "                  Button dropdown\n" +
    "                &lt;span class=\"caret\"&gt;&lt;/span&gt;\n" +
    "              &lt;/button&gt;\n" +
    "              &lt;ul class=\"dropdown-menu\" role=\"menu\"&gt;\n" +
    "                &lt;li ng-click=\"selectOption(option)\" ng-repeat=\"option in options\"&gt;\n" +
    "                  {{ option.value }}\n" +
    "                &lt;/li&gt;\n" +
    "              &lt;/ul&gt;\n" +
    "            &lt;/div&gt;\n" +
    "          </pre>\n" +
    "          <h5>result</h5>\n" +
    "\n" +
    "          <div ng-click=\"toggleEdit()\" ng-if=\"showText\">Click to edit with dropdown. Current option selected:\n" +
    "            <strong>\"{{ currentOption.value }}\"</strong>\n" +
    "          </div>\n" +
    "          <div class=\"btn-group\" dropdown is-open=\"status.isopen\" ng-if=\"!showText\">\n" +
    "            <button\n" +
    "              class=\"btn btn-primary dropdown-toggle\"\n" +
    "              dropdown-toggle ng-disabled=\"disabled\"\n" +
    "              ng-out-click out-click-callback=\"toggleEdit()\"\n" +
    "              out-click-init-count=\"true\"\n" +
    "              type=\"button\">\n" +
    "                Button dropdown\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "              <li ng-click=\"selectOption(option)\" ng-repeat=\"option in options\">\n" +
    "                {{option.value}}\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
