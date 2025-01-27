import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div
        className="absolute inset-0 z-0 hardware-accelerated"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2",
        }}
      />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div
            className="max-w-2xl hardware-accelerated"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <div className="text-yellow-500 mb-4">Make Your Opportunities</div>
            <h1 className="text-5xl font-bold text-white mb-6">Helping Small Business To Grow</h1>
            <p className="text-lg text-gray-300 mb-8">
              We look for new business opportunities and can help you work with your existing customers to get more of
              them to buy.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Our Services</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white hardware-accelerated"
        style={{
          clipPath: "ellipse(75% 100% at 50% 100%)",
        }}
      />
    </div>
  )
}

