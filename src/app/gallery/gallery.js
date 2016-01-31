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
  $('#Container').mixItUp({
                          	animation: {
                          		duration: 400,
                          		effects: 'fade stagger(34ms)',
                          		easing: 'ease'
                          	}
                          });
                             jQuery('.nailthumb-container').nailthumb();

                             //FILTER WITH : https://mixitup.kunkalabs.com/docs/#method-filter
                             // THUMBNAIL WITH: http://www.garralab.com/nailthumb-howitworks.php
});