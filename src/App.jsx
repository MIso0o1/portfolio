import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Github, ExternalLink, Menu, X, MapPin, Calendar, Award } from 'lucide-react'
import './App.css'
import geometricBg from './assets/geometric-bg.jpg'
import techBg from './assets/tech-bg.jpg'
import workspace from './assets/workspace.jpg'
import documentTranslator from './assets/document-translator.png'
import brewtifulBreak from './assets/brewtiful-break.png';
import TypingEffect from './components/ui/typing-effect.jsx';
import hieroglyphTranslator from './assets/hieroglyph-translator.png'
import cherryhabit from './assets/cherryhabit.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Scroll animations
      const animateElements = document.querySelectorAll('.scroll-animate')
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate')
        }
      })

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5
        const yPos = -(window.scrollY * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Document Translator",
      description: "AI-powered document translation tool that can translate DOCX, PDF, XLSX, and PPTX files to about 20 languages using advanced AI technology.",
      technologies: ["AI", "Web APIs", "File Processing", "React"],
      link: "https://translateweb-new.vercel.app/",
      image: documentTranslator
    },
    {
      title: "Brewtiful Break",
      description: "A coffee break companion website featuring fun games and activities to help users take perfect breaks during their workday.",
      technologies: ["React", "Interactive UI", "Games", "Web Development"],
      link: "https://www.brewtifulbreak.com",
      image: brewtifulBreak
    },
    {
      title: "Hieroglyph Translator",
      description: "Interactive tool for translating text to ancient Egyptian hieroglyphs with drag-and-drop functionality for creating custom hieroglyphic messages.",
      technologies: ["React", "Drag & Drop", "Interactive UI", "Cultural Tech"],
      link: "https://hieroglyph-two.vercel.app",
      image: hieroglyphTranslator
    },
    {
      title: "Cherry Habit",
      description: "Habit & skill tracker application that helps users grow their virtual tree by maintaining consistent daily habits and building new skills.",
      technologies: ["React", "Habit Tracking", "Interactive UI", "Gamification"],
      link: "https://cherryhabit.com",
      image: cherryhabit
    }
  ]

  const skills = [
    { category: "Cloud & DevOps", items: ["Microsoft Azure", "Azure Functions", "Azure DevOps", "Docker"] },
    { category: "Programming", items: ["Python", "JavaScript", "Node.js", "React", "SQL", "Django"] },
    { category: "Integration", items: ["webMethods", "REST APIs", "SOAP", "JSON", "XML"] },
    { category: "Data & AI", items: ["OpenAI", "Data Analysis", "ETL", "Power BI"] }
  ]

  const certifications = [
    { name: "AZ-900 - Azure Fundamentals", url: "https://www.credly.com/badges/6d99ab87-8428-46aa-828e-d61adf25a63f/public_url" },
    { name: "DP-900 - Azure Data Fundamentals", url: "https://www.credly.com/badges/a0e63edc-4475-4785-806b-7cb1db94d0fd" }, 
    { name: "PL-900 - Power Platform Fundamentals", url: "https://www.credly.com/badges/27beb349-0124-4971-84f2-408d987ca326?source=linked_in_profile" },
    { name: "AI-102 - Azure AI Engineer Associate", url: "https://www.credly.com/badges/58978855-1d12-4b26-b078-b923c4f3f8c4?source=linked_in_profile" },
    { name: "AI-900 - Azure AI Fundamentals", url: "https://www.credly.com/badges/bf4e34bb-f1b3-47a7-826c-a3ac54df94ea?source=linked_in_profile" },
    { name: "SC-900 - Security, Compliance, and Identity Fundamentals", url: "https://www.credly.com/badges/2c430986-84d2-4fc6-aa40-13e322afaa16?source=linked_in_profile" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-foreground">
              Michal Šomský
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Code-themed Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800" />
          
          {/* Animated code elements */}
          <div className="absolute inset-0 opacity-20">
            {/* Terminal-like windows */}
            <div className="absolute top-20 left-10 w-64 h-40 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-3 font-mono text-xs text-green-400">
                <div>$ npm start</div>
                <div>Server running...</div>
              </div>
            </div>
            
            <div className="absolute top-32 right-16 w-72 h-48 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-3 font-mono text-xs">
                <div className="text-blue-400">function</div>
                <div className="text-yellow-400">createApp()</div>
                <div className="text-gray-400">// Building...</div>
              </div>
            </div>
            
            <div className="absolute bottom-24 left-20 w-56 h-32 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-3 font-mono text-xs text-purple-400">
                <div>git commit -m</div>
                <div>"feat: update"</div>
              </div>
            </div>
          </div>
          
          {/* Floating code symbols */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/3 text-4xl font-mono text-blue-600">&lt;/&gt;</div>
            <div className="absolute top-1/3 right-1/4 text-3xl font-mono text-green-600">{}</div>
            <div className="absolute bottom-1/3 left-1/4 text-2xl font-mono text-purple-600">[]</div>
            <div className="absolute bottom-1/4 right-1/3 text-3xl font-mono text-indigo-600">()</div>
            <div className="absolute top-1/2 left-1/2 text-2xl font-mono text-cyan-600">;</div>
          </div>
          
          {/* Binary rain effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 font-mono text-xs text-green-600">01010101</div>
            <div className="absolute top-20 left-1/2 font-mono text-xs text-blue-600">11001100</div>
            <div className="absolute top-40 left-3/4 font-mono text-xs text-purple-600">10101010</div>
            <div className="absolute top-60 left-1/6 font-mono text-xs text-indigo-600">01110111</div>
          </div>
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <TypingEffect text="Software Developer" speed={100} />
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <TypingEffect text="Passionate about creating innovative solutions with AI, cloud technologies, and modern web development. Experienced in Azure, Python, and building scalable applications." speed={30} />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="text-lg px-8 py-3 btn-enhanced">
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3 btn-enhanced">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated software developer with expertise in cloud technologies and AI integration
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div 
                className="w-full h-96 rounded-lg bg-cover bg-center shadow-lg parallax animate-float"
                data-speed="0.3"
                style={{
                  backgroundImage: `url(${workspace})`,
                }}
              />
            </div>
            
            <div className="space-y-6 scroll-animate">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Košice, Slovakia</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a software developer with over 6 years of professional experience, currently working as a freelance developer. 
                My journey began at Deutsche Telekom as an SAP Administrator, then evolved into Azure Data Engineering at Accenture, 
                where I worked on cutting-edge projects involving natural language processing and AI technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in Microsoft Azure cloud services, Python development, and modern web technologies. 
                My recent focus has been on AI-powered applications, including document translation services and 
                interactive web tools that make technology more accessible and engaging.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-sm text-muted-foreground">6+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Certifications</p>
                    <p className="text-sm text-muted-foreground">6 Azure Certs</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-semibold mb-2">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Weightlifting", "Drone Piloting", "Gaming", "Technology"].map((interest) => (
                    <Badge key={interest} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work in AI, web development, and interactive applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group card-hover scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                    
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with to build amazing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="card-hover scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center scroll-animate">
            <h3 className="text-2xl font-bold text-foreground mb-8">Microsoft Azure Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <button
                key={index}
                className="w-full h-auto py-4 px-6 border border-border rounded-lg text-left flex items-center justify-start transition-all duration-300 hover:bg-muted/50 hover:border-primary bg-card"
                onClick={() => window.open(cert.url, '_blank', 'noopener,noreferrer')}
              >
                <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-lg font-medium text-foreground flex-grow">{cert.name}</span>
              </button>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate" style={{animationDelay: '0.2s'}}>
            <Button size="lg" asChild className="text-lg px-8 py-3 btn-enhanced">
              <a href="mailto:michal.somsky@protonmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 btn-enhanced">
              <a 
                href="https://www.linkedin.com/in/michal-šomský-75b083201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 btn-enhanced">
              <a 
                href="https://github.com/MIso0o1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border scroll-animate" style={{animationDelay: '0.4s'}}>
            <p className="text-muted-foreground">
              Based in Košice, Slovakia • Available for remote work worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Michal Šomský. Built with React and Tailwind CSS.
          </p>
          <p className="text-muted-foreground mt-2">
            michal.somsky@protonmail.com
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

