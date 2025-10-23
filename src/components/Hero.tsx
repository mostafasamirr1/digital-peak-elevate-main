import heroMountain from "@/assets/hero-mountain.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMountain}
          alt="Mountain peak at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
              Digital Peak
            </h1>
          </div>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-warm animate-fade-in-up animate-delay-100" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 animate-fade-in-up animate-delay-200 px-4">
            Your Creative Partner in Digital Marketing
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-300 px-4">
            Elevate your brand to new heights with innovative strategies and creative solutions
          </p>
          <div className="pt-2 sm:pt-4 animate-fade-in-up animate-delay-400">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-warm hover:opacity-90 transition-all duration-300 shadow-warm text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
