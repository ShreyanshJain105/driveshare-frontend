// data.js

// ---------------- Plans ----------------

export const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description:
      "A streamlined plan designed for individuals exploring secure file sharing capabilities.",
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "500",
    description:
      "A scalable solution for users requiring enhanced storage, security, and collaboration options.",
    features: [
      "50 file uploads",
      "Secure file links",
      "20-day file retention",
      "Email support",
      "Download tracking",
    ],
    cta: "Upgrade",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "2500",
    description:
      "A comprehensive plan built for professionals and teams managing high-volume file sharing at scale.",
    features: [
      "Unlimited file uploads",
      "Advanced encrypted sharing",
      "30-day file retention",
      "Priority support",
      "File analytics dashboard",
    ],
    cta: "Go Premium",
    highlighted: true,
  },
];



// ---------------- Features ----------------

export const features = [
  {
    iconName: "Upload",
    iconColor: "text-purple-500",
    title: "Fast Uploads",
    description:
      "Quickly upload files with our optimized, drag-and-drop uploader.",
  },
  {
    iconName: "ShieldCheck",
    iconColor: "text-green-500",
    title: "Secure Storage",
    description:
      "Your files are encrypted and stored securely in our cloud infrastructure.",
  },
  {
    iconName: "Share2",
    iconColor: "text-blue-500",
    title: "Simple Sharing",
    description:
      "Share files with anyone using secure links and fine-grained access control.",
  },
  {
    iconName: "BarChart2",
    iconColor: "text-yellow-500",
    title: "File Analytics",
    description:
      "Track downloads, views, and engagement to understand how your files are used.",
  },
  {
    iconName: "Wallet",
    iconColor: "text-pink-500",
    title: "Flexible Credits",
    description:
      "Pay only for what you use with a transparent, credit-based system.",
  },
  {
    iconName: "Folders",
    iconColor: "text-indigo-500",
    title: "File Management",
    description:
      "Organize, preview, and manage all your files from any device.",
  },
  {
    iconName: "Lock",
    iconColor: "text-red-500",
    title: "Access Controls",
    description:
      "Set permissions, expiry dates, and password protection for sensitive files.",
  },
  {
    iconName: "History",
    iconColor: "text-teal-500",
    title: "Transaction History",
    description:
      "Keep track of all credit purchases, file activity, and usage in one place.",
  },
  {
    iconName: "Download",
    iconColor: "text-orange-500",
    title: "Download Controls",
    description: "Manage download limits, expiration dates, and access permissions for shared files.",
  },
];



// ---------------- Testimonials ----------------

export const testimonials = [
  {
    name: "Masum Jangid",
    role: "UI/UX Designer",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    quote:
      "DriveShare has made file delivery to clients super smooth. I love how simple yet powerful it feels.",
    rating: 5,
  },
  {
    name: "Richa Modi",
    role: "Software Developer",
    company: "TechNova Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    quote:
      "Security and encryption were my priority. This platform checks all the boxes for professional usage.",
    rating: 4,
  },
  {
    name: "Rohit Sharma",
    role: "Content Creator",
    company: "Self-Employed",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    quote:
      "Sharing videos and large files with my team was a headache — now it’s effortless.",
    rating: 5,
  },
];
export { };