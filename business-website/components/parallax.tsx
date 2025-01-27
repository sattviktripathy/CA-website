import { Button } from "@/components/ui/button"

export function Parallax() {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center text-white"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Let our experts guide you towards success.</p>
          <Button className="bg-[#E84C22] hover:bg-[#d43d1a] text-white">Get Started Today</Button>
        </div>
      </div>
    </section>
  )
}

