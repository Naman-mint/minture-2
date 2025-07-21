import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How quickly can we integrate Minture's API?",
    answer: "Most partners integrate our API within 1-2 weeks. Our SDK and comprehensive documentation make the process straightforward, and our support team provides guidance throughout integration."
  },
  {
    question: "What assets and chains do you support?",
    answer: "We support all major EVM-compatible chains including Ethereum, Polygon, Arbitrum, and Optimism. Assets include cryptocurrencies, ERC-20 tokens, and NFTs. Full asset support documentation is coming soon."
  },
  {
    question: "How does the non-custodial architecture work?",
    answer: "Users maintain full control of their assets through self-custody wallets. Our smart contracts execute SIP transactions automatically while never holding user funds, ensuring maximum security and user control."
  },
  {
    question: "What compliance features are available?",
    answer: "Our platform includes transaction monitoring, audit trail logging, and compliance reporting tools. We're building additional KYC/AML integrations to help partners meet regulatory requirements."
  },
  {
    question: "When will full documentation be available?",
    answer: "Complete API documentation, integration guides, and partner onboarding materials are currently in development and will be available soon. Early partners receive priority access and dedicated support."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer dedicated technical support for all partners, including integration assistance, ongoing maintenance support, and access to our engineering team for custom requirements."
  }
];

const FAQSection = () => {
  return (
    <section className="container px-4 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Common questions about integrating Minture's SIP-as-a-Service platform
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass rounded-xl px-6 border-white/10"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;