
import { Globe, Award, Users, Leaf } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-dark text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-grain"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About Sunlight Overseas Inc.
            </h1>
            <p className="text-lg text-white/80 mb-8">
              A legacy of excellence in globe craftsmanship since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-dark mb-6">
                Our Story
              </h2>
              <p className="text-navy-dark/80 mb-6">
                What began as a small venture has grown into a trusted name in the globe industry. 
                Inspired by the vision of making globes accessible to everyone, we have dedicated 
                ourselves to creating products that combine functionality with elegance.
              </p>
              <p className="text-navy-dark/80">
                Founded by master cartographer Charan Singh in 1981, our company started with 
                a workshop in New Delhi with just three artisans. Today, we've expanded to a team 
                of over 50 skilled craftspeople across multiple workshops, maintaining the same 
                dedication to quality that defined our beginnings.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Our workshop"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-white p-3 rounded-lg shadow-lg">
                <p className="font-serif text-lg">Est. 1981</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-4">
              Our Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Sunlight Overseas Inc., our principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-light/10 text-navy-dark mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-dark mb-4">
                Our Mission
              </h3>
              <p className="text-navy-dark/80 mb-4">
                "A Globe for Every Home." Our mission is to inspire a sense of wonder and exploration 
                in every home. We believe that globes are more than just maps—they are windows to the world.
              </p>
              <p className="text-navy-dark/80">
                Through our craftsmanship, we aim to spark curiosity about our planet and encourage 
                a deeper understanding of global geography and cultures.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-light/10 text-navy-dark mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-dark mb-4">
                Craftsmanship and Quality
              </h3>
              <p className="text-navy-dark/80 mb-4">
                At Sunlight Overseas Inc., we take pride in our meticulous craftsmanship. Each globe is 
                carefully designed and assembled by skilled artisans who bring decades of experience to their craft.
              </p>
              <p className="text-navy-dark/80">
                From selecting premium materials to applying traditional techniques, we ensure that every 
                globe leaving our workshop meets our exacting standards for both beauty and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Responsibility */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-light/10 text-navy-dark mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-dark mb-4">
                Our Team
              </h3>
              <p className="text-navy-dark/80 mb-4">
                Behind every Sunlight globe is a team of dedicated professionals committed to excellence. 
                Our artisans, designers, cartographers, and craftspeople work in harmony to create products 
                that stand the test of time.
              </p>
              <p className="text-navy-dark/80">
                With an average tenure of over 12 years, our team members bring both passion and expertise 
                to their work, maintaining traditional skills while embracing innovation.
              </p>
            </div>

            {/* Responsibility */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-light/10 text-navy-dark mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-dark mb-4">
                Our Responsibility
              </h3>
              <p className="text-navy-dark/80 mb-4">
                We are deeply committed to social and environmental responsibility. Our eco-friendly 
                practices include recycling materials, reducing waste, and minimizing our carbon footprint.
              </p>
              <p className="text-navy-dark/80">
                For every globe sold, we contribute to reforestation efforts globally. Through our 
                educational outreach program, we also support geography education in underserved schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-light text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Key milestones in our history of globe craftsmanship.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gold/30 md:before:mx-auto md:before:translate-x-0 before:z-0">
            {/* 1985 */}
            <div className="relative z-10 flex items-center md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white border-4 border-navy-light shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-6 ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-[calc(100%+24px)] max-w-md">
                <div className="font-serif text-gold text-xl mb-2">1985</div>
                <h3 className="font-serif font-semibold text-xl mb-2">Foundation</h3>
                <p className="text-white/80">
                  Sunlight Overseas Inc. was founded by Charan Singh in New Delhi, beginning with a small workshop specializing in hand-crafted globes.
                </p>
              </div>
            </div>

            {/* 1995 */}
            <div className="relative z-10 flex items-center md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white border-4 border-navy-light shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-6 ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-6 max-w-md">
                <div className="font-serif text-gold text-xl mb-2">1995</div>
                <h3 className="font-serif font-semibold text-xl mb-2">International Expansion</h3>
                <p className="text-white/80">
                  After a decade of growth, we opened our first international workshop and began exporting our globes to customers worldwide.
                </p>
              </div>
            </div>

            {/* 2005 */}
            <div className="relative z-10 flex items-center md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white border-4 border-navy-light shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-6 ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-[calc(100%+24px)] max-w-md">
                <div className="font-serif text-gold text-xl mb-2">2005</div>
                <h3 className="font-serif font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-white/80">
                  We introduced our first line of illuminated globes, combining traditional craftsmanship with modern technology.
                </p>
              </div>
            </div>

            {/* 2015 */}
            <div className="relative z-10 flex items-center md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white border-4 border-navy-light shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-6 ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-6 max-w-md">
                <div className="font-serif text-gold text-xl mb-2">2015</div>
                <h3 className="font-serif font-semibold text-xl mb-2">Eco-Initiative</h3>
                <p className="text-white/80">
                  We launched our sustainability initiative, committing to eco-friendly materials and supporting global reforestation efforts.
                </p>
              </div>
            </div>

            {/* Today */}
            <div className="relative z-10 flex items-center md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white border-4 border-navy-light shrink-0">
                <span className="font-bold">5</span>
              </div>
              <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-6 ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-[calc(100%+24px)] max-w-md">
                <div className="font-serif text-gold text-xl mb-2">Today</div>
                <h3 className="font-serif font-semibold text-xl mb-2">Global Presence</h3>
                <p className="text-white/80">
                  Now with workshops on three continents and a presence in over 50 countries, we continue our mission to bring premium globes to homes worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
