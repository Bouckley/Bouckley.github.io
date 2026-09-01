import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { personalInfo } from "@/data/portfolio-data";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you'd send this to your backend
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              I'm always open to discussing new projects, opportunities, or just
              having a chat about tech. Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card card-elevated border border-border hover:border-primary/50 transition-colors focus-ring group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card card-elevated border border-border hover:border-primary/50 transition-colors focus-ring group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    github.com/jordanbouckley
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card card-elevated border border-border hover:border-primary/50 transition-colors focus-ring group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    linkedin.com/in/jordanbouckley
                  </p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus-ring transition-colors ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus-ring transition-colors ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus-ring transition-colors resize-none ${
                    errors.message ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full focus-ring"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {isSubmitted && (
                <p className="text-sm text-primary text-center">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
