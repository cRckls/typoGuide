'use strict';

typoGuide.controller('TypoController',
    function TypoController($scope){
        $scope.typoGuide = {
            showGuidelines:true,
            baseFontSize:16,
            h1Size:35,
            h1:{
                defaultContent: 'Lorem ipsum dolor sit amet',
                fontSize:35,
                fontFamily:'Acme',
                lineHeight:1.5,
                marginTop:0,
                marginBottom:20
            },
            h2:{
                defaultContent: 'Lorem ipsum dolor sit amet',
                fontSize:20,
                fontFamily:'Lobster',
                lineHeight:1.5,
                marginTop:0,
                marginBottom:20
            },
            p:{
                defaultContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at egestas magna, a adipiscing risus. Nulla eleifend condimentum ultricies. Aenean dignissim orci eros, at fringilla neque rhoncus tincidunt. Curabitur eu nunc nisl. Nunc nulla magna, dignissim sit amet arcu sit amet, aliquam ullamcorper nisi. Sed orci mauris, consequat ac velit et, ultricies eleifend ipsum. Nulla nec aliquam tortor. Etiam at sapien eleifend, facilisis mauris at, ultrices mi. Aenean convallis vel ipsum quis adipiscing. Nulla pharetra magna vitae eros scelerisque pellentesque. Proin id nulla eget odio egestas ultricies sed semper odio. Donec ut augue nisi. Morbi rhoncus porttitor velit sed sollicitudin.',
                fontSize:16,
                fontFamily:'Armata',
                lineHeight:1.5,
                marginTop:0,
                marginBottom:20
            },
            elements:[
                {
                    type:0,
                    content: 'Lorem ipsum dolor sit amet'
                },
                {
                    type:1,
                    content: 'Lorem ipsum dolor sit amet'
                },
                {
                    type:2,
                    content:'Lorem ipsum dolor sit amet, orem ipsum dolor sit amet,orem ipsum dolor sit amet.'
                }
            ]


        }

        angular.element(document).ready(function () {
            console.log($scope);
            WebFont.load({
                google: {
                    families: [
                        $scope.typoGuide.h1.fontFamily,
                        $scope.typoGuide.h2.fontFamily,
                        $scope.typoGuide.p.fontFamily
                    ]
                }
            });
        });

        $scope.incrementFontSize = function(type, amount){
            type.fontSize += amount;
        };
        $scope.incrementLineHeight = function(type, amount){
            type.lineHeight += amount;
        };
        $scope.incrementMarginTop = function(type, amount){
            type.marginTop += amount;
        };
        $scope.incrementMarginBottom = function(type, amount){
            type.marginBottom += amount;
        };

        $scope.addGoogleFont = function(fontName){
            WebFont.load({
                google: {
                    families: [fontName]
                }
            });
        }

    })