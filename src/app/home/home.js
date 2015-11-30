/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope,$interval ) {
	//jquery code
	/*$('#header')
	.mouseover(function(){
		$("#monitor").addClass('girado2');
	})
	.mouseout(function(){
		$("#monitor").removeClass('girado2');
	});*/
	$scope.anim1=true;
	$interval(function(){ //loop cursor animation
		if ($scope.anim1) {
			$(".cursor").animate({width:58,height:32},50);
		} else {
			$(".cursor").animate({width:53,height:29},50);
		}
		$scope.anim1=!$scope.anim1;
		
	},500);
	
	//red dot boton tele
	$scope.redDotAnim=true;
	$interval(function(){ //loop cursor animation
		if ($scope.redDotAnim) {
			$(".red-dot").removeClass("red-dot-shadow1").addClass("red-dot-shadow2");
		} else {
			$(".red-dot").removeClass("red-dot-shadow2").addClass("red-dot-shadow1");
		}
		$scope.redDotAnim=!$scope.redDotAnim;
		
	},1000);
	
  
	
	//vars
	
	$scope.loadedMenu=false;
	$scope.cursoronstart=false;
});
//jquery code 
