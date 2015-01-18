/*!
 * This has been generated from "gulp docs", please edit the templates instead templates/*.html
 */
angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/accessibility.html',
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="accessibility" class="page-header">Accessibility</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        Both of the xt-validation-inline and xt-validation-tooltip directives manage aria attributes automatically\n' +
    '        ensuring good support for screen readers.\n' +
    '    </p>\n' +
    '\n' +
    '    <p></p>\n' +
    '    <p>\n' +
    '        .... more to come.\n' +
    '    </p>\n' +
    '\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/errorMessages.html',
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="errors" class="page-header">Custom Error Messages</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm provides multiple ways to set the error message displayed for a given error condition. In many\n' +
    '        cases the error message will not need to be specified for each element as XtForm will generate common messages\n' +
    '        for you.\n' +
    '    </p>\n' +
    '\n' +
    '    <h2 id="errors-element">Errors per element</h2>\n' +
    '\n' +
    '    <p>\n' +
    '        To declare a custom error message all you need to do is declare the message on an attribute of the ng-model\n' +
    '        element.\n' +
    '        See this example below which overrides the default error messages with ones particular to this element.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form name="errorsNgModelForm" xt-form ng-submit="save(errorsNgModelForm)" role="form" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="errorsNgModelNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="errorsNgModelNumber"\n' +
    '                       required min="0" max="6" placeholder="Required & must be between 0 and 6"\n' +
    '                       msg-max="Woah... too high!!"\n' +
    '                       msg-min="Needs to be bigger than that!"\n' +
    '                       msg-required="You need to fill this one out"\n' +
    '                       msg-number="What the? I can\'t read this!">\n' +
    '                <xt-validation-inline for="errorsNgModelNumber"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    '&lt;input name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot; class=&quot;form-control&quot; id=&quot;num&quot;\n' +
    '       required min=&quot;0&quot; max=&quot;6&quot; placeholder=&quot;Required &amp; must be between 0 and 6&quot;\n' +
    '       msg-max=&quot;Woah... too high!!&quot;\n' +
    '       msg-min=&quot;Needs to be bigger than that!&quot;\n' +
    '       msg-required=&quot;You need to fill this one out&quot;\n' +
    '       msg-number=&quot;What the? I can&#39;t read this!&quot;&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '    <h2 id="errors-defaults">App wide defaults</h2>\n' +
    '\n' +
    '    <p>\n' +
    '        Most error messages will not need to be explicitly set on the input itself. XtForm provides a set of default\n' +
    '        error messages for standard error keys. These can be overridden in the configuration provider shown below.\n' +
    '    </p>\n' +
    '\n' +
    '    <table class="table">\n' +
    '        <thead>\n' +
    '        <tr>\n' +
    '            <th>Key</th>\n' +
    '            <th>Messages</th>\n' +
    '        </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '        <tr>\n' +
    '            <td>minlength</td>\n' +
    '            <td ng-non-bindable>\'Needs to be at least {{ngMinlength}} characters long\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>maxlength</td>\n' +
    '            <td ng-non-bindable>\'Can be no longer than {{ngMaxlength}} characters long\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>required</td>\n' +
    '            <td>\'This field is required\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>number</td>\n' +
    '            <td>\'Must be a number\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>min</td>\n' +
    '            <td ng-non-bindable>\'Must be at least {{ngMin}}\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>max</td>\n' +
    '            <td ng-non-bindable>\'Must be no greater than {{ngMax}}\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>email</td>\n' +
    '            <td>\'Must be a valid E-mail address\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>pattern</td>\n' +
    '            <td>\'Illegal value\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>url</td>\n' +
    '            <td>\'Must be a valid URL\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>date</td>\n' +
    '            <td>\'Must be a valid date\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>datetimelocal</td>\n' +
    '            <td>\'Must be a valid date\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>time</td>\n' +
    '            <td>\'Must be a valid time\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>week</td>\n' +
    '            <td>\'Must be a valid week\'</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>month</td>\n' +
    '            <td>\'Must be a valid month\'</td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '\n' +
    '    <p>\n' +
    '        The error messages are interpolated using the attributes of the element. This means you have access to variables\n' +
    '        such as max/min, etc inside of the default error messages.\n' +
    '    </p>\n' +
    '\n' +
    '    <p>\n' +
    '        The following code snippet shows how to override the built in error messages to change XtForm defaults,\n' +
    '        or add your own.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    'angular.module(\'sample\').config(function (xtFormConfigProvider) {\n' +
    '\n' +
    '    // Override default error messages\n' +
    '    xtFormConfigProvider.setErrorMessages({\n' +
    '        required \'Yo!, this will override the required message\',\n' +
    '        someOtherKey: \'Here is a message for a custom validation directive\'\n' +
    '    });\n' +
    '});\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/gettingStarted.html',
    '<div class="docs-section">\n' +
    '    <h1 id="gettingStarted" class="page-header">Getting Started</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm can be installed via bower or downloaded directly.\n' +
    '    </p>\n' +
    '\n' +
    '    <p>\n' +
    '        To install using bower:\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="highlight">\n' +
    '        <code>\n' +
    'bower install --save angular-xtform\n' +
    '        </code>\n' +
    '    </div>\n' +
    '\n' +
    '    <p>\n' +
    '        Third Party Dependencies:\n' +
    '    </p>\n' +
    '\n' +
    '    <ul>\n' +
    '        <li>jQuery</li>\n' +
    '        <li>Bootstrap JS (optional)</li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <p>\n' +
    '        If using tooltip validation styles you will need to install Bootstrap Javascript or another tooltip plugin that\n' +
    '        provides\n' +
    '        the <code>$(element).tooltip()</code> function.\n' +
    '    </p>\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/introduction.html',
    '<div class="docs-section">\n' +
    '    <h1 id="introduction" class="page-header">Introduction</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm extends the form functionality built into the AngularJS framework to provide features such as:\n' +
    '    </p>\n' +
    '    <ul>\n' +
    '        <li><strong>Tooltip, Form & Inline Validation Styles</strong> - all styles inbuilt & easy to use</li>\n' +
    '        <li><strong>Generated error messages</strong> - App-wide defaults to save needless repetition</li>\n' +
    '        <li><strong>Custom messages</strong> - Custom messages set as attributes on the input itself</li>\n' +
    '        <li><strong>Validation Strategy</strong> - Abstracts the validation logic from your views\n' +
    '            eg. Show on focus, on submit, on dirty, or any combination by switching different strategies in the\n' +
    '            config provider\n' +
    '        </li>\n' +
    '        <li><strong>Accessibility</strong> - Aria attributes handled automatically to ensure the best support for screen\n' +
    '            readers.\n' +
    '        </li>\n' +
    '        <li><strong>Styling</strong> - Fully templated and class annotated for easy styling</li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form name="basicForm" xt-form ng-submit="save(basicForm)" role="form" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="basicUsername">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="basicUsername" placeholder="Required field"\n' +
    '                       ng-model="model.username" required>\n' +
    '                <xt-validation-inline for="basicUsername"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="basicEmail">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control" id="basicEmail"\n' +
    '                       placeholder="Must be valid email">\n' +
    '                <xt-validation-inline for="basicEmail"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="basicNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="basicNumber"\n' +
    '                       placeholder="Must be between 0 and 6" min="0" max="6">\n' +
    '                <xt-validation-inline for="basicNumber"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    '&lt;form name=&quot;form&quot; xt-form role=&quot;form&quot; novalidate&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;username&quot;&gt;Username&lt;/label&gt;\n' +
    '    &lt;input name=&quot;username&quot; id=&quot;username&quot; ng-model=&quot;model.username&quot; required&gt;\n' +
    '    &lt;xt-validation-inline for=&quot;username&quot;&gt;&lt;/xt-validation-inline&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;basicNumber&quot;&gt;Number&lt;/label&gt;\n' +
    '    &lt;input id=&quot;basicNumber&quot; name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot;\n' +
    '        min=&quot;0&quot; max=&quot;6&quot;&gt;\n' +
    '    &lt;xt-validation-inline for=&quot;basicNumber&quot;&gt;&lt;/xt-validation-inline&gt;\n' +
    '\n' +
    '    &lt;button type=&quot;submit&quot;&gt;Save&lt;/button&gt;\n' +
    '\n' +
    '&lt;/form&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/presentation.html',
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="inline">Inline Validation</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        Basic inline form validation. Username is required, and email must be a valid email.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form name="inlineForm" xt-form ng-submit="save(inlineForm)" role="form" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="inlineUsername">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="inlineUsername" placeholder="Required field"\n' +
    '                       ng-model="model.username" required>\n' +
    '                <xt-validation-inline for="inlineUsername"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="inlineEmail">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control" id="inlineEmail"\n' +
    '                       placeholder="Must be valid email" required>\n' +
    '                <xt-validation-inline for="inlineEmail"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="inlineNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="inlineNumber"\n' +
    '                       placeholder="Must be between 0 and 6" min="0" max="6">\n' +
    '                <xt-validation-inline for="inlineNumber"></xt-validation-inline>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    '&lt;form name=&quot;inlineForm&quot; xt-form ng-submit=&quot;save(inlineForm)&quot; role=&quot;form&quot; novalidate&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;inlineUsername&quot;&gt;Username&lt;/label&gt;\n' +
    '    &lt;input name=&quot;username&quot; type=&quot;text&quot; class=&quot;form-control&quot;\n' +
    '        id=&quot;inlineUsername&quot; placeholder=&quot;Required field&quot;\n' +
    '        ng-model=&quot;model.username&quot; required&gt;\n' +
    '    &lt;xt-validation-inline for=&quot;inlineUsername&quot;&gt;&lt;/xt-validation-inline&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;inlineEmail&quot;&gt;Email&lt;/label&gt;\n' +
    '    &lt;input name=&quot;email&quot; type=&quot;email&quot; ng-model=&quot;model.email&quot;\n' +
    '        class=&quot;form-control&quot; id=&quot;inlineEmail&quot;\n' +
    '        placeholder=&quot;Must be valid email&quot; required&gt;\n' +
    '    &lt;xt-validation-inline for=&quot;inlineEmail&quot;&gt;&lt;/xt-validation-inline&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;inlineNumber&quot;&gt;Number&lt;/label&gt;\n' +
    '    &lt;input name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot;\n' +
    '        class=&quot;form-control&quot; id=&quot;inlineNumber&quot;\n' +
    '        placeholder=&quot;Must be between 0 and 6&quot; min=&quot;0&quot; max=&quot;6&quot;&gt;\n' +
    '    &lt;xt-validation-inline for=&quot;inlineNumber&quot;&gt;&lt;/xt-validation-inline&gt;\n' +
    '\n' +
    '    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;\n' +
    '&lt;/form&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="summary">Validation summary</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm comes with a built-in validation summary directive which lists all validation errors in one control\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form xt-form name="form2" class="form" role="form" ng-submit="save(form2)" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="username2">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="username2" ng-model="model.username"\n' +
    '                       required>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="email2">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control" id="email2">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="number2">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="number2"\n' +
    '                       placeholder="Must be between 0 and 4" min="0" max="4">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <xt-validation-summary></xt-validation-summary>\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    '&lt;form xt-form name=&quot;form2&quot; class=&quot;form&quot; role=&quot;form&quot; ng-submit=&quot;save(form2)&quot; novalidate&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;username2&quot;&gt;Username&lt;/label&gt;\n' +
    '    &lt;input name=&quot;username&quot; type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;username2&quot;\n' +
    '        ng-model=&quot;model.username&quot; required&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;email2&quot;&gt;Email&lt;/label&gt;\n' +
    '    &lt;input name=&quot;email&quot; type=&quot;email&quot; ng-model=&quot;model.email&quot;\n' +
    '        class=&quot;form-control&quot; id=&quot;email2&quot;&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;number2&quot;&gt;Number&lt;/label&gt;\n' +
    '    &lt;input name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot;\n' +
    '        class=&quot;form-control&quot; id=&quot;number2&quot;\n' +
    '        placeholder=&quot;Must be between 0 and 4&quot; min=&quot;0&quot; max=&quot;4&quot;&gt;\n' +
    '\n' +
    '    &lt;xt-validation-summary&gt;&lt;/xt-validation-summary&gt;\n' +
    '    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;\n' +
    '&lt;/form&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '<div class="docs-section">\n' +
    '    <h1 id="tooltip">Tooltip Validation</h1>\n' +
    '\n' +
    '    <h1 id="tooltip-standard">Standard</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm supports tooltip validations when integrated with the twitter bootstrap tooltip plugin or equivalent\n' +
    '        <code>$.fn.tooltip()</code> plugin. The following example uses the \'focusedAndDirtyOrSubmitted\' strategy with\n' +
    '        focusError option set. These options ensure that the message is only shown when focused and will auto-focus\n' +
    '        on submit. For more information on strategies and other form options see <a href="strategy-basic">Strategies</a>.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form xt-form strategy="focusedAndDirtyOrSubmitted" focus-error="true" name="tooltipForm" class="form"\n' +
    '              role="form" ng-submit="save(tooltipForm)" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipUsername">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="tooltipUsername" ng-model="model.username"\n' +
    '                       xt-validation-tooltip required>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipEmail">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control" xt-validation-tooltip\n' +
    '                       id="tooltipEmail">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="tooltipNumber"\n' +
    '                       xt-validation-tooltip placeholder="Must be between 0 and 4" min="0" max="4">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '&lt;form xt-form strategy=&quot;focusedAndDirtyOrSubmitted&quot; focus-error=&quot;true&quot;\n' +
    '    name=&quot;tooltipForm&quot; role=&quot;form&quot; ng-submit=&quot;save(tooltipForm)&quot;\n' +
    '    novalidate&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;u&quot;&gt;Username&lt;/label&gt;\n' +
    '    &lt;input name=&quot;username&quot; id=&quot;u&quot; ng-model=&quot;model.username&quot;\n' +
    '        xt-validation-tooltip required&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;e&quot;&gt;Email&lt;/label&gt;\n' +
    '    &lt;input name=&quot;email&quot; id=&quot;e&quot; type=&quot;email&quot; ng-model=&quot;model.email&quot;\n' +
    '         xt-validation-tooltip&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;n&quot;&gt;Number&lt;/label&gt;\n' +
    '    &lt;input name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot;\n' +
    '        id=&quot;n&quot; xt-validation-tooltip placeholder=&quot;Must be between 0 and 4&quot;\n' +
    '        min=&quot;0&quot; max=&quot;4&quot;&gt;\n' +
    '\n' +
    '    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;\n' +
    '&lt;/form&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '    <h1 id="tooltip-hover">Hover</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        The tooltip trigger can be overridden on the form element by setting the tooltip-trigger attribute.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form xt-form strategy="invalid" focus-error="true" name="tooltipForm" class="form"\n' +
    '              role="form" ng-submit="save(tooltipForm)" novalidate tooltip-trigger="hover manual">\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipUsername">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="tooltipUsername" ng-model="model.username"\n' +
    '                       xt-validation-tooltip required>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipEmail">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control" xt-validation-tooltip\n' +
    '                       id="tooltipEmail">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltipNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control" id="tooltipNumber"\n' +
    '                       xt-validation-tooltip placeholder="Must be between 0 and 4" min="0" max="4">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '&lt;form xt-form strategy=&quot;invalid&quot; focus-error=&quot;true&quot;\n' +
    '    name=&quot;tooltipForm&quot; role=&quot;form&quot; ng-submit=&quot;save(tooltipForm)&quot;\n' +
    '    novalidate tooltip-trigger=&quot;hover manual&quot;&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;u&quot;&gt;Username&lt;/label&gt;\n' +
    '    &lt;input name=&quot;username&quot; id=&quot;u&quot; ng-model=&quot;model.username&quot;\n' +
    '        xt-validation-tooltip required&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;e&quot;&gt;Email&lt;/label&gt;\n' +
    '    &lt;input name=&quot;email&quot; id=&quot;e&quot; type=&quot;email&quot; ng-model=&quot;model.email&quot;\n' +
    '         xt-validation-tooltip&gt;\n' +
    '\n' +
    '    &lt;label for=&quot;n&quot;&gt;Number&lt;/label&gt;\n' +
    '    &lt;input name=&quot;number&quot; type=&quot;number&quot; ng-model=&quot;model.number&quot;\n' +
    '        id=&quot;n&quot; xt-validation-tooltip placeholder=&quot;Must be between 0 and 4&quot;\n' +
    '        min=&quot;0&quot; max=&quot;4&quot;&gt;\n' +
    '\n' +
    '    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Save&lt;/button&gt;\n' +
    '&lt;/form&gt;\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '    <h2 id="tooltip-container">Separate Tooltip Element</h2>\n' +
    '\n' +
    '    <p>\n' +
    '        Supports tooltips on an element other than the input. This can come in handy when building custom controls or\n' +
    '        when flexibility of placement is needed as seen below.\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form name="tooltip2form" xt-form class="form" role="form" ng-submit="save(tooltip2form)" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="tooltip2Email">Email</label>\n' +
    '                <input type="email" class="form-control" id="tooltip2Email" ng-model="model.email" required\n' +
    '                       placeholder="The monkey helps with errors!">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '            <div class="clearfix">\n' +
    '                <img class="pull-right" xt-validation-tooltip="tooltip2Email" height="90" placement="left"\n' +
    '                     style="padding: 5px;"\n' +
    '                     width="110" alt="Monkey pic" src="img/monkey.jpeg">\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/strategies.html',
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="strategies" class="page-header">Validation Strategies</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm introduces the concept of a "validation strategy" which defines when to show/hide validation messages\n' +
    '        to the user. An example of a strategy could be "when the element is dirty and focused". Strategies remove this\n' +
    '        logic from the view itself allowing the framework to decide when to show/hide messages.\n' +
    '    </p>\n' +
    '\n' +
    '    <h2 id="strategies-inbuilt">Inbuilt Strategies</h2>\n' +
    '\n' +
    '    <p>\n' +
    '        XtForm provides a few commonly used strategies out of the box.\n' +
    '    </p>\n' +
    '\n' +
    '    <table class="table">\n' +
    '        <thead>\n' +
    '        <tr>\n' +
    '            <th>Strategy</th>\n' +
    '            <th></th>\n' +
    '        </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '        <tr>\n' +
    '            <td>submitted</td>\n' +
    '            <td>Only if form has been submitted</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>dirty</td>\n' +
    '            <td>Only if the element in dirty</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>dirtyOrSubmitted</td>\n' +
    '            <td>Only if the element is dirty or form submitted</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>focusedAndDirtyOrSubmitted</td>\n' +
    '            <td>Both focused and (dirty or submitted)</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '            <td>dirtyAndFocusedOrSubmitted</td>\n' +
    '            <td>Both (dirty and focused) or submitted</td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '\n' +
    '    <h2 id="strategies-custom">Custom Strategies</h2>\n' +
    '\n' +
    '    <p>\n' +
    '        There are configuration methods for creating custom strategies\n' +
    '    </p>\n' +
    '\n' +
    '    <div class="highlight">\n' +
    '        <pre class="prettyprint">\n' +
    '\n' +
    'angular.module(\'sample\').config(function (xtFormConfigProvider) {\n' +
    '\n' +
    '    // Add custom validation strategy\n' +
    '    xtFormConfigProvider.addValidationStrategy(\'customStrategy\', function (form, ngModel) {\n' +
    '        return ngModel.$invalid && (form.$submitted || ngModel.$dirty);\n' +
    '    });\n' +
    '});\n' +
    '\n' +
    '<!-- Add as custom strategy -->\n' +
    '&lt;form strategy=&quot;customStrategy&quot;&gt;\n' +
    '    ...\n' +
    '&lt;/form&gt;\n' +
    '\n' +
    '// Set as default for all forms\n' +
    'angular.module(\'sample\').config(function (xtFormConfigProvider) {\n' +
    '\n' +
    '    // Add custom validation strategy\n' +
    '    xtFormConfigProvider.setDefaultValidationStrategy(\'customStrategy\');\n' +
    '});\n' +
    '        </pre>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('sample').run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/styling.html',
    '<div class="docs-section">\n' +
    '\n' +
    '    <h1 id="styling" class="page-header">Styling</h1>\n' +
    '\n' +
    '    <p>\n' +
    '        All partials are templated so that they can be overridden. For example the following form has it\'s validation\n' +
    '        summary\n' +
    '        template replaced.\n' +
    '    </p>\n' +
    '\n' +
    '    <script type="text/ng-template" id="testTemplate.html">\n' +
    '        <div style="border: 1px solid #ccc; padding: 40px; margin: 10px auto; text-align: center;">\n' +
    '            <div>\n' +
    '                <span data-ng-hide="showErrors" style="font-size: 60px; color: green;" class="glyphicon glyphicon-ok" aria-hidden="true"></span>\n' +
    '                <span data-ng-show="showErrors" style="font-size: 60px; color: red;" class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n' +
    '            </div>\n' +
    '            <div style="font-size: 36px;" data-ng-show="showErrors">\n' +
    '                <span data-ng-repeat="error in errors">\n' +
    '                    {{error.label}}<span data-ng-hide="$last">,</span>\n' +
    '                </span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </script>\n' +
    '\n' +
    '    <div class="xt-example" data-ng-controller="sampleFormController">\n' +
    '        <form xt-form name="stylingForm" strategy="invalid" class="form" role="form" ng-submit="save(stylingForm)" novalidate>\n' +
    '            <div class="form-group">\n' +
    '                <label for="stylingFormUsername">Username</label>\n' +
    '                <input name="username" type="text" class="form-control" id="stylingFormUsername"\n' +
    '                       ng-model="model.username"\n' +
    '                       required>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="stylingFormEmail">Email</label>\n' +
    '                <input name="email" type="email" ng-model="model.email" class="form-control"\n' +
    '                       id="stylingFormEmail">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label for="stylingFormNumber">Number</label>\n' +
    '                <input name="number" type="number" ng-model="model.number" class="form-control"\n' +
    '                       id="stylingFormNumber"\n' +
    '                       placeholder="Must be between 0 and 4" min="0" max="4">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <xt-validation-summary template-url="testTemplate.html"></xt-validation-summary>\n' +
    '                <button type="submit" class="btn btn-primary">Save</button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>');
}]);
