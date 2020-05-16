import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rakesh Kumar",
  title: "Hi all, I'm Rakesh",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building scalable Web applications and implementing Machine Learning models to solve real world problems."),
  resumeLink: "https://drive.google.com/open?id=1cRQ2R1ZgaY6_q_bvVmCFKNXstWtwaeWO"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/rakeshkhatri1",
  linkedin: "https://www.linkedin.com/in/rakeshkumar235/",
  gmail: "rakeshkhatri235@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100021221318897"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "A PASSIONATE SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Data Structures & Algorithms | Competitive Programming"),
    emoji("⚡ Machine Learning & Optimizations"),
    emoji("⚡ Full Stack Development | MongoDB, Express, Angular, NodeJS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning/Deep Learning",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "NWE4ZGM2YTFmN2JlM2EyY2M0NWQxNGFmNDYyZGY3NTY4NzUzOWY1MQ==",
  githubUserName: "rakeshkhatri1",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Past Experience "),
  subtitle: "",

  achivementsCards: [
    {
      title: "Software Development Internship",
      points: [
        emoji("⚡ Created a Hadoop platform for handling services for around 100 Silver and 200 Gold cluster for 20 million American Express card holders."),
        emoji("⚡ Build a real time machine learning hadoop cluster for real timetransactions and bring up the services for maintaining the transactions of theAmerican Express card holders using Elastic Search and Mapr-DB.")
      ],
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2018/04/4-you-might-not-notice-amex-new-brand.jpg",
    },
    {
      title: "Software Development Internship",
      points: [
        emoji("⚡ Created the API’s for the Litmus experimentation platform (A/B or multivariate testing) that can create, modify and change the experiments for different traffic."),
        emoji("⚡ Studying and understanding the current Roll-out/ Experimentation methods in GO-JEK Indonesia and also noting there advantages and drawbacks."),
        emoji("⚡ Creating ETL(Extract, Transform and Load) jobs for changing the stream from Master-Slave Architecture to Kafka real time stream for BI Team to apply different business rules.")
      ],
      image: "https://cdn.clipart.email/8b39ce07ace5c7e13d35a218ebbc35f9_logo-gojek-terbaru-format-png-lalu-ahmad_1200-1000.png"
    },

    {
      title: "Product Development Intern",
      points: [
        emoji("⚡ Created the API’S for product for subscription billing that provides the customers the ability to insert Subscriptions, Addons, Coupons, billing history and recurring payment after the end of the subscribed period"),
        emoji("⚡ Creating the test cases and API’s to check the integration of new features using the Hiptest Api and running the script in the postman to run the test cases."),
      ],
      image: "https://cloud-elements.com/wp-content/uploads/2016/04/Chargebee-logo-01.png",
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7746878783",
  email_address: "rakeshkhatri235@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "sastava007"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, contactInfo , twitterDetails};
