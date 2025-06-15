"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "Javascript",
    "TypeScript",
    "Tailwind CSS",
    "CSS",
  ],
  Tools: ["Git", "Git lab", "VS Code"],
  // Backend: ["Node.js", "Python", "Django", "Express", "GraphQL", "REST APIs"],
  // Database: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  // DevOps: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
};

// const interests = [
//   {
//     icon: Code2,
//     name: "Open Source",
//     description: "Contributing to open source projects",
//   },
//   {
//     icon: Coffee,
//     name: "Coffee",
//     description: "Fuel for late-night coding sessions",
//   },
//   {
//     icon: Gamepad2,
//     name: "Gaming",
//     description: "Exploring virtual worlds and game design",
//   },
//   {
//     icon: Camera,
//     name: "Photography",
//     description: "Capturing moments and beautiful landscapes",
//   },
// ];

export default function AboutPage() {
  return (
    <div className="container max-w-screen-2xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get to know me better - my journey, skills, and what drives my passion
          for technology.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="sticky top-24">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 border-gradient-to-r from-purple-500 to-pink-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="absolute top-1 left-1 rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Muhamad Khalid Imaduddin
              </h2>
              <p className="text-muted-foreground mb-4">Frontend Developer</p>
              <p className="text-sm text-muted-foreground mb-6">
                Based in Jakarta
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Bio Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Book className="h-6 w-6 text-red-500" />
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm a passionate frontend developer who began my journey
                  into web development after college by joining a coding
                  bootcamp. That experience sparked my enthusiasm for building
                  user-friendly and modern web applications.
                </p>
                <p>
                  Since then, I've been constantly learning and improving,
                  diving deep into frontend technologies like JavaScript and
                  React. Along the way, I've explored tools such as Next.js,
                  React Native, Tailwind CSS, and TypeScript to build responsive
                  and scalable interfaces.
                </p>
                <p>
                  I enjoy crafting clean and reusable components, and I'm always
                  excited to learn something new that enhances the user
                  experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 text-lg">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests Section */}
          {/*
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Beyond Code</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                      <interest.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{interest.name}</h4>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
          */}
        </motion.div>
      </div>
    </div>
  );
}
