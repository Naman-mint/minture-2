"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        {/* Heading Section */}
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

        {/* Coming Soon Box */}
            <div className="glass rounded-xl p-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
                Coming Soon
              </span>
            </div>
            <p className="text-muted-foreground">
              Join the waitlist of leading wallets and fintech platforms
            </p>
          </div>
        
    </section>
  );
};

export default TestimonialsSection;
