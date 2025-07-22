import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../assets/logo.svg"; // Adjust the path according to your project

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={Logo} alt="Minture Logo" className="h-6 w-6" />
                <h3 className="font-medium text-lg">Minture</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                SIP-as-a-Service API enabling automated, non-custodial Web3 investments for modern platforms.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    API Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors opacity-60">
                    Partner Portal <span className="text-xs text-yellow-400">Coming Soon</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors opacity-60">
                    API Docs <span className="text-xs text-yellow-400">Coming Soon</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Developer Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Minture. All rights reserved. Partner onboarding and dashboard—coming soon.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
