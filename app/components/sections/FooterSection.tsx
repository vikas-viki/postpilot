import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={30} className="p-2"/>, href: "https://www.linkedin.com/in/vikaskotary/" },
    { name: "Twitter", icon: <Twitter size={30} className="p-2"/>, href: "https://x.com/devdoodvikas" }
  ];

  return (
    <footer className="bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 text-black border-t border-sky-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="text-2xl mr-3">🚀</div>
              <span className="text-2xl font-bold text-black">
                PostPilot
              </span>
            </div>
            <p className="text-black text-sm">
              AI-powered LinkedIn content creation that sounds like you wrote it.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-black hover:text-black transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-black">Follow Us</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="  bg-black/20 rounded-full flex items-center justify-center hover:bg-black hover:text-sky-700 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg ">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-sky-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm">
              © {new Date().getFullYear()} PostPilot. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-black">
              <span>Made with ❤️ by <Link href="https://www.linkedin.com/in/vikaskotary/" className="text-sky-500">Vikas Kotary</Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 