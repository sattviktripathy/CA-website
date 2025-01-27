export function About() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="800" data-aos-offset="200" data-aos-easing="ease-out-cubic">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Business meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="800" data-aos-offset="200" data-aos-easing="ease-out-cubic">
            <div className="text-[#E84C22] font-semibold mb-4">About Us</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We turn information into actionable insights</h2>
            <p className="text-gray-600 leading-relaxed">
              Our experienced team provides expert guidance and solutions to help your business succeed. We understand
              the challenges of modern business and work alongside you to achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

