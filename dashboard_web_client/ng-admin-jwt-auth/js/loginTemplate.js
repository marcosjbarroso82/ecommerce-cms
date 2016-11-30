var loginTemplate = '<div class=\"container\">\n    <form style=\"max-width: 330px; padding: 15px; margin: 0 auto;\" class=\"form-login\" name=\"loginController.form\"  ng-submit=\"loginController.login()\">\n        <h2 class=\"form-login-heading\">Please log in<\/h2>\n        <div class=\"form-group\">\n            <label for=\"inputLogin\" class=\"sr-only\">Login<\/label>\n            <input type=\"text\" id=\"inputLogin\" class=\"form-control\" placeholder=\"Login\" ng-model=\"loginController.data.login\" ng-required=\"true\" ng-minlength=\"3\" ng-enter=\"loginController.login()\">\n        <\/div>\n        <div class=\"form-group\">\n            <label for=\"inputPassword\" class=\"sr-only\">Password<\/label>\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" ng-model=\"loginController.data.password\" ng-required=\"true\" ng-minlength=\"4\" ng-enter=\"loginController.login()\">\n        <\/div>\n\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" ng-disabled=\"loginController.form.$invalid\">Login<\/button>\n    <\/form>\n<\/div>';

module.exports = loginTemplate;