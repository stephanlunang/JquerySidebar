
/*
$('html').click(function() {
  //Hide the menus if visible
});

$('.leftnav').click(function(event){
    event.stopPropagation();
});
*/
if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('sidebar',['angular-meteor']);
 
  angular.module('sidebar').controller('SidebarCtrl', ['$scope',
    function ($scope) {
      $('.menubutton').on('click', function (){
        $('#BanditDiv').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function(){
            $(this).removeClass('animated shake')
          });
      }); 
  }]);
}


if (Meteor.isClient) {
}