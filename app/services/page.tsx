import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Briefcase, Code2, Rocket, Building2, Globe, Star, ArrowRight, Users, Timer, CheckCircle2, MessageSquare } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    icon: Code2,
    title: "Properties MetaLand",
    description: "🚀 Own a fraction of a property? Now it's possible! With blockchain, real estate tokenization makes investing easier, faster & more accessible.",
    benefits: [
      "Small capital entry",
      "Quick transactions",
      "Diversify easily"
    ],
    url: "https://properties.metalandspaceapp.xyz/",
    price: "Contact for pricing"
  },
  {
    icon: Building2,
    title: "TokenEstate Platform",
    description: "🔥 Investing in real estate without buying an entire property? Now it's possible! Tokenization is changing the game with blockchain technology.",
    benefits: [
      "Accessibility – Invest with just a few dollars",
      "Liquidity – Buy and sell faster",
      "Transparency – Secure transactions",
      "Diversification – Multiple properties"
    ],
    url: "https://bolt.new/?rid=nse3rp",
    price: "Contact for pricing"
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Transform your ideas into reality with our expert development team. We specialize in blockchain solutions, web applications, and innovative digital products.",
    benefits: [
      "Blockchain expertise",
      "Custom solutions",
      "Technical excellence"
    ],
    price: "Custom quote"
  },
  {
    icon: Briefcase,
    title: "Project Customization",
    description: "Adapt our existing projects to your specific needs. We'll modify and enhance any of our platform's solutions to perfectly match your requirements.",
    benefits: [
      "Tailored solutions",
      "Quick implementation",
      "Expert support"
    ],
    price: "Based on requirements"
  },
  {
    icon: Building2,
    title: "US Business Opportunities",
    description: "Leverage our expertise in the American market. We provide guidance on business establishment, market entry strategies, and growth opportunities in the US.",
    benefits: [
      "Market analysis",
      "Entry strategy",
      "Compliance guidance"
    ],
    price: "Custom packages"
  },
  {
    icon: Globe,
    title: "International Expansion",
    description: "Expand your business globally with our international market expertise. We'll help you identify opportunities and develop strategies for successful market entry.",
    benefits: [
      "Global strategy",
      "Market research",
      "Local partnerships"
    ],
    price: "Custom quote"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures Inc",
    content: "The blockchain solutions provided by this team have transformed our real estate business. Their expertise and dedication to innovation are unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Michael Chen",
    role: "Founder, GlobalTrade Solutions",
    content: "Their international expansion services helped us successfully enter new markets. The team's knowledge and strategic guidance were invaluable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Emma Williams",
    role: "Director, PropertyTech Ltd",
    content: "The TokenEstate Platform has revolutionized how we handle property investments. The technology is robust and the support is exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
]

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We begin with a detailed discussion of your needs and objectives to understand your vision perfectly."
  },
  {
    icon: CheckCircle2,
    title: "Strategy Development",
    description: "Our team creates a comprehensive strategy tailored to your specific requirements and goals."
  },
  {
    icon: Timer,
    title: "Implementation",
    description: "We execute the plan with precision, keeping you informed at every step of the process."
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Our commitment doesn't end at delivery - we provide continuous support and optimization."
  }
]

const faqs = [
  {
    question: "How do your blockchain solutions work?",
    answer: "Our blockchain solutions utilize cutting-edge distributed ledger technology to provide secure, transparent, and efficient digital transactions. We implement smart contracts and tokenization to create reliable and automated systems for various business processes."
  },
  {
    question: "What makes your real estate tokenization different?",
    answer: "Our tokenization platform stands out through its user-friendly interface, robust security measures, and compliance with regulatory requirements. We enable fractional ownership with minimal entry barriers while ensuring complete transparency and liquidity."
  },
  {
    question: "How do you handle international business expansion?",
    answer: "We provide comprehensive support for international expansion, including market analysis, regulatory compliance guidance, local partnership development, and strategic planning. Our team has extensive experience in multiple markets and can help navigate complex international business environments."
  },
  {
    question: "What types of support do you offer after project completion?",
    answer: "We provide ongoing technical support, maintenance, updates, and optimization services. Our team remains available for consultations and can help with any additional features or modifications needed as your business grows."
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Services & Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our comprehensive range of blockchain and business solutions
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="flex flex-col">
                <CardContent className="flex flex-col items-center p-6 text-center flex-grow">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4 flex-grow">
                    {service.benefits?.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-left">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-4 w-full">
                    <p className="font-semibold">{service.price}</p>
                    {service.url ? (
                      <Button className="w-full" asChild>
                        <a href={service.url} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20">
                        <ArrowRight className="absolute right-0 -top-2 h-4 w-4 text-primary/40" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <Star className="absolute -top-3 -left-3 h-6 w-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-lg">
            Schedule a consultation to discuss your project and explore how we can help you achieve your goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}