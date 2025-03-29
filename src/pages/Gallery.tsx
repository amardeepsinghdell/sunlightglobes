import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon, Filter } from "lucide-react";

// Define our globe categories
const categories = [
  { id: "all", label: "All Globes" },
  { id: "antique", label: "Antique Style" },
  { id: "modern", label: "Modern Design" },
  { id: "illuminated", label: "Illuminated" },
  { id: "luxury", label: "Luxury Collection" },
];

// Define our gallery items
const galleryItems = [
  {
    id: 1,
    title: "Classic Antique Globe",
    category: "antique",
    image: "https://images.unsplash.com/photo-1614935152048-3e36d276b26c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A timeless antique-style globe with detailed topographical features.",
  },
  {
    id: 2,
    title: "Modern Minimalist Globe",
    category: "modern",
    image: "https://images.unsplash.com/photo-1658155299617-5d7e0f026a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A sleek, minimalist globe design perfect for contemporary spaces.",
  },
  {
    id: 3,
    title: "Celestial Illuminated Globe",
    category: "illuminated",
    image: "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "An illuminated globe showcasing both geographical and celestial features.",
  },
  {
    id: 4,
    title: "Executive Crystal Globe",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1599930113854-d6d7fd522947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A premium crystal globe with gold-plated meridian and base.",
  },
  {
    id: 5,
    title: "Desktop Antique Globe",
    category: "antique",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A compact antique-style globe perfect for desks and small spaces.",
  },
  {
    id: 6,
    title: "Ocean Relief Globe",
    category: "modern",
    image: "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description: "A modern globe highlighting ocean topography and depths.",
  },
  {
    id: 7,
    title: "Night Sky Illuminated Globe",
    category: "illuminated",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "An illuminated globe that transforms into a star map in darkened rooms.",
  },
  {
    id: 8,
    title: "Gold Leaf Luxury Globe",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1557937879-3d33ebba8499?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    description: "A handcrafted globe with genuine gold leaf detailing.",
  },
  {
    id: 9,
    title: "Victorian Style Globe",
    category: "antique",
    image: "https://images.unsplash.com/photo-1571450669798-8deb8763c4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A detailed reproduction of Victorian-era globe craftsmanship.",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter items based on active category
  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-dark text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-grain"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Globe Collection
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Explore our diverse range of meticulously crafted globes, from antique reproductions to modern designs.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full flex items-center justify-center"
            >
              <Filter size={18} className="mr-2" />
              Filter Collections
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters - Desktop & Mobile */}
            <div className={`md:block ${showMobileFilter ? 'block' : 'hidden'} md:col-span-1`}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-dark mb-4 flex items-center">
                  <ImageIcon size={20} className="mr-2" /> Collections
                </h3>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeTab === category.id ? "default" : "ghost"}
                      className={`w-full justify-start text-left ${
                        activeTab === category.id 
                          ? "bg-navy text-white hover:bg-navy-dark" 
                          : "text-navy-dark hover:text-navy"
                      }`}
                      onClick={() => {
                        setActiveTab(category.id);
                        setShowMobileFilter(false);
                      }}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group globe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full mb-2">
                            {categories.find(cat => cat.id === item.category)?.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-navy-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-navy-dark text-lg">No globes found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why our globes are treasured by collectors and enthusiasts worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center text-white font-serif text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-navy-dark">James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Collector</p>
                </div>
              </div>
              <p className="text-navy-dark/80 italic">
                "The craftsmanship on my Executive Crystal Globe is exceptional. It has become the centerpiece of my study and a conversation starter with guests."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center text-white font-serif text-xl">
                  E
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-navy-dark">Emily Parker</h3>
                  <p className="text-sm text-muted-foreground">Interior Designer</p>
                </div>
              </div>
              <p className="text-navy-dark/80 italic">
                "I recommend Sunlight Globes to all my clients looking for sophisticated decor pieces. The quality and design are consistently outstanding."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center text-white font-serif text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-navy-dark">Robert Chen</h3>
                  <p className="text-sm text-muted-foreground">Education Director</p>
                </div>
              </div>
              <p className="text-navy-dark/80 italic">
                "The illuminated globes we purchased for our school library have not only been educational tools but also beautiful art pieces that inspire our students."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
