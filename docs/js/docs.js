angular.module('sample', ['xtForm'])

    .run(function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "http://connect.facebook.net/en_GB/all.js#xfbml=1&appId=494787353976270";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
        $('.social-links').show();
    })

    .directive('a', function ($anchorScroll, $location) {
        return {
            link: function (scope, element, attrs) {
                if (attrs.href && attrs.href[0] === '#') {
                    element.on('click', function () {
                        $location.hash(attrs.href.substring(1));
                        $anchorScroll();
                    });
                }
            }
        };
    })

    .directive('prettyprint', function () {

        return {
            restrict: 'C',
            link: function () {
                prettyPrint();
            }
        };
    })

    .controller('sampleFormController', function ($scope, $log) {
        angular.extend($scope, {
            model: {},
            save: function (form) {
                if (form.$invalid) {
                    $log.info('The form is invalid');
                    return;
                }

                $log.info('Form is valid, save successful');
            }
        });
    });