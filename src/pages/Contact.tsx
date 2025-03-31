
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-dark text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-grain"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Have questions or inquiries? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-navy-dark mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex">
                  <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-navy-light/10 text-navy-dark flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-dark mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      +91-9958363676 (India) <br />
                      +1-416-876-6847 (Canada) <br />
                      +91-9810079707 (India) <br />
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium text-navy-dark mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-navy-dark">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-navy-dark">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-navy-dark">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-serif font-bold text-navy-dark mb-6">
                  Send Us a Message
                </h2>
                 {/* Email */}
                 <div className="flex">
                  <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-navy-light/10 text-navy-dark flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-dark mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      sunlightglobe@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
