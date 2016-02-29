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
  'plusOne',
  'galleryTantalus'
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
.controller( 'HomeCtrl', function HomeController( $scope,$interval,$timeout ) {











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
	
  
	$scope.characters= [
	{name: "BluestGreen",
    img: "assets/img/caras/bluest1.png",
    frame: "assets/img/frames/bluest-frame.jpg"},
    {name: "FedeSith",
    img: "assets/img/caras/fede1.png",
     frame: "assets/img/frames/fede-frame.jpg"},
    {name: "Meyen",
    img: "assets/img/caras/mey1.png",
     frame: "assets/img/frames/mey-frame.jpg"},
    {name: "Nemure",
    img: "assets/img/caras/nemure1.png",
     frame: "assets/img/frames/nemure-frame.jpg"},
    {name: "Quaixa",
    img: "assets/img/caras/quaixa1.png",
      frame: "assets/img/frames/quaixa-frame.jpg"},
    { name: "Raptor",
    img: "assets/img/caras/raptor1.png",
     frame: "assets/img/frames/raptor-frame.jpg"
    },
    { name: "Grupo",
        img: "assets/img/caras/grupo.png",
       frame: "assets/img/frames/bluest-frame.jpg"
        }];
	//vars
	
	$scope.loadedMenu=false;
	$scope.cursoronstart=false;
	$scope.screenContent = "home/intro.tpl.html";

	$scope.loadMenu= function () {

	$("#intro").effect("fade",1000);
	$timeout(function(){ $scope.screenContent = "home/menu_screen.tpl.html";
	$timeout(function(){
		$("#screen-menu").effect("fade",1000);
	},5);

	},1000);

	};
	$scope.frames = {
	"Header":{
	"pos":1,
	"id":"frame-0",
	"top":0},
	"BluestGreen":{
	"pos":2,
	"id":"frame-1",
	    "top":400
	},
    "FedeSith":{
    "pos":3,
    "id":"frame-1",
    "top":400}
    ,"Meyen":{
    "pos":4,
    "id":"frame-1",
    "top":400},
   "Nemure":{
   "pos":5,
    "id":"frame-1",
    "top":400},
   "Quaixa":{
   "pos":6,
    "id":"frame-1",
    "top":400},
    "Raptor":{
    "pos":7,
     "id":"frame-1",
    "top":400},
     "Grupo":{
     "pos":8,
   "id":"frame-1",
    "top":400}
	};
	//click menu to each section
	$scope.goTo=function(name){
	$(".goto"+$scope.frames[name].pos).click();
	};

});
//jquery code 

