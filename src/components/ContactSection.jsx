import {
    Instagram,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const message = e.target.message.value;
        const encodedMessage = encodeURIComponent(
            `Hello New Lounge, my name is ${name}. ${message}`
        );

        window.open(`https://wa.me/918766613766?text=${encodedMessage}`, "_blank");
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30" >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Ready for a fresh new look? Reach out to New Lounge and let’s make it happen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+918766613766"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 87666 13766
                                    </a>
                                </div>
                            </div>

                            {/* Location with icon link */}
                            <div className="flex items-start space-x-4">
                                <a
                                    href="https://www.google.com/maps?q=New+Lounge+Salon+Viman+Nagar+Pune"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                    <MapPin className="h-6 w-6 text-primary" />
                                </a>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        href="https://www.google.com/maps?q=New+Lounge+Salon+Viman+Nagar+Pune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors underline"
                                    >
                                        New Lounge, Viman Nagar, Pune, Maharashtra
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Us</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.instagram.com/new_lounge_salon_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Form */}
                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message on WhatsApp</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="I'd like to book an appointment for a haircut..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
                                )}
                            >
                                Send via WhatsApp
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
