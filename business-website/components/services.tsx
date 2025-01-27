import { Card, CardContent } from "@/components/ui/card"
import { FileText, BarChart3, Calculator, Building2, BookOpen, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <FileText className="h-12 w-12 text-[#E84C22]" />,
      title: "Tax Planning & Compliance",
      description: "Expert guidance on tax planning and ensuring compliance with all regulations.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#E84C22]" />,
      title: "Business Advisory",
      description: "Strategic business advice to help your company grow and succeed.",
    },
    {
      icon: <Calculator className="h-12 w-12 text-[#E84C22]" />,
      title: "Accounting Services",
      description: "Comprehensive accounting solutions for businesses of all sizes.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-[#E84C22]" />,
      title: "Company Formation",
      description: "Complete assistance in company registration and setup.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#E84C22]" />,
      title: "Audit & Assurance",
      description: "Thorough audit services to ensure financial accuracy and compliance.",
    },
    {
      icon: <Users className="h-12 w-12 text-[#E84C22]" />,
      title: "GST Services",
      description: "Expert guidance on GST registration, filing, and compliance.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 hardware-accelerated"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="100"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive business solutions to help your company grow and succeed in today's competitive
            market.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow hardware-accelerated"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="600"
              data-aos-offset="100"
            >
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

