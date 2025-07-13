import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Mountain, Camera, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage capturing every precious moment from preparation to celebration.",
      features: ["8-12 hours coverage", "Engagement session included", "Online gallery", "High-resolution images"],
      price: "Starting at $2,500",
      popular: true
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, couples, families, and corporate headshots.",
      features: ["1-2 hour session", "Multiple outfit changes", "Retouched images", "Print release included"],
      price: "Starting at $350"
    },
    {
      icon: Camera,
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, graduations, and special celebrations.",
      features: ["Flexible hours", "Same-day preview", "Professional editing", "Fast delivery"],
      price: "Starting at $150/hour"
    },
    {
      icon: Mountain,
      title: "Lifestyle Photography",
      description: "Natural, candid photography that captures authentic moments in beautiful outdoor settings.",
      features: ["Golden hour sessions", "Location scouting", "Lifestyle coaching", "Natural light focus"],
      price: "Starting at $450"
    }
  ];

  const additionalServices = [
    { icon: Clock, title: "Quick Turnaround", description: "Rush delivery available for urgent needs" },
    { icon: MapPin, title: "Travel Services", description: "Available for destination photography worldwide" },
    { icon: Camera, title: "Equipment Rental", description: "Professional photography equipment available for rent" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Photography Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments 
            with artistic vision and technical excellence.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-elegant transition-all duration-500 animate-fade-in ${
                service.popular ? 'border-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                    <div className="text-primary font-semibold">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={service.popular ? "hero" : "elegant"} 
                  className="w-full group"
                >
                  Book Now
                  <Camera className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-lg p-8 text-white">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Ready to Create Beautiful Memories?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your photography needs and create a custom package that perfectly 
              captures your vision and fits your budget.
            </p>
            <Button variant="elegant" size="lg" className="bg-white text-foreground hover:bg-white/90">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;