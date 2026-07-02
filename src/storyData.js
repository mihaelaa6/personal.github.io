export const storyData = [
  {
    id: "intro",
    subtitle: "01 // INTRODUCTION",
    portfolioContent: {
      heading: "Hi, I'm a Frontend Engineer.",
      body: "I build responsive, high-performance web applications that bridge the gap between complex data frameworks and elegant, accessible user interfaces."
    },
    companyContent: {
      heading: "We build high-impact web applications.",
      body: "We partner with companies to scale their digital presence with custom, lightning-fast web solutions tailored to modern enterprise demands."
    },
    bgColor: "#0f172a",
    textColor: "#f8fafc"
  },
  {
    id: "bio",
    subtitle: "02 // OVERVIEW",
    layoutType: "split", // Tells Slide component to render the image side-by-side
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80", // Standard premium portrait placeholder
    portfolioContent: {
      heading: "I'm a Developer focused on system execution.",
      body: "I have rich experience in building web applications and custom logic. I specialize in modern JavaScript ecosystems like React, handling database management optimization, and resolving complex codebase challenges. Feel free to download my resume below.",
      hasResumeButton: true
    },
    companyContent: {
      heading: "We are an engineering-first partner.",
      body: "Our team focuses entirely on the technical heavy lifting. From executing seamless database migrations to re-engineering legacy scripts, we ensure your software stack stays modern, secure, and ready for market growth.",
      hasResumeButton: false
    },
    bgColor: "#ffffff",
    textColor: "#0f172a" // Crisp white contrast swap like your image
  },
  {
    id: "solution",
    subtitle: "03 // THE CAPABILITIES",
    portfolioContent: {
      heading: "My Technical Ecosystem",
      body: "Proficient in React, modern JavaScript, and database optimization. I construct components that are performant, highly reusable, and built to scale.",
      metrics: [
        { label: "React / JavaScript", value: 90, color: "#10b981" },
        { label: "Database Management (SQL)", value: 85, color: "#3b82f6" },
        { label: "System Architectures & API Design", value: 80, color: "#8b5cf6" }
      ]
    },
    companyContent: {
      heading: "Tailored Engineering for Your Scale",
      body: "We deliver full-stack expertise from optimized UI dashboards to robust backend integrations, ensuring your business stays ahead of the curve.",
      metrics: [
        { label: "Application Load Time Reduction", value: 45, unit: "% faster", color: "#6366f1" },
        { label: "Client Conversion Rates Boosted", value: 22, unit: "% up", color: "#ec4899" },
        { label: "Legacy Code Maintenance Cost Drop", value: 30, unit: "% down", color: "#f59e0b" }
      ]
    },
    bgColor: "#581c87",
    textColor: "#faf5ff"
  },
  {
    id: "contact",
    subtitle: "04 // ENGAGEMENT",
    layoutType: "contact", // Tells Slide component to render the dynamic form
    portfolioContent: {
      heading: "Let's build something together.",
      body: "I am actively seeking entry-level engineering opportunities or complex freelance projects. Drop a message to discuss your team's technical roadmap."
    },
    companyContent: {
      heading: "Start your project discovery.",
      body: "Partner with us to optimize your platform architecture. Reach out today to receive a comprehensive technical scoping analysis from our engineering team."
    },
    bgColor: "#0f172a",
    textColor: "#f8fafc"
  }
];