
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/a1dc9583-befe-41df-bb21-3ef659675a0c.png" 
            alt="Premium Globe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-shadow animate-fade-in">
            Exquisite Globes <br className="hidden md:block" />
            <span className="text-gold">Crafted with Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 text-shadow animate-fade-in">
            Discover our collection of premium handcrafted globes, where artistry meets geography.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button asChild className="bg-gold hover:bg-gold-dark text-white border-0">
              <Link to="/gallery">
                Explore Collection
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-4">
              Premium Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each globe in our collection is meticulously crafted to combine beauty, 
              accuracy, and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Item 1 */}
            <div className="group globe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/e73e6032-3fb6-4e23-9052-c14557d262d9.png" 
                  alt="Antique Style Globe"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full mb-2">
                      Premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-dark mb-2">
                  Classic Heritage Globe
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A timeless addition to any study or office, our Heritage Globe combines classic design with modern cartography.
                </p>
                <Link 
                  to="/gallery"
                  className="inline-flex items-center text-gold hover:text-gold-dark font-medium text-sm"
                >
                  Explore details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="group globe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/a1dc9583-befe-41df-bb21-3ef659675a0c.png" 
                  alt="Modern Design Globe"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full mb-2">
                      Bestseller
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-dark mb-2">
                  Modern Illuminated Globe
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Bring the world to life with our illuminated globe, featuring LED lighting and contemporary styling.
                </p>
                <Link 
                  to="/gallery"
                  className="inline-flex items-center text-gold hover:text-gold-dark font-medium text-sm"
                >
                  Explore details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="group globe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/e73e6032-3fb6-4e23-9052-c14557d262d9.png" 
                  alt="Luxury Globe"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full mb-2">
                      Limited Edition
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-dark mb-2">
                  Executive Crystal Globe
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our premium crystal globe stands as a statement piece, meticulously handcrafted with the finest materials.
                </p>
                <Link 
                  to="/gallery"
                  className="inline-flex items-center text-gold hover:text-gold-dark font-medium text-sm"
                >
                  Explore details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-navy hover:bg-navy-dark text-white">
              <Link to="/gallery">View All Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-light text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose Sunlight Globes
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our commitment to quality and craftsmanship is what sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-navy-dark/50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Exceptional Craftsmanship
              </h3>
              <p className="text-white/70">
                Each globe is created by skilled artisans with decades of experience, 
                ensuring unparalleled quality in every detail.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-navy-dark/50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
                <Globe size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Geographical Accuracy
              </h3>
              <p className="text-white/70">
                We pride ourselves on cartographic precision, regularly updating our designs 
                to reflect the most current geographical information.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-navy-dark/30 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-navy-dark/50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Innovative Designs
              </h3>
              <p className="text-white/70">
                We combine traditional techniques with modern innovations to create globes 
                that are both functional works of art and educational tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                  Ready to Bring the World Home?
                </h2>
                <p className="text-white/80 mb-6">
                  Contact us today to learn more about our collection or to discuss custom globe designs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gold hover:bg-gold-dark text-white border-0">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/gallery">
                      Browse Collection
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551373284-42a7b5af3c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Premium Globe Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-dark/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
