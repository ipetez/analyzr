'use strict';

/**
 * Navsidebar
 * @module: app.core
 * @desc: Application sidebar menu
 */
module.exports = function (module) {
  module.directive('navSidebar', ['$timeout', function ($timeout) {
    return {
      restrict: 'C',
      scope: {},
      link: function($scope, iElm, iAttrs) {
        $timeout(function () {
          var isBusy = false;

          var toggleMenu = function () {
            var $this = jQuery(this),
                $navGroup = $this.parent('.nav-group'),
                $navMenu = $this.next('.nav-submenu');

            /** store menu height before animation begin */
            $navMenu.data('height', $navMenu.height());

            if($navGroup.hasClass('active')) {
              /** prevent rapid clicking */
              if(isBusy) { return false; }

              /** close menu */
              closeMenu($navMenu, $navGroup);
            } else {
              /** prevent rapid clicking */
              if(isBusy) { return false; }
              
              /** close other active menu */
              jQuery(iElm.children('.nav-group')).each(function (index, value) {
                if(jQuery(value).hasClass('active')) {
                  jQuery(value).removeClass('active');
                  closeMenu(jQuery(value).children('.nav-submenu'), jQuery(value));
                }
              });

              /** open menu */
              openMenu($navMenu, $navGroup);
            }
          };

          var openMenu = function ($navmenu, $navgroup) {
            $navmenu
              .css({ height: 0 })
              .velocity({ height: $navmenu.data('height') }, {
                duration: 300,
                begin: function () {
                  $navgroup.addClass('active');
                  isBusy = true;
                },
                complete: function () {
                  $navmenu.removeAttr('style');
                  isBusy = false;
                }
              }, 'ease-in-out');
          };

          var closeMenu = function ($navmenu, $navgroup) {
            $navmenu
              .css({ display: 'block', height: $navmenu.data('height') })
              .velocity({ height: 0 }, {
                duration: 300,
                begin: function () {
                  $navgroup.removeClass('active');
                  isBusy = true;
                },
                complete: function () {
                  $navmenu.removeAttr('style');
                  isBusy = false;
                }
              }, 'ease-in-out');
          };

          iElm.on('click', '.nav-toggle', toggleMenu);
        });
      }
    };
  }]);
};