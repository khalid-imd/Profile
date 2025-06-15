"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khalid-imaduddin/",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    href: "https://github.com/khalid-imd",
    icon: Github,
    color: "hover:text-gray-400",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhamadkhalid899@gmail.com",
    icon: Mail,
    color: "hover:text-green-500",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container max-w-screen-2xl px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-muted-foreground max-w-md">
              Let&apos;s connect and discuss opportunities, collaborations, or
              just have a chat about technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className={`transition-colors ${link.color}`}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>
              &copy; {new Date().getFullYear()} Khalid. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
