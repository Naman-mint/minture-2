import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Logo from "../assets/logo.png";
import SpotlightCard from "../components/SpotlightCard";
import SplashCursor from "../components/SplashCurson.jsx";

<SplashCursor />
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <img src={Logo} alt="Minture Logo" className="w-8 h-8 inline-block mr-1" />
            SIP-as-a-Service API for Web3
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Empower Your Platform with" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Recurring Web3 Investments" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            <span> The SIP-as-a-Service API for modern wallets and fintechs</span><br />
            <span>Enable automated, non-custodial recurring investments for your users{" "}</span><br />
            <span className="text-white font-bold">Integrate in minutes, not months</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Join Waitlist
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="Minture API Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

{/* Logo Carousel removed */}
      
      {/* Why Partners Choose Minture */}
      <div id="partners" className="bg-black">
        <FeaturesSection />
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="bg-black">
        <section className="container px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to integrate recurring Web3 investments into your platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Plug in Minture's API/SDK",
                description: "Simple integration with comprehensive documentation and support"
              },
              {
                step: "02", 
                title: "Users schedule SIPs",
                description: "Your users set up recurring investments in crypto, NFTs, and tokens"
              },
              {
                step: "03",
                title: "Automated execution",
                description: "Non-custodial, secure execution of investment schedules"
              },
              {
                step: "04",
                title: "Analytics & compliance",
                description: "Dashboard with insights and compliance reporting (coming soon)"
              }
            ].map((item, index) => (
              <SpotlightCard
                key={index}
                className="glass rounded-xl p-6 text-center"
                spotlightColor="rgba(255,255,255,0.25)"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary font-bold text-2xl mb-4">{item.step}</div>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </div>

      {/* Integration Sample */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Sample</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with just a few lines of code
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8">
            <div className="bg-gray-900/50 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-2">// Import Minture SDK</div>
              <div className="text-blue-400 mb-4">import Minture from 'minture-sdk';</div>
              
              <div className="text-green-400 mb-2">// Create a SIP for your user</div>
              <div className="text-white mb-4">
                <span className="text-purple-400">Minture</span>.
                <span className="text-yellow-400">createSIP</span>({"{"}
              </div>
              <div className="text-white ml-4 mb-1">
                <span className="text-blue-300">userAddress</span>: 
                <span className="text-green-300">'0x...'</span>,
              </div>
              <div className="text-white ml-4 mb-1">
                <span className="text-blue-300">asset</span>: 
                <span className="text-green-300">'ETH'</span>,
              </div>
              <div className="text-white ml-4 mb-1">
                <span className="text-blue-300">amount</span>: 
                <span className="text-orange-400">100</span>,
              </div>
              <div className="text-white ml-4 mb-4">
                <span className="text-blue-300">interval</span>: 
                <span className="text-green-300">'weekly'</span>
              </div>
              <div className="text-white">{"});"}</div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Full partner documentation and onboarding coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* FAQ Section */}
      <div className="bg-black">
        <FAQSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to integrate?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the next generation of platforms offering automated Web3 investments to their users
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-gradient">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="opacity-60 cursor-not-allowed">
              Partner Dashboard
              <span className="text-xs ml-2">Coming Soon</span>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
