import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Briefcase, Code2, Coins, Building2, Globe, Rocket } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Digital Projects",
    description: "Access a curated collection of blockchain, SaaS, and web projects.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Expert guidance to help grow and scale your business.",
  },
  {
    icon: Coins,
    title: "Flexible Payments",
    description: "Pay with traditional methods or cryptocurrencies.",
  },
]

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Transform your ideas into reality with our expert development team. We specialize in blockchain solutions, web applications, and innovative digital products.",
  },
  {
    icon: Briefcase,
    title: "Project Customization",
    description: "Adapt our existing projects to your specific needs. We'll modify and enhance any of our platform's solutions to perfectly match your requirements.",
  },
  {
    icon: Building2,
    title: "US Business Opportunities",
    description: "Leverage our expertise in the American market. We provide guidance on business establishment, market entry strategies, and growth opportunities in the US.",
  },
  {
    icon: Rocket,
    title: "Startup Consulting",
    description: "Get expert guidance on launching and scaling your startup. From ideation to market entry, we'll help you navigate the challenges of building a successful business.",
  },
  {
    icon: Globe,
    title: "International Expansion",
    description: "Expand your business globally with our international market expertise. We'll help you identify opportunities and develop strategies for successful market entry.",
  },
]

const featuredProjects = [
  {
    title: "Properties MetaLand",
    description: "🚀 Own a fraction of a property? Now it's possible! With blockchain, real estate tokenization makes investing easier, faster & more accessible.",
    benefits: [
      "Small capital entry",
      "Quick transactions",
      "Diversify easily"
    ],
    url: "https://properties.metalandspaceapp.xyz/",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "TokenEstate Platform",
    description: "🔥 Investing in real estate without buying an entire property? Now it's possible! Tokenization is changing the game with blockchain technology.",
    benefits: [
      "Accessibility – Invest with just a few dollars",
      "Liquidity – Buy and sell faster",
      "Transparency – Secure transactions",
      "Diversification – Multiple properties"
    ],
    url: "https://bolt.new/?rid=nse3rp",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your Digital Vision Into Reality
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Access premium digital projects and expert consulting services to accelerate your business growth.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/projects">Explore Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <a 
                key={project.title} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title}>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Icon className="h-12 w-12 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-lg">
            Join our platform today and get access to premium digital projects and expert consulting services.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}