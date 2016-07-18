var products = [
    {
        id:'1',
        name: "headphone 1",
        img: "../img/earbuds-black.png"
    },
    {
        id:'2',
        name: "headphone G3",
        img: "../img/g8.png"
    },
    {
        id:'3',
        name: "headphone G4",
        img: "../img/g3.png"
    },
    {
        id:'4',
        name: "headphone G5",
        img: "../img/g4.png"
    },
    {
        id:'5',
        name: "headphone G4",
        img: "../img/g5.png"
    },
    {
        id:'6',
        name: "headphone G4",
        img: "../img/g6.png"
    },
    {
        id:'7',
        name: "headphone G4",
        img: "../img/g7.png"
    },
    {
        id:'8',
        name: "headphone G4",
        img: "../img/g8.png"
    },
];






angular.module('routerApp').service('mainService',function(){

    this.getProduct = function(id) {
       for(var i = 0; i < products.length; i++) {
           if(products[i].id === id) {
               return products[i];
           }

        }

}

    this.getAllProducts = function() {
        return products;
    }

});