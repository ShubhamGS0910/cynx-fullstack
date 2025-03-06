const blogData = [
    {
      id: 1,
      title: "The Future of AI: What's Next?",
      description: "Discover the latest advancements in artificial intelligence.",
      category: "AI",
      date: "2025-03-05",
      author: "John Doe",
      authorImage: "/images/authors/john.jpg",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      readingTime: 5,
      tags: ["AI", "Machine Learning", "Future Tech"],
      image: "/images/ai-future.jpg",
      views: 2000,
      engagement: 150,
      toc: [
        { id: "section1", title: "Introduction" },
        { id: "section2", title: "Current AI Trends" },
        { id: "section3", title: "Future Predictions" }
      ],
      content: [
        { id: "section1", heading: "Introduction", text: "Artificial Intelligence is evolving at an unprecedented rate..." },
        { id: "section2", heading: "Current AI Trends", text: "Some of the latest trends in AI include...", code: `const aiFuture = "Exciting times ahead!"; console.log(aiFuture);` },
        { id: "section3", heading: "Future Predictions", text: "Experts believe AI will transform industries..." }
      ]
    },
    {
      id: 2,
      title: "Top 10 Web Development Trends in 2025",
      description: "Explore the most promising web development trends for 2025.",
      category: "Web Development",
      date: "2025-03-01",
      author: "Jane Smith",
      authorImage: "/images/authors/jane.jpg",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      readingTime: 7,
      tags: ["Web Development", "JavaScript", "Frontend"],
      image: "/images/web-trends.jpg",
      views: 3400,
      engagement: 220,
      toc: [
        { id: "section1", title: "Introduction" },
        { id: "section2", title: "Top Trends" }
      ],
      content: [
        { id: "section1", heading: "Introduction", text: "Web development is constantly evolving..." },
        { id: "section2", heading: "Top Trends", text: "Some key trends include Next.js, serverless computing...", code: `const trends = ["Next.js", "Serverless", "PWAs"]; console.log(trends);` }
      ]
    },
    {
      id: 3,
      title: "Cybersecurity in 2025: Threats and Solutions",
      description: "Learn about the biggest cybersecurity threats and how to tackle them.",
      category: "Cybersecurity",
      date: "2025-02-25",
      author: "Alex Brown",
      authorImage: "/images/authors/alex.jpg",
      twitter: "https://twitter.com/alexbrown",
      linkedin: "https://linkedin.com/in/alexbrown",
      readingTime: 6,
      tags: ["Cybersecurity", "Hacking", "Data Protection"],
      image: "/images/cybersecurity.jpg",
      views: 2900,
      engagement: 180,
      toc: [
        { id: "section1", title: "Introduction" },
        { id: "section2", title: "Biggest Cyber Threats" },
        { id: "section3", title: "How to Stay Safe" }
      ],
      content: [
        { id: "section1", heading: "Introduction", text: "Cybersecurity is more crucial than ever..." },
        { id: "section2", heading: "Biggest Cyber Threats", text: "Ransomware, phishing, and data breaches are on the rise..." },
        { id: "section3", heading: "How to Stay Safe", text: "Use strong passwords, enable MFA, and stay updated...", code: `const secure = "Enable MFA"; console.log(secure);` }
      ]
    },
    {
      id: 4,
      title: "Cloud Computing: The Future of Enterprise Tech",
      description: "How cloud computing is shaping businesses and technology.",
      category: "Cloud Computing",
      date: "2025-02-18",
      author: "Michael Lee",
      authorImage: "/images/authors/michael.jpg",
      twitter: "https://twitter.com/michaellee",
      linkedin: "https://linkedin.com/in/michaellee",
      readingTime: 8,
      tags: ["Cloud", "AWS", "Azure"],
      image: "/images/cloud-computing.jpg",
      views: 3100,
      engagement: 170,
      toc: [
        { id: "section1", title: "Introduction" },
        { id: "section2", title: "Why Cloud?" },
        { id: "section3", title: "Future of Cloud" }
      ],
      content: [
        { id: "section1", heading: "Introduction", text: "Cloud computing has revolutionized businesses..." },
        { id: "section2", heading: "Why Cloud?", text: "Scalability, cost efficiency, and security are key advantages..." },
        { id: "section3", heading: "Future of Cloud", text: "AI-driven cloud services will dominate the next decade...", code: `const cloudFuture = "Cloud + AI"; console.log(cloudFuture);` }
      ]
    },
    {
      id: 5,
      title: "The Impact of Blockchain Beyond Cryptocurrencies",
      description: "How blockchain is changing industries beyond just finance.",
      category: "Blockchain",
      date: "2025-02-10",
      author: "Sophia Kim",
      authorImage: "/images/authors/sophia.jpg",
      twitter: "https://twitter.com/sophiakim",
      linkedin: "https://linkedin.com/in/sophiakim",
      readingTime: 6,
      tags: ["Blockchain", "Finance", "Security"],
      image: "/images/blockchain-impact.jpg",
      views: 2800,
      engagement: 160,
      toc: [
        { id: "section1", title: "Introduction" },
        { id: "section2", title: "Real-World Applications" },
        { id: "section3", title: "Challenges and Future" }
      ],
      content: [
        { id: "section1", heading: "Introduction", text: "Blockchain technology is expanding beyond crypto..." },
        { id: "section2", heading: "Real-World Applications", text: "Supply chain, healthcare, and digital identity..." },
        { id: "section3", heading: "Challenges and Future", text: "Scalability and regulation remain key challenges...", code: `const blockchainUse = "Beyond Crypto"; console.log(blockchainUse);` }
      ]
    }
  ];
  
  export default blogData;
  