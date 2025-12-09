// data.js

// ---------------- Plans ----------------

export const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for beginners who need simple file sharing.",
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
    price: "199",
    description: "Ideal for users who need more flexibility and storage.",
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
    price: "499",
    description: "For individuals with large sharing needs.",
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
    description: "Upload files instantly with our optimized system.",
  },
  {
    iconName: "ShieldCheck",
    iconColor: "text-green-500",
    title: "Secure Storage",
    description: "Your data is encrypted and stored securely in the cloud.",
  },
  {
    iconName: "Share2",
    iconColor: "text-blue-500",
    title: "Easy Sharing",
    description: "Share files securely with custom permissions and link control.",
  },
  {
    iconName: "BarChart2",
    iconColor: "text-yellow-500",
    title: "Analytics",
    description: "Track file downloads, views, and user interactions.",
  },
];


// ---------------- Testimonials ----------------

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "UI/UX Designer",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    quote:
      "DriveShare has made file delivery to clients super smooth. I love how simple yet powerful it feels.",
    rating: 5,
  },
  {
    name: "Sara Khan",
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
