export const faqs: Faq[] = [
  {
    question: "How do I reset my password?",
    answer:
      "If you've forgotten your password or need to reset it, you can usually find a 'Forgot Password?' link on the login page. Click that link and follow the instructions to reset your password. You'll typically need access to your email or phone to complete this process.",
  },
  {
    question: "Where can I find your privacy policy?",
    answer:
      "Our privacy policy is available at the bottom of every page on our website. There, you'll find detailed information about how we collect, use, and protect your data. We're committed to ensuring your privacy and data protection.",
  },
  {
    question: "Can I change my subscription plan at any time?",
    answer:
      "Yes, you can change your subscription plan at any time. To do so, go to your account settings and select 'Subscription.' From there, you'll be able to choose a new plan that best fits your needs. Any changes to your plan will take effect at the start of the next billing cycle.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all our products. If you're not satisfied with your purchase, please contact our support team within 30 days of your purchase to request a refund. Make sure to include your order number and the reason for the refund request.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team by visiting the 'Contact Us' section of our website. There, you'll find options to contact us via email, phone, or live chat. Our team is available 24/7 to assist you with any questions or issues you might have.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}
