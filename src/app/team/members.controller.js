(function() {
  'use strict';

  angular
    .module('websiteNew')
    .controller('MembersController', MembersController);

  /** @ngInject */
  function MembersController() {

    var vm = this;

    vm.members = [
      {
        id: "member-mf",
        name: "Marc Fiume",
        credentials: "PhD.",
        imageSrc: "assets/images/team/mfiume.jpg",
        title: "Chief Executive Officer, Co-founder",
        description :
          [
            "Marc received his PhD. in Computer Science from the University of Toronto, where " +
            "he developed novel techniques for genomic data storage, analysis, and visualization. " +
            "He has developed a number of end-user genomics applications, including one of the first " +
            "and most widely used genome browsers for next-generation sequencing data.",

            "Marc is an advocate for privacy, security, and sharing of genomic datasets. \
            He chairs the Beacon Project as part of the Global Alliance for Genomics & Health, \
            which has quickly grown to become one of the largest single resources for genomic data \
            sharing in the world."
          ],
        linkedIn : "https://ca.linkedin.com/in/marc-fiume-6ab69556"
      },

      {
        id: "member-rc",
        name: "Ryan Cook",
        title : "Business Advisor, Investor, Co-founder",
        imageSrc : "assets/images/team/rcook.jpg",
        description : [
          "Ryan is an experienced internet entrepreneur and investor who loves building product and companies.",
          "Ryan built 3 SaaS companies: HealthPages.com (acquired by MTS), MedCafe (acquired by Epocrates), \
          and LookBooks.com (acquired by Trunk Archive). He is also a board member and largest shareholder in \
          Genymotion."
        ],
        linkedIn: "https://www.linkedin.com/in/ryanandrewcook"
      },

      {
        id: "member-jv",
        name: "James Vlasblom",
        credentials: "PhD.",
        title : "Chief Technology Officer",
        imageSrc : "assets/images/team/jvlasblom.jpg",
        description : [
          "James received his PhD. in Biochemistry from the University of Toronto, where he \
          developed various applications of machine learning algorithms to large biological \
          datasets. His expertise combines machine learning, computer science, and biology. \
            James is a full-stack software engineer and leads technical development and best \
          practices at DNAstack."
        ],
        linkedIn : "https://ca.linkedin.com/in/james-vlasblom-2b749440"

      },
      {
        id: "member-mc",
        name : "Miro Cupak",
        credentials : "MSc.",
        title : "Senior Engineer",
        imageSrc : "assets/images/team/mcupak.jpg",
        description : [
          "Miroslav received his Master's in Informatics from Masaryk University, where he developed \
          a massively scalable, distributed database for genetic mutations. His expertise includes \
          distributed systems, middleware, and quality assurance. Miroslav is a senior engineer at \
          DNAstack and leads technical initiatives for the Beacon Project as part of the Global \
          Alliance for Genomics & Health."
        ],
        linkedIn: "https://ca.linkedin.com/in/miro-cupak-958ba0103"

      },

      {
        id: "member-vr",
        name : "Viliam Rockai",
        credentials: "PhD.",
        imageSrc : "assets/images/team/vrockai.jpg",
        title : "Senior Engineer",
        description : [
          " Viliam received his PhD. in Artificial Intelligence from Technical University in Kosice, where \
          he developed an approach to extract concepts and relations from natural language texts. \
          He has a history developing large-scale open-source projects, including at RedHat. \
          Viliam is a Senior Engineer at DNAstack and coordinates frontend development and deployment."
        ],
        linkedIn : "https://sk.linkedin.com/in/rockaiv"
      },

      {
        id: "member-dc",
        name : "Daniel Cardoso",
        imageSrc : "assets/images/team/dcardoso.jpg",
        title : "Frontend Engineer",
        description : [
          "Daniel is an astute frontend developer with experience developing rich user interfaces and \
          experiences. At DNAstack Daniel designs, implements, and tests the end-user application."
        ],
        linkedIn : "https://br.linkedin.com/in/dcardosods/en"
      },

      {
        id: "member-pm",
        name : "Patrick Magee",
        imageSrc : "assets/images/team/pmagee.jpg",
        title : "Software Engineer",
        description : [
          "Patrick received his BSc. in the Life Sciences from Queen’s University where he gained extensive \
          knowledge in genomic analysis through his work for the Queen’s Genomics Lab at Ongwanada. He later \
          worked the lead developer for a clinical pharmacogenomics application at the University of Toronto. \
          Patrick uses his combined knowledge of software development and genomics to help build key \
          components at DNAStack."
        ],
        linkedIn : "https://ca.linkedin.com/in/patrickjmagee"
      },

      {
        id: "member-ja",
        name: "Jyotheeswar Arvind Manickavasagar",
        credentials : "BTech. MSc.",
        imageSrc: "assets/images/team/arvind.jpg",
        title: "Software Engineer",
        description: [
          "Jyotheeswar Arvind received his MSc. in Applied Computing from the University \
          of Toronto. During his applied research internship, he created a cross-platform \
          automated testing tool at UHN. During this time, he and his team won the \
          Facebook and Patient prize at DementiaHack2015, creating an intuitive Android \
          app for people with dementia. At UHN, he also worked on remote health monitoring \
          applications for patients with chronic health conditions. Jyotheeswar Arvind is a \
          full-stack developer at DNAstack."
        ],
        linkedIn: "https://ca.linkedin.com/in/jyotheeswararvind"
      },

      {
        id: "member-mp",
        name : "Milan Panik",
        credentials : "MSc.",
        imageSrc : "assets/images/team/mpanik.jpg",
        title : "Software Engineer",
        description : [
          "Milan received his Master's in Informatics from Masaryk University, where he developed a new \
          optimized solution for existing business processes for the CT division of the Siemens CZ company. \
          Milan is an enthusiast in clean code, design patterns and cutting-edge technologies. With his \
          background in backend, Milan creates and provides distributed systems at DNAstack with a focus on \
          database design and engineering."
        ],
        linkedIn : "https://cz.linkedin.com/in/milan-pánik-37850396/en"
      },

      {
        id: "member-kr",
        name : "Konstantin Richter",
        imageSrc : "assets/images/team/krichter.jpg",
        title : "Growth Strategist",
        description : [
          "Konstantin worked with the largest infrastructure and telecommunication companies in the world, \
          and helped bring multiple software companies from start-up phase to hyper growth and institutional \
          funding rounds/exit. He is a specialist in bringing qualitative skills to get product/market fit, \
          and in finding feedback loops to scale growth in a quantitative way."
        ],
        linkedIn : "https://www.linkedin.com/in/konstantinrichter"
      }

    ];
    vm.activeMemberId = vm.members[0].id;

    activate();

    ///////////

    function activate() {
    }
  }
})();
