import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Eye } from "lucide-react";
import landscapeImage from "@/assets/portfolio-landscape.jpg";
import portraitImage from "@/assets/portfolio-portrait.jpg";
import weddingImage from "@/assets/portfolio-wedding.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Golden Hour Landscape",
      category: "landscape",
      image: landscapeImage,
      description: "Breathtaking mountain vista captured during golden hour"
    },
    {
      id: 2,
      title: "Elegant Portrait",
      category: "portrait",
      image: portraitImage,
      description: "Natural light portrait showcasing genuine emotion"
    },
    {
      id: 3,
      title: "Wedding Dance",
      category: "wedding",
      image: weddingImage,
      description: "Romantic first dance captured with artistic lighting"
    },
    {
      id: 4,
      title: "Mountain Sunset",
      category: "landscape",
      image: landscapeImage,
      description: "Dramatic landscape with stunning natural colors"
    },
    {
      id: 5,
      title: "Bridal Portrait",
      category: "portrait",
      image: portraitImage,
      description: "Timeless bridal portrait in natural setting"
    },
    {
      id: 6,
      title: "Reception Joy",
      category: "wedding",
      image: weddingImage,
      description: "Candid moments of celebration and happiness"
    }
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "wedding", label: "Weddings" },
    { id: "portrait", label: "Portraits" },
    { id: "landscape", label: "Landscapes" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my favorite captures, showcasing the beauty 
            and emotion in every frame.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "elegant"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Button variant="hero" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="elegant" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="group">
            View Full Portfolio
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;