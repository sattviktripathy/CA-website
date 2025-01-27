import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Jigar Saraiya has transformed our business operations. Their expertise in tax planning saved us significant resources.",
      author: "John Smith",
      position: "CEO, Tech Solutions",
    },
    {
      quote:
        "The team's knowledge and professional approach to handling our accounts has been invaluable. Highly recommended!",
      author: "Sarah Johnson",
      position: "Director, Growth Enterprises",
    },
    {
      quote:
        "Exceptional service and attention to detail. They've been crucial in our company's financial planning and growth.",
      author: "Michael Brown",
      position: "Founder, Innovation Labs",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="600"
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-[#E84C22] mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

