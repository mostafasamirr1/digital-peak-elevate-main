import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name cannot be empty").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message cannot be empty").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formsubmit.co/ajax/digiitalpeakk@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: "New Contact Form Submission - Digital Peak",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. We will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send message",
        description: "Please try again in a moment or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-warm bg-clip-text text-transparent animate-fade-in-up">
            Contact Us
          </h2>
          <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-warm animate-fade-in-up animate-delay-100" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Get in Touch</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Ready to elevate your brand? Reach out to us and let's start creating something amazing together.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4 group hover-float">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-warm flex items-center justify-center flex-shrink-0 icon-bounce">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</p>
                  <a href="tel:01558557331" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    01558557331
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 group hover-float">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-warm flex items-center justify-center flex-shrink-0 icon-bounce">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">WhatsApp</p>
                  <a
                    href="https://wa.me/201558557331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    01558557331
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 group hover-float">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-warm flex items-center justify-center flex-shrink-0 icon-bounce">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</p>
                  <a
                    href="mailto:digiitalpeakk@gmail.com"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    digiitalpeakk@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-6 sm:p-8 rounded-2xl shadow-soft animate-fade-in-up animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border resize-none"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-warm hover:opacity-90 transition-all duration-300 shadow-warm text-base sm:text-lg py-5 sm:py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
