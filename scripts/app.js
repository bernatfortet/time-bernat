(function() {
  var App,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App = (function(_super) {
    __extends(App, _super);

    function App() {
      var data;
      App.__super__.constructor.apply(this, arguments);
      console.log('Hello World');
      data = {
        name: "bernat"
      };
      this.el.append(this.getTemplate('Template', data));
    }

    return App;

  })(Controller);

  $(document).ready(function() {
    var app;
    return app = new App({
      el: $('#App')
    });
  });

}).call(this);
