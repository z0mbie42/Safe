// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'btford.socket-io',
  'ngLodash',
  'ngRoute'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.notifications', {
    url: '/notifications',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/tab-notifications.html',
        controller: 'NotificationsCtrl'
      }
    }
  })
    .state('tab.notification-detail', {
      url: '/notifications/:notificationId',
      views: {
        'tab-notifications': {
          templateUrl: 'templates/notification-detail.html',
          controller: 'NotificationDetailCtrl'
        }
      }
    })

  .state('tab.profiles', {
      url: '/profiles',
      views: {
        'tab-profiles': {
          templateUrl: 'templates/tab-profiles.html',
          controller: 'ProfilesCtrl'
        }
      }
    })
    .state('tab.profile-detail', {
      url: '/profiles/:profileId',
      views: {
        'tab-profiles': {
          templateUrl: 'templates/profile-detail.html',
          controller: 'ProfileDetailCtrl'
        }
      }
    })

  .state('tab.opportunities', {
    url: '/opportunities',
    views: {
      'tab-opportunities': {
        templateUrl: 'templates/tab-opportunities.html',
        controller: 'OpportunitiesCtrl'
      }
    }
  })
    .state('tab.opportunity-new', {
      url: '/opportunities/new',
      views: {
        'tab-opportunities': {
          templateUrl: 'templates/opportunity-new.html',
          controller: 'OpportunityNewCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/notifications');

});
