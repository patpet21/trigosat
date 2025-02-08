import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SearchIcon } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DeFi Exchange Platform",
    description: "A decentralized exchange platform with automated market maker functionality.",
    category: "blockchain/crypto",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    price: 299,
    tags: ["DeFi", "Smart Contracts", "Web3"],
  },
  {
    id: 2,
    title: "Project Management SaaS",
    description: "Complete project management solution with real-time collaboration features.",
    category: "saas",
    image: "https://images.unsplash.com/photo-1661961110372-8a7682543120?auto=format&fit=crop&q=80&w=800",
    price: 199,
    tags: ["Project Management", "Collaboration", "SaaS"],
  },
  {
    id: 3,
    title: "E-commerce Website Template",
    description: "Modern e-commerce website template with cart and payment integration.",
    category: "web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    price: 0,
    tags: ["E-commerce", "Web Development", "Free"],
  },
]

const categories = [
  { value: "all", label: "All Categories" },
  { value: "blockchain/crypto", label: "Blockchain/Crypto" },
  { value: "saas", label: "SaaS Solutions" },
  { value: "web", label: "Web Development" },
]

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const selectedCategory = searchParams.category || "all"
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="container px-4 py-8 md:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Digital Projects</h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of premium digital projects and solutions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
          />
        </div>
        <Select defaultValue={selectedCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <Badge variant={project.price === 0 ? "secondary" : "default"}>
                  {project.price === 0 ? "Free" : `$${project.price}`}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  )
}