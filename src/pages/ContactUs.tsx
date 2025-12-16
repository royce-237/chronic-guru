import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Facebook, Twitter, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Tag, Award, Truck } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().max(1000, { message: "Message must be less than 1000 characters" }).optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mzzypeya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/90 text-sm font-medium mb-2 uppercase tracking-wider">Chronic Guru</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto">
            Have a Question? Product Inquires? Or just want to simple chat? Then feel free to contact us from either methods below and our staff will be happy to help!
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Online Chat Support */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Online Chat Support</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Our live chat/email service hours are:</p>
              <p className="font-semibold text-foreground">Mon-Fri: 9 am – 10 pm PST</p>
              <p className="font-semibold text-foreground">Sat & Sun: 11am - 10 pm PST.</p>
              <p>Feel free to use the contact form and we'll get back to you during working hours.</p>
              <p className="mt-6">If you haven't already, please check out FAQ section! Your question may already have an answer to it that you can find there.</p>
              <p className="mt-6">If you're still having troubles find the answer to your question, contact us with the form.</p>
              <p className="mt-6">Please allow us some time to respond to your question or comment to ensure you're getting the best quality response.</p>
              <p className="mt-6">Include details such as your name, order number, & a description of your issue or comment.</p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Phoenix Arizona</p>
                  <p className="font-semibold text-foreground">Chronic Guru</p>
                </div>
              </div>
              
              <div>
                <a href="mailto:chronicguru5@gmail.com" className="text-primary hover:underline">
                    info@chronicguru.co
                </a>
              </div>

              {/*<div className="pt-4">*/}
              {/*  <p className="text-sm text-muted-foreground mb-3">Follow us on social media:</p>*/}
              {/*  <div className="flex gap-3">*/}
              {/*    <Button variant="outline" size="icon" className="rounded-full">*/}
              {/*      <Facebook className="h-4 w-4" />*/}
              {/*    </Button>*/}
              {/*    <Button variant="outline" size="icon" className="rounded-full">*/}
              {/*      <Twitter className="h-4 w-4" />*/}
              {/*    </Button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
            <p className="text-muted-foreground mb-6">
              For immediate assistant, please use live chat. Otherwise, fill out the form below and our staff will reply as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="mt-2"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-2"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject")}
                  className="mt-2"
                  placeholder="Enter subject"
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Your message (optional)</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="mt-2 min-h-[120px]"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Secure Online Payments</h3>
              <p className="text-sm text-muted-foreground">We accept Etransfer & Bitcoin!</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Tag className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Sales & Discounts</h3>
              <p className="text-sm text-muted-foreground">There's always something on sale!</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">We test every product!</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">New Lower Shipping Rates</h3>
              <p className="text-sm text-muted-foreground">On All Orders $175+</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
