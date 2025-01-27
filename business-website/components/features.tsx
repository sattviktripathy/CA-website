import { CheckCircle } from "lucide-react"

export function Features() {
  const features = [
    "Expert Financial Guidance",
    "Tax Planning & Strategy",
    "Business Advisory Services",
    "Risk Management",
    "Compliance Support",
    "Growth Consulting",
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hardware-accelerated" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8">
              With years of experience and a dedicated team of professionals, we provide comprehensive business
              solutions tailored to your needs. Our expertise ensures your business stays compliant while maximizing
              growth opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 hardware-accelerated"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  data-aos-duration="600"
                  data-aos-offset="100"
                >
                  <CheckCircle className="h-5 w-5 text-[#E84C22]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative hardware-accelerated"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business professionals in a meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#E84C22] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

