import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold">Schedule a Consultation</h1>
        <p className="text-muted-foreground">
          Book a 30-minute meeting to discuss your project and explore how we can help you achieve your goals.
        </p>
        <Button size="lg" className="w-full" asChild>
          <a
            href="https://calendly.com/peter-forestieri/30min-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule Meeting
          </a>
        </Button>
      </div>
    </div>
  )
}