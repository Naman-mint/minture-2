"use client";

import { motion } from "framer-motion";

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
      </div>
    </section>
  );
};

export default TestimonialsSection;
