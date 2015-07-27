describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope, $state;

    beforeEach( module( 'ngOutClick' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope, _$state_ ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      $state = _$state_;
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope, $state: $state });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));
  });
});
