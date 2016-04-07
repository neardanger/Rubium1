angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'C# for me!', featured: true, published: new Date('10/5/2013')},
    {name: 'C# for the dank memer', featured: true, published: new Date('10/12/2013')},
    {name: 'SupeRSSSS', featured: false, published: new Date('10/1/2013')},
    {name: 'THINK IM PRETTY COOL', featured: false, published: new Date('7/12/2013')},
    {name: 'Pedantics', featured: true, published: new Date('1/1/2013')},
    {name: 'How to be cool in code', featured: true, published: new Date('10/13/2013')},
    {name: 'How to <h1>', featured: true, published: new Date('3/1/2013')},
    {name: '0-60', featured: true, published: new Date('2/1/2013')},
    {name: 'REAL QUICK', featured: true, published: new Date('10/7/2013')},
    {name: 'YOU"RE IN GFOR A TREAT', featured: false, published: new Date('8/1/2013')},
    {name: 'Telling the C', featured: false, published: new Date('11/1/2013')},
    {name: "Im tagged!", featured: true, published: new Date('10/13/2013')},
    {name: 'Code Reviews', featured: false, published: new Date('10/1/2013')},
    {name: 'Science with programming', featured: true, published: new Date('2/15/2013')},
    {name: 'Coding for fun', featured: true, published: new Date('7/1/2013')}
  ]

});
