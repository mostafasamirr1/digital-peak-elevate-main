const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-warm bg-clip-text text-transparent animate-fade-in-up">
            Innovative & Creative
          </h2>
          <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-warm mb-6 sm:mb-8 animate-fade-in-up animate-delay-100" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed animate-fade-in-up animate-delay-200 px-4">
            We are an innovative digital agency dedicated to crafting unique stories and driving measurable results.
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-300 px-4">
            At Digital Peak, we combine creativity with data-driven strategies to help your brand reach its summit. Our team of experts is passionate about delivering exceptional results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
