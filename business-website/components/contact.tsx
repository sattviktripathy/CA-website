import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="800" data-aos-offset="200" data-aos-easing="ease-out-cubic">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#E84C22]" />
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="text-gray-600">0141-4072000</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#E84C22]" />
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-gray-600">contact@jigarsaraiya.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#E84C22]" />
                <div>
                  <div className="font-bold">Address</div>
                  <div className="text-gray-600">123 Business Avenue, Mumbai, India</div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="800" data-aos-offset="200" data-aos-easing="ease-out-cubic">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#E84C22] hover:bg-[#d43d1a]">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

