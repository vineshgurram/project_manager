const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    status: "In Progress",
    tasks: [
      {
        id: 1,
        title: "Create Header",
        description:
          "Design and implement the main navigation header with logo, navigation links, and responsive menu.",
        status: "completed",
        priority: "high",
      },
      {
        id: 2,
        title: "Build Hero Section",
        description:
          "Create an engaging hero section with an introduction, profile information, call-to-action buttons, and visual elements.",
        status: "in-progress",
        priority: "high",
      },
      {
        id: 3,
        title: "Add Projects Section",
        description:
          "Build a projects section to showcase completed work with project cards, descriptions, technologies, and links.",
        status: "backlog",
        priority: "medium",
      },
      {
        id: 4,
        title: "Add Contact Form",
        description:
          "Create a contact form that allows visitors to send messages with name, email, subject, and message fields.",
        status: "backlog",
        priority: "low",
      },
      {
        id: 13,
        title: "Design About Section",
        description:
          "Create an about section that introduces the developer, their experience, background, and professional interests.",
        status: "completed",
        priority: "medium",
      },
      {
        id: 14,
        title: "Add Skills Section",
        description:
          "Display technical skills and technologies using visually appealing cards, icons, or progress indicators.",
        status: "in-progress",
        priority: "medium",
      },
      {
        id: 15,
        title: "Add Testimonials",
        description:
          "Create a testimonials section to display feedback and recommendations from clients or colleagues.",
        status: "backlog",
        priority: "low",
      },
      {
        id: 16,
        title: "Make Website Responsive",
        description:
          "Ensure all website sections work correctly across mobile, tablet, and desktop screen sizes.",
        status: "in-progress",
        priority: "high",
      },
      {
        id: 17,
        title: "Add Dark Mode",
        description:
          "Implement a dark mode theme and allow users to switch between light and dark appearances.",
        status: "backlog",
        priority: "medium",
      },
      {
        id: 18,
        title: "Optimize Images",
        description:
          "Compress and optimize website images to improve page loading speed and overall performance.",
        status: "backlog",
        priority: "low",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce App",
    status: "In Progress",
    tasks: [
      {
        id: 5,
        title: "Product Listing",
        description:
          "Create a product listing page that displays products with images, names, prices, ratings, and availability.",
        status: "completed",
        priority: "high",
      },
      {
        id: 6,
        title: "Product Details",
        description:
          "Build a detailed product page with product images, descriptions, pricing, variants, reviews, and purchase actions.",
        status: "in-progress",
        priority: "high",
      },
      {
        id: 7,
        title: "Shopping Cart",
        description:
          "Implement a shopping cart where users can add products, change quantities, remove items, and view the total price.",
        status: "in-progress",
        priority: "medium",
      },
      {
        id: 8,
        title: "Payment Integration",
        description:
          "Integrate a secure payment provider to process customer payments during checkout.",
        status: "backlog",
        priority: "high",
      },
      {
        id: 19,
        title: "User Authentication",
        description:
          "Implement user registration, login, logout, and authentication state management.",
        status: "completed",
        priority: "high",
      },
      {
        id: 20,
        title: "Create Product Search",
        description:
          "Add a search feature that allows users to quickly find products by name, keyword, or category.",
        status: "in-progress",
        priority: "high",
      },
      {
        id: 21,
        title: "Add Product Filters",
        description:
          "Allow users to filter products by category, price range, rating, brand, and availability.",
        status: "in-progress",
        priority: "medium",
      },
      {
        id: 22,
        title: "Build Checkout Page",
        description:
          "Create the checkout flow with shipping details, billing information, order summary, and payment options.",
        status: "backlog",
        priority: "high",
      },
      {
        id: 23,
        title: "Add Order History",
        description:
          "Create an order history page where authenticated users can view their previous purchases and order details.",
        status: "backlog",
        priority: "medium",
      },
      {
        id: 24,
        title: "Add Wishlist",
        description:
          "Allow users to save products to a personal wishlist and manage their saved items.",
        status: "backlog",
        priority: "low",
      },
      {
        id: 25,
        title: "Create Admin Dashboard",
        description:
          "Build an admin dashboard for managing products, orders, customers, inventory, and sales information.",
        status: "backlog",
        priority: "high",
      },
    ],
  },
  {
    id: 3,
    title: "Blog Platform",
    status: "Completed",
    tasks: [
      {
        id: 9,
        title: "Create Database Schema",
        description:
          "Design the database structure for users, blog posts, comments, categories, tags, and related content.",
        status: "completed",
        priority: "high",
      },
      {
        id: 10,
        title: "Build Blog Editor",
        description:
          "Create a rich blog editor that allows authors to write, format, preview, and publish articles.",
        status: "completed",
        priority: "medium",
      },
      {
        id: 11,
        title: "Add Comments",
        description:
          "Implement a comment system that allows readers to leave comments and interact with blog posts.",
        status: "completed",
        priority: "low",
      },
      {
        id: 12,
        title: "Deploy Application",
        description:
          "Deploy the blog platform to a production environment and verify that all features work correctly.",
        status: "completed",
        priority: "high",
      },
      {
        id: 26,
        title: "Create User Authentication",
        description:
          "Implement secure user registration and login functionality for authors and readers.",
        status: "completed",
        priority: "high",
      },
      {
        id: 27,
        title: "Build Blog Listing Page",
        description:
          "Create a page that displays published blog posts with titles, excerpts, authors, dates, and featured images.",
        status: "completed",
        priority: "high",
      },
      {
        id: 28,
        title: "Add Categories",
        description:
          "Create blog categories to organize posts and help readers discover related content.",
        status: "completed",
        priority: "medium",
      },
      {
        id: 29,
        title: "Add Tags",
        description:
          "Allow authors to assign tags to blog posts for better content organization and discovery.",
        status: "completed",
        priority: "low",
      },
      {
        id: 30,
        title: "Add Search Functionality",
        description:
          "Implement a search feature that allows users to find blog posts by title, content, category, or keywords.",
        status: "completed",
        priority: "medium",
      },
      {
        id: 31,
        title: "Add SEO Metadata",
        description:
          "Add page titles, descriptions, Open Graph metadata, and other SEO information to improve search visibility.",
        status: "completed",
        priority: "medium",
      },
      {
        id: 32,
        title: "Configure Production Environment",
        description:
          "Set up production environment variables, database configuration, deployment settings, and application monitoring.",
        status: "completed",
        priority: "high",
      },
    ],
  },
];

export default projects;
