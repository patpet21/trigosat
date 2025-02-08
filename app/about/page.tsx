import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Building2, Users, Trophy } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pioneering Blockchain Innovation
              </h1>
              <p className="text-lg text-muted-foreground">
                I've been passionate about blockchain and cryptocurrencies from the moment I discovered their potential to revolutionize the way we think about security and transparency.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                alt="Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Building2 className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">New York Based</h3>
              <p className="text-sm text-muted-foreground">
                Operating from the heart of innovation and finance, bringing a global perspective to blockchain solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">Community Builder</h3>
              <p className="text-sm text-muted-foreground">
                Created and nurtured thriving communities that share knowledge and create valuable connections.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Trophy className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">Engineering Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Bringing precision and a detail-oriented mindset to exploring real opportunities in the crypto space.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-muted/50">
        <div className="container px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Vision"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Vision</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Integration Excellence</h3>
                    <p className="text-muted-foreground">Seamlessly integrating blockchain with existing businesses to enhance efficiency and trust.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Innovation Focus</h3>
                    <p className="text-muted-foreground">Constantly exploring new ways to leverage blockchain technology for real-world impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Community Growth</h3>
                    <p className="text-muted-foreground">Building and nurturing communities that drive innovation and collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}