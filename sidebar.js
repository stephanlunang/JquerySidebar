if (Meteor.isClient) { 
  angular.module('sidebar',['angular-meteor']);
 
  angular.module('sidebar').controller('SidebarCtrl', ['$scope',
    function ($scope) {
      function DeployMenu (callback){
        $('.menubutton').on('click', function (){
          $('.leftnav').css({"box-shadow" : "2px 2px 2px #888888"});
          $('.leftnav').animate({left : "0px"}, 500, function(){
            $('.main').click(function() {
              $('.leftnav').animate({left: "-302px"}, 500);
              $('.leftnav').css({"box-shadow" : "none"});
            });
            $('.leftnav').click(function(event){
              event.stopPropagation();
            }); 
          });
        });    
      }
      DeployMenu();
  }]);
}