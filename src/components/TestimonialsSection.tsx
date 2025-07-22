"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "David Kim",
    role: "CTO, NeoWallet",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Minture's API integration was seamless. Our users love the automated investment features, and the non-custodial approach gives them complete control."
  },
  {
    name: "Lisa Parker",
    role: "Head of Product, DeFi Solutions",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The compliance features and reporting tools made regulatory approval straightforward. Minture understands what enterprise partners need."
  },
  {
    name: "James Wilson",
    role: "Technical Director, CryptoBank",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Implementing SIPs for our institutional clients was complex until we found Minture. The developer experience and support have been exceptional."
  },
  {
    name: "Emily Chen",
    role: "Founder, WalletPro",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Minture's multi-chain support and NFT capabilities helped us differentiate our platform. Integration took days, not months as we expected."
  },
  {
    name: "Michael Torres",
    role: "VP Engineering, FinFlow",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The automated execution and analytics dashboard have been game-changers for our compliance reporting. Our users trust the non-custodial approach."
  },
  {
    name: "Sarah Williams",
    role: "Product Lead, InvestApp",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Minture enabled us to offer recurring crypto investments without the complexity of building it ourselves. Our user engagement has increased 300%."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Leading Platforms</h2>
          <p className="text-muted-foreground text-lg">
            Join innovative fintech platforms and wallet providers worldwide
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
