angular.module('mubalootestApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/main.html',
    "<div class=\"start-btn\"><div class=\"\" ng-click=\"startform();\" ng-show=\"showToStart\"><span class=\"pulse\">Start the form</span></div></div><div class=\"slide-animate\" ng-include=\"template.url\" ng-show=\"showAfterStart\"></div><div class=\"loader\" ng-show=\"showLoader\"></div>"
  );


  $templateCache.put('views/step1.html',
    "<h2 ng-bind-html=\"template.name\"></h2><div class=\"col col-1-3\"><label class=\"select\"><select ng-model=\"formdata.title.value\"><option selected value=\"Mr\">Mr</option><option value=\"Mrs\">Mrs</option><option value=\"Miss\">Miss</option></select></label></div><div class=\"col col-1-7\"><input class=\"half\" ng-model=\"formdata.firstname\" placeholder=\"First name\"> <span class=\"alert\" ng-show=\"firstnameReq\">First name is required</span></div><div class=\"col col-1-10\"><input ng-model=\"formdata.lastname\" placeholder=\"Last name\"> <span class=\"alert\" ng-show=\"lastnameReq\">Last name is required</span></div><div class=\"col col-1-10\"><input class=\"dateclass placeholderclass\" type=\"date\" ng-model=\"formdata.dateofbirthday\" placeholder=\"B-day date\"> <span class=\"alert\" ng-show=\"bdayReq\">Birthday date is required</span></div><div class=\"step-nav\"><ul><li class=\"active\">1</li><li ng-click=\"goto(1)\">2</li><li ng-click=\"goto(2)\">3</li></ul></div>"
  );


  $templateCache.put('views/step2.html',
    "<h2 ng-bind=\"template.name\"></h2><div class=\"col col-1-3 iconwrap\"><i class=\"fa fa-clock-o\"></i></div><div class=\"col col-1-7\"><div ng-bind=\"times\"></div></div><div class=\"col col-1-3 iconwrap\"><i class=\"fa fa-map-marker\"></i></div><div class=\"col col-1-7\"><reverse-geocode lat=\"{{formdata.lat}}\" lng=\"{{formdata.lng}}\"></reverse-geocode></div><div class=\"col col-1-10\"><button ng-click=\"refreshposition()\">Refresh Values</button></div><div class=\"step-nav\"><ul><li ng-click=\"goto(0)\">1</li><li class=\"active\">2</li><li ng-click=\"goto(2)\">3</li></ul></div>"
  );


  $templateCache.put('views/step3.html',
    "<h2 ng-bind=\"template.name\"></h2><textarea ng-model=\"formdata.feedback\"></textarea><div class=\"col col-1-10\"><button ng-click=\"collectData()\">Send</button></div><div class=\"step-nav\"><ul><li ng-click=\"goto(0)\">1</li><li ng-click=\"goto(1)\">2</li><li class=\"active\">3</li></ul></div>"
  );


  $templateCache.put('./node_modules/grunt-ng-template/test/fixtures/views/demo-2.html',
    "<h1>Second demo partial</h1>"
  );


  $templateCache.put('./node_modules/grunt-ng-template/test/fixtures/views/demo.html',
    "<h1>First demo partial</h1>"
  );

}]);
