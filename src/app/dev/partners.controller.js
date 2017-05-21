(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('PartnersController', PartnersController);

  /** @ngInject */
  function PartnersController() {

    var vm = this;

  
 


    vm.nodes = [
      {
        id:"ELIXIR Belgium",
        country:"Belgium",
        imageSrc: "assets/images/Belgium.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/belgium"
      },
      {
        id:"EMBL-EBI",
        country:"UK",
        imageSrc: "assets/images/UK.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/embl-ebi"
      },
      {
        id:"ELIXIR Spain",
        country:"Spain",
        imageSrc: "assets/images/Spain.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/spain"
      },
      {
        id:"ELIXIR Switzerland",
        country:"Switzerland",
        imageSrc: "assets/images/Switzerland.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/switzerland"
      },
      {
        id:"ELIXIR Netherlands",
        country:"Netherlands",
        imageSrc: "assets/images/Netherlands.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/netherlands"
      },
      {
        id:"ELIXIR Finland",
        country:"Finland",
        imageSrc: "assets/images/Finland.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/finland"
      },
      {
        id:"ELIXIR France",
        country:"France",
        imageSrc: "assets/images/France.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/france"
      },
      {
        id:"ELIXIR Sweden",
        country:"Sweden",
        imageSrc: "assets/images/Sweden.png",
        url:"https://www.elixir-europe.org/about-us/who-we-are/nodes/sweden"
      }
    ];



    vm.leader = [
      {
        id: "member-ss",
        name: "Serena Scollen",
        credentials: "PhD.",
        imageSrc: "assets/images/team/sscollen.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/UK.png",
        linkedIn : ""
      },
      { 
        id: "member-il",
        name: "Ilkka Lappalainen",
        credentials: "PhD.",
        imageSrc: "assets/images/team/ilappalainen.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        linkedIn : "",
        node: "assets/images/UK.png",
      }, 
      { 
        id: "member-jr",
        name: "Jordi Rambla",
        credentials: "PhD.",
        imageSrc: "assets/images/team/jrambla.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
          node: "assets/images/Spain.png",
        linkedIn : ""
      },
      { 
        id: "member-bp",
        name: "Bengt Persson",
        credentials: "PhD.",
        imageSrc: "assets/images/team/bpersson.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
          node: "assets/images/Sweden.png",
        linkedIn : ""
      },
      { 
        id: "member-ds",
        name: "Dylan Spalding",
        credentials: "PhD.",
        imageSrc: "assets/images/team/dspalding.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/UK.png",
        linkedIn : ""
      },
      { 
        id: "member-nj",
        name: "Niclas Jareborg",
        credentials: "PhD.",
        imageSrc: "assets/images/team/njareborg.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Sweden.png",
        linkedIn : ""
      },
      { 
        id: "member-ml",
        name: "Mikael Linden",
        credentials: "PhD.",
        imageSrc: "assets/images/team/mlinden.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Finland.png",
        linkedIn : ""
      },
      { 
        id: "member-tn",
        name: "Tommi Nyrönen",
        credentials: "PhD.",
        imageSrc: "assets/images/team/tnyronen.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Finland.png", 
        linkedIn : ""
      },
      { 
        id: "member-mb",
        name: "Michael Baudis",
        credentials: "PhD.",
        imageSrc: "assets/images/team/mbaudis.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Switzerland.png",
        linkedIn : ""
      },
      { 
        id: "member-ms",
        name: "Morris Swertz",
        credentials: "PhD.",
        imageSrc: "assets/images/team/mswertz.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Switzerland.png",
        linkedIn : ""
      },
      { 
        id: "member-jl",
        name: "Jarno Laitinen",
        credentials: "PhD.",
        imageSrc: "assets/images/team/login.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/Finland.png", 
        linkedIn : ""
      },
       { 
        id: "member-mn",
        name: "Macha Nikolski",
        credentials: "PhD.",
        imageSrc: "assets/images/team/login.jpg",
        title: "",
        description :
          [
            "bla bla bla",

            "bla bla bla"
          ],
        node: "assets/images/France.png",
        linkedIn : ""
      },



    ];
    vm.activeMemberId = vm.leader[0].id;



    activate();

    ///////////

    function activate() {
    }

  }

})();
