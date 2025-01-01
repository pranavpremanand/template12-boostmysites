import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";

import logo from "../assets/images/Logo/Logo.png";
export { logo };

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const companyDetails = {
  name: "AI Company",
  number: "+0000000000",
  address: "ABC Street, City, Country",
  address2: "ABC Street, City, Country",
  email: "abc@xyz.com",
  facebook: "",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const whyChooseUs = {
  mainHeading:
    "At AI Company, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At AI Company, we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

// client logos
export const clientLogos = [
  {
    id: 1,
    img: require("../assets/images/clients/1.png"),
  },
  {
    id: 2,
    img: require("../assets/images/clients/2.png"),
  },
  {
    id: 3,
    img: require("../assets/images/clients/3.png"),
  },
  {
    id: 4,
    img: require("../assets/images/clients/4.png"),
  },
  {
    id: 5,
    img: require("../assets/images/clients/5.png"),
  },
  {
    id: 6,
    img: require("../assets/images/clients/6.png"),
  },
  {
    id: 7,
    img: require("../assets/images/clients/7.png"),
  },
];

// all services
export const allServices = [
  {
    image: <i className="flaticon-app-development" />,
    title: "Mobile App Development",
    shortDesc:
      "From initial concept to launch, we create mobile apps that are intuitive, high-performing, and designed to engage users on every platform. Whether you need an e-commerce app, a productivity tool, or a unique interactive experience, we build apps that turn first-time users into lifelong fans.",
    heading: "Mobile App Development: Engaging Apps for Every Platform",
    description:
      "Your customers are on the move – and your business should be too. Our mobile app development team specializes in building intuitive, user-centric apps that function seamlessly on any device. Whether you’re envisioning an e-commerce platform, a social app, or a productivity tool, we create mobile applications that combine aesthetics, usability, and high performance. Each app is designed to provide value and a memorable user experience that keeps users coming back.",
  },
  {
    image: <i className="flaticon-web-design" />,
    title: "Web Development",
    shortDesc:
      "Your website should be more than a digital presence – it should be an experience. We design responsive, SEO-friendly websites that are visually stunning and highly functional, transforming your online platform into a powerful tool for engagement and conversion.",
    heading: "Web Development: Building Dynamic Digital Experiences",
    description:
      "A website should be more than just an online presence; it should be an experience. Our web development team designs and builds dynamic, responsive, and SEO-friendly websites that are visually compelling and highly functional. We specialize in creating sites that not only captivate visitors but also drive conversions. Whether you need a sleek portfolio, an engaging blog, or a high-performance e-commerce platform, we’re here to bring your vision to life on the web.",
  },

  {
    image: <i className="flaticon-web-programming" />,
    title: "Custom Software Development",
    shortDesc: `Get solutions that are uniquely yours. Whether you need a sophisticated CRM, a specialized ERP, or any custom-built application, our software development process is designed around your business goals. With an agile approach, we deliver scalable, user-friendly software that aligns with your vision.`,
    heading:
      "Custom Software Development: Tailored Solutions for Your Business",
    description:
      "Every business has unique needs, and a one-size-fits-all solution just won’t do. Our custom software development service is all about crafting tools that fit perfectly with your workflows and objectives. From CRMs and ERPs to tailored solutions for specific tasks, we work with you to build software that’s flexible, scalable, and designed for your goals. Our team follows an agile development process, ensuring adaptability, speed, and close collaboration with your team.",
  },
  {
    image: <i className="flaticon-software-development" />,
    title: "Artificial Intelligence Solutions",
    shortDesc:
      "Stay ahead of the curve with AI solutions tailored to your business needs. From predictive analytics to machine learning, our AI technologies help you make smarter decisions, optimize operations, and uncover valuable insights that drive growth.",
    heading:
      "AI Development: Harnessing Artificial Intelligence for Business Growth",
    description:
      "Harness the power of AI to make smarter decisions and optimize your operations. Our AI solutions are tailored to help your business unlock valuable insights, streamline processes, and enhance customer interactions. From predictive analytics to machine learning algorithms, we build AI tools that make your data work for you, uncovering patterns and opportunities that might otherwise be missed.",
  },
  {
    image: <i className="flaticon-coding" />,
    title: "Chatbot Development",
    shortDesc: `Enhance customer engagement with smart, efficient chatbots that never sleep. Our chatbots are designed to provide conversational, responsive support around the clock, helping you streamline customer service and deliver a seamless user experience.`,
    heading: "Chatbot Development: Automating Customer Interactions",
    description:
      "In today’s world, customers expect instant responses. Our chatbot development service provides you with a conversational, AI-driven assistant available around the clock. We create intelligent chatbots that engage users, answer questions, and solve problems with ease. Built to understand and learn from interactions, our chatbots deliver seamless experiences across platforms, reducing wait times and enhancing customer satisfaction.",
  },
  {
    image: <i className="flaticon-technical-support" />,
    title: "Robotic Process Automation (RPA)",
    shortDesc:
      "Unlock new levels of efficiency with RPA. Our automation services help reduce repetitive tasks, minimize errors, and streamline workflows, freeing up your team to focus on high-value work. Let RPA take care of the routine so you can focus on innovation.",
    heading: "RPA: Revolutionizing Business Processes with Automation",
    description:
      "RPA is transforming the way businesses handle repetitive, rule-based tasks. Our RPA services empower you to automate routine tasks, reducing errors, saving time, and allowing your team to focus on strategic activities. By implementing customized RPA solutions, we help you boost efficiency and enhance productivity without overhauling your entire system.",
  },
];

// services for web development
export const webDevelopmentServices = [
  {
    image: <i className="flaticon-web-development" />,
    heading: "E-commerce Solutions",
    description: "Boost your sales with custom-designed online stores.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "Website Maintenance",
    description: "Keeping your site updated and running smoothly.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "SEO Optimization",
    description:
      "Ensuring your site is easily found with on-page SEO best practices.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "Custom Web Design",
    description:
      "Tailored websites that reflect your brand and engage your target audience",
  },
  {
    image: <i className="flaticon-responsive" />,
    heading: "Responsive Design",
    description:
      "Seamless user experience across all devices—desktop, tablet, and mobile.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <i className="flaticon-app-development" />,
    heading: "Custom App Development",
    description: "Tailored apps designed for your unique business needs.",
  },
  {
    image: <i className="flaticon-software-development" />,
    heading: "Cross-Platform Solutions",
    description:
      "Apps that perform seamlessly across iOS, Android, and web platforms.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "UX/UI Design",
    description:
      "Intuitive and attractive designs for an outstanding user experience.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Backend Development",
    description: "Secure and scalable backend services to support your app.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "App Maintenance and Updates",
    description: "Ensuring your app stays up-to-date and fully functional.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
