angular.module( 'galleryTantalus', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'gallery', {
    url: '/gallery',
    views: {
      "main": {
        controller: 'GalleryCtrl',
        templateUrl: 'gallery/gallery.tpl.html'
      }
    },
    data:{ pageTitle: 'Galería' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'GalleryCtrl', function GalleryCtrl( $scope,$interval,$timeout ) {

//the body must have scroll:
$('body').css({overflow:'visible'});

  $('#Container').mixItUp({
                          	animation: {
                          		duration: 400,
                          		effects: 'fade stagger(34ms)',
                          		easing: 'ease'
                          	}
                          });
     jQuery('.nailthumb-container').nailthumb();
    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
        };
                             //FILTER WITH : https://mixitup.kunkalabs.com/docs/#method-filter
                             // THUMBNAIL WITH: http://www.garralab.com/nailthumb-howitworks.php
})
.controller('ModalInstanceCtrl', function ModalInstanceCtrl(){

});