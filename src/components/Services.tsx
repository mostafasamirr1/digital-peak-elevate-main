import { Megaphone, FileText, Edit3, Search, Video, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Campaigns, Engagement, Paid Ads",
    details: "Build your brand presence across all social platforms with strategic campaigns that drive engagement and conversions.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Blog Posts, Storytelling, Articles",
    details: "Compelling content that tells your story and resonates with your audience, driving traffic and building trust.",
  },
  {
    icon: Edit3,
    title: "Copywriting",
    description: "Ad Copies, Persuasive Texts, Creative Slogans",
    details: "Words that convert. We craft persuasive copy that captures attention and drives action.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Keywords, On-Page & Off-Page SEO, Technical Optimization",
    details: "Boost your visibility and rank higher on search engines with our comprehensive SEO strategies.",
  },
  {
    icon: Video,
    title: "Production",
    description: "Video Production, Photography, Motion Graphics",
    details: "Professional visual content that brings your brand to life and captivates your audience.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Graphic Identity, Branding, Logo Design, Creative Assets",
    details: "Stunning visuals that define your brand and create lasting impressions across all touchpoints.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-warm bg-clip-text text-transparent animate-fade-in-up">
            Our Services
          </h2>
          <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-warm animate-fade-in-up animate-delay-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-3 bg-card border-border animate-fade-in-up hover-float cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-xl bg-gradient-warm flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-500 icon-pulse" />
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground relative z-10 icon-bounce transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent font-medium mb-3">
                    {service.description}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
