'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2104',
            time: '10:20am',
            location:{
                address:'Google Headqrtrs',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'https://angularjs.org/img/AngularJS-large.png',
            sessions:[
                {
                    name:'Session one',
                    creatorName:'Bob Bobson',
                    duration:'1hr',
                    level:'advanced',
                    abstract:'sdflsdb skldjfhlk sdfkjsd kjsdfkj hsdkfjlksjd klsdjf'
                },
                {name:'Session two'},
                {name:'Session the third'}
            ]
        }
    }
);