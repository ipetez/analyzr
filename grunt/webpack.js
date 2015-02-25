'use strict';

module.exports = function (path, webpack) {
  return {
    src: {
      entry: {
        vendor: path.resolve(__dirname, '../src/modules/vendor.js'),
        app: path.resolve(__dirname, '../src/modules/app.js')
      },
      output: {
        path: path.resolve(__dirname, '../src/bundles/'),
        publicPath: 'bundles/',
        filename: '[name].js'
      },
      resolve: {
        alias: {
          'moduleDir':            path.resolve(__dirname, '../src/modules'),
          'componentDir':         path.resolve(__dirname, '../src/components'),
          'bowerDir':             path.resolve(__dirname, '../bower_components'),

          'angular':              path.resolve(__dirname, '../bower_components/angular/angular'),
          'angularCookies':       path.resolve(__dirname, '../bower_components/angular-cookies/angular-cookies'),
          'angularAnimate':       path.resolve(__dirname, '../bower_components/angular-animate/angular-animate'),
          'angularSanitize':      path.resolve(__dirname, '../bower_components/angular-sanitize/angular-sanitize'),
          'angularTouch':         path.resolve(__dirname, '../bower_components/angular-touch/angular-touch'),
          'angularBootstrap':     path.resolve(__dirname, '../bower_components/angular-bootstrap/ui-bootstrap-tpls'),
          'angularUiRouter':      path.resolve(__dirname, '../bower_components/angular-ui-router/release/angular-ui-router'),
          'angularUiJq':          path.resolve(__dirname, '../bower_components/angular-ui-utils/jq'),

          'velocity':             path.resolve(__dirname, '../bower_components/velocity/velocity'),
          'velocityUi':           path.resolve(__dirname, '../bower_components/velocity/velocity.ui'),

          'scriptJs':             path.resolve(__dirname, '../bower_components/scriptjs/dist/script'),
          'underscore':           path.resolve(__dirname, '../bower_components/underscore/underscore'),
          'moment':               path.resolve(__dirname, '../bower_components/moment/moment'),
          'jquery':               path.resolve(__dirname, '../bower_components/jquery/dist/jquery'),
          'jqueryUi':             path.resolve(__dirname, '../bower_components/jquery-ui/dist/jquery'),
          'modernizr':            path.resolve(__dirname, '../bower_components/modernizr/modernizr'),
          'screenfull':           path.resolve(__dirname, '../bower_components/screenfull/dist/screenfull'),
          'select2':              path.resolve(__dirname, '../bower_components/select2/select2'),
          'slimscroll':           path.resolve(__dirname, '../bower_components/slimscroll/jquery.slimscroll'),
          'summernote':           path.resolve(__dirname, '../bower_components/summernote/dist/summernote'),
          'inputPlaceholder':     path.resolve(__dirname, '../bower_components/jquery-placeholder/jquery.placeholder'),
          'sparkline':            path.resolve(__dirname, '../bower_components/jquery.sparkline.build/dist/jquery.sparkline'),
          'bootstrap':            path.resolve(__dirname, '../bower_components/bootstrap/dist/js/bootstrap'),

          'jvectormap':           path.resolve(__dirname, '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min'),
          'jvectormapMill':       path.resolve(__dirname, '../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en'),

          'datatables':           path.resolve(__dirname, '../bower_components/datatables/media/js/jquery.dataTables'),
          'datatablesBootstrap':  path.resolve(__dirname, '../bower_components/datatables-bootstrap3/BS3/assets/js/datatables'),

          'fullcalendar':         path.resolve(__dirname, '../bower_components/fullcalendar/dist/fullcalendar'),
          'gcal':                 path.resolve(__dirname, '../bower_components/fullcalendar/dist/gcal'),

          'flot':                 path.resolve(__dirname, '../bower_components/jquery-flot/jquery.flot'),
          'flotResize':       path.resolve(__dirname, '../bower_components/jquery-flot/jquery.flot.resize.js'),
          'flotCategories':       path.resolve(__dirname, '../bower_components/jquery-flot/jquery.flot.categories'),
          'flotTime':             path.resolve(__dirname, '../bower_components/jquery-flot/jquery.flot.time'),
          'flotPie':              path.resolve(__dirname, '../bower_components/jquery-flot/jquery.flot.pie'),
          'flotTooltip':          path.resolve(__dirname, '../bower_components/flot.tooltip/js/jquery.flot.tooltip'),
          'flotSpline':           path.resolve(__dirname, '../bower_components/flot-spline/js/jquery.flot.spline'),

          'easyPieChart':         path.resolve(__dirname, '../bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart'),

          'flow':                 path.resolve(__dirname, '../bower_components/flow.js/dist/flow'),
          'ngFlow':               path.resolve(__dirname, '../bower_components/ng-flow/dist/ng-flow')
        },
        extensions: ['', '.js', '.json']
      },

      plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
      ],
      
      module: {
        loaders: [
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?prefix=font/' }
        ]
      }
    },
    docs: {
      entry: {
        vendor: path.resolve(__dirname, '../docs/scripts/vendor.js'),
        app: path.resolve(__dirname, '../docs/scripts/app.js')
      },
      output: {
        path: path.resolve(__dirname, '../docs/bundles/'),
        publicPath: 'bundles/',
        filename: '[name].js'
      },
      resolve: {
        alias: {
          'angular':              path.resolve(__dirname, '../bower_components/angular/angular'),
          'angularAnimate':       path.resolve(__dirname, '../bower_components/angular-animate/angular-animate'),
          'angularUiRouter':      path.resolve(__dirname, '../bower_components/angular-ui-router/release/angular-ui-router'),
          'jquery':               path.resolve(__dirname, '../bower_components/jquery/dist/jquery')
        }
      }
    }
  };
};