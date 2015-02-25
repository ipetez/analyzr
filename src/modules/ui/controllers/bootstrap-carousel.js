'use strict';

/**
 * Bootstrap carousel controller
 * @module: app.ui
 */
module.exports = function (module) {
  module.controller('BsCarouselCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'assets/images/background/src/background' + (slides.length+1) + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }]);
};