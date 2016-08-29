angular.module('myapp', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('Mycontrol1', ['$scope', function($scope){
$scope.welcomemessage="If you want the best  ride sharing experience,   Then Morrouba is for you  Signup and Enjoy";

  
}])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

   	 .state('home',{
   	  abstract:true,
      url: '/home',
      templateUrl:'home/home.html',
    
  })
   	  .state('home.homes',{
   	 url: '/homes',
   	  views:{
   	  	'tab-homes':
   	  	{
   	  	 templateUrl:'home/homes.html',
   	  	}
   	  }
 
  }).state('home.account',{
   	url: '/account',
   	  views:{
   	  	'tab-account':
   	  	{
   	  	 templateUrl:'home/account.html',
   	  	}
   	  }
 
  })
   	 .state('app',{
   	 	abstract:true,
      url: '/app',
      templateUrl:'layout/menu.html',
    
  }) 
   	 .state('app.menuhome',{
      url: '/menuhome',
      views:{
      	'maincontent':{
      		  templateUrl:'layout/menuhome.html',
      	}
      }
    
    
  })
   	 .state('app.login',{
      url: '/login',
      views:{
      	'maincontent':{
      		  templateUrl:'layout/login.html',
      	}
      }
    
    
  })
   	 .state('app.register',{
      url: '/register',
      views:{
      	'maincontent':{
      		  templateUrl:'layout/register.html',
      	}
      }
    
    
  }) .state('app.leaderboard',{
      url: '/leaderboard/:id',
      views:{
      	'maincontent':{
      		  templateUrl:'layout/leaderboard.html',
      	}
      }
    
    
  })
   	 ;
   $urlRouterProvider.otherwise('/home/homes');

  });