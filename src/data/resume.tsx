import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, ShoppingBag, ShoppingCart } from "lucide-react";


export const DATA = {
  name: "Nabiel",
  initials: "M",
  url: "https://nabiel.vercel.app",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "A Penultimate year, Electronics Engineering Student. I love building things and helping people. Very active on Linkedin.",
  summary:
    "Currently, I am pursuing a degree in Electronics and Communication at VIT Chennai, expected to graduate in 2026. In the past, [I have participated in over 5+ hackathons](/#hackathons), [interned at Tech Giant SHARP](#experience), and [contributed to more than 25+ projects](#projects).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Swift",
    "Java",
    "C++",
    "React",
    "Node.js",
    "Next.js",
    "Typescript"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/shop", icon: ShoppingCart, label: "Play" },
  ],
  contact: {
    email: "msyednabiel@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/msnabiel",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/msnabiel/",
        icon: Icons.linkedin,

        navbar: true,
      },
      /*X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },*/
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SHARP Software Development India",
      href: "https://www.sharp.co.in/",
      badges: [],
      location: "Banglore, India",
      title: "Student Software Intern",
      logoUrl: "/atomic.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "I developed an advanced document management system that automates file processing and smart information management by continuously monitoring a designated folder, classifying files with advanced ML models, extracting and translating text, identifying key information, summarizing content, and organizing files into structured folders while integrating with a database. The system features an intuitive user interface with informative tooltips, automated email notifications, reminders, and backup models and APIs for enhanced reliability. Additionally, I designed a security monitoring system for Google Drive using the .NET framework, implementing API integration and SHA-256 for data integrity and unauthorized activity detection.",
    },
    {
      company: "Daira Edtech Pvt. Ltd.",
      badges: [],
      href: "https://dairaed.tech/",
      location: "Chennai, India",
      title: "Artificial Intelligence Intern",
      logoUrl: "/daira.png",
      start: "February 2024",
      end: "September 2024",
      description:
        "I revolutionised resume analysis by designing and deploying a sophisticated AI/ML-powered document answering system, enhancing Retrieval-Augmented Generation (RAG) capabilities and reducing query resolution time by 20%. Additionally, I enhanced Streamlit application performance and user experience by 15% through interface optimization, reducing API requests by prompt tuning, and ensuring seamless integration with the Gemini API.",
    },
    /*{
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    }, */
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "Electronics and Communication Engineering",
      logoUrl: "/VIT.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sunshine School of Institutions",
      href: "https://www.sunshineschool.in/senior/",
      degree: "High School - Computer Science",
      logoUrl: "/sunshine.png",
      start: "2016",
      end: "2022",
    },
    /*{
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },*/
  ],
  projects: [
    {
      title: "RX-Asisstant ",
      href: "https://github.com/msnabiel/RX-Asisstant--HackRX5.0",
      dates: "October 12th - 14th 2024",
      tags: ["SaaS", "Hackathon", "AI"],
      active: true,
      description:
        "With the release of the ChromaDB, I built **RX-Assistant**, a **SaaS** that uses a RESTful API and Chainlit **RAG chatbot** to extract information from documents using OCR. It **supports actions** like order creation and features a **multilingual** conversational interface powered by **Flan-T5** and **Gemini**.",
      technologies: [
        "Python",
        "ChromaDB",
        "Google Gemini",
        "Chainlit",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/msnabiel/RX-Asisstant--HackRX5.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ss.png",
      video:
        "",
    },
    {
      title: "iVision",
      href: "https://github.com/msnabiel/iVision",
      dates: "July 2024",
      tags: ["SaaS", "Hackathon", "AI"],
      active: true,
      description:
        "Developed an **iOS app** that integrates **image classification** using **CoreML and Google Generative AI (Gemini)** for generating responses based on user queries and images.",
      technologies: [
        "SwiftUI",
        "CoreML",
        "CoreData",
        "Google Gemini",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/msnabiel/iVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ivision.png",
      video: "",
    },
    {
      title: "AgroWise",
      href: "https://github.com/msnabiel/AgroWise--Smart-Irrigation",
      dates: "September 2024 - Present",
      tags: ["SaaS", "Project", "MPMC"],
      active: true,
      description:
        "Developed an **intelligent irrigation system** using an **8051 microcontroller** to automate **water management** based on **real-time soil moisture levels**.",
      technologies: [
        "Assembly language",
        "8051 microcontroller",
        "Proteus Simulator"
,
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/msnabiel/AgroWise--Smart-Irrigation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crops.png",
      video: "",
    },
    {
      title: "Haven#Hex",
      href: "https://github.com/msnabiel/Haven-Hex--Defy24",
      dates: "March 2024 - March 2024",
      tags: ["SaaS", "Hackathon", "AI"],
      active: true,
      description:
        "Developed a **blockchain-based supply chain management system** with **crowdfunding integration**, designed to aid NGOs and support humanitarian efforts. It ensures **transparency** and **security** in both **logistics** and **fundraising**.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Metamask",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/msnabiel/Haven-Hex--Defy24",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flood.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HackRX 5.0",
      dates: "October 12th - 14th, 2024",
      location: "Pune, India",
      description:
        "Developed a RESTful API + Chainlit RAG chatbot using ChromaDB for storage, Google Generative AI for responses, and Hugging Face for embeddings.",
      image:
        "/bajaj.png",
      /*mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",*/
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/msnabiel/RX-Asisstant--HackRX5.0",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        ],
    },
    {
      title: "DeFy ",
      dates: "September 14th - 16th, 2018",
      location: "Chennai, India",
      description:
        "Developed a blockchain-based supply chain management system with crowdfunding integration, designed to aid NGOs and support humanitarian efforts. It ensures transparency and security in both logistics and fundraising.",
      image:
        "/defy24.png",
      //mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        ],
    },
    {
      title: "Geotech Geospatial Hackathon",
      dates: "January 31st - February 2nd, 2024",
      location: "Chennai, India",
      description:
        "Developed a Road Detection Model from satellite images using U-Net Architecture.",
      icon: "public",
      image:
        "g.png",
      links: [{
        title: "GitHub",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/msnabiel/Guide4U",
      },
      {
        title: "Linkedin",
        icon: <Icons.linkedin className="h-4 w-4" />,
        href: "https://www.linkedin.com/posts/msnabiel_vitc-geotechspatial-workshop-activity-7160895375636144128-7lXW?utm_source=share&utm_medium=member_desktop",
      },],
    },
    {
      title: " Microsoft Imagine Cup",
      dates: "January 27th - 6th February, 2024",
      location: "Chennai, India",
      description:
        "Developed TerraIntel, a game-changing solution in agriculture that utilizes cutting-edge AI/ML technology to assess plant health and deliver invaluable insights for informed decision-making, based on ECG insights from microchip EXGPILL.",
      image:
        "/msft.png",
      links: [
        {
          title: "Qualifying Mail",
          icon: <Icons.email className="h-4 w-4" />,
          href: "https://github.com/msnabiel/Certificates/blob/main/imaginecup24.png",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/msnabiel_terraintel-microsoft-imagine-cup-2024-activity-7162082926266896384-RR8l?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "June 2023",
      location: "Chennai, India",
      description:
        "Developed a mobile application that classifies diseases and provides users with information for healthy and informed farming.",
      image:
        "/sih.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
      ],
    },
    /*
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },*/
  ],
} as const;
