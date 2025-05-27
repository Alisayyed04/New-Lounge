import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    Scissors,
    Brush,
    Heart,
    Sparkles,
} from "lucide-react";

const services = [
    { id: "haircuts", name: "Haircuts", description: "Basic trims, layered cuts, bob cuts, pixie cuts, etc.", price: "₹330", category: "Hair Services" },
    { id: "hair-styling", name: "Hair Styling", description: "Blowouts, curling, straightening, updos, braiding.", price: "₹3320", category: "Hair Services" },
    { id: "hair-coloring", name: "Hair Coloring", description: "Highlights, balayage, ombre, full color, color correction, root touch-ups.", price: "₹8300", category: "Hair Services" },
    { id: "hair-treatments", name: "Hair Treatments", description: "Deep conditioning, keratin treatment, hair spa, hair mask, scalp treatments.", price: "₹4150", category: "Hair Services" },
    { id: "hair-extensions", name: "Hair Extensions", description: "Clip-in, tape-in, fusion extensions.", price: "₹12450", category: "Hair Services" },
    { id: "hair-straightening", name: "Hair Straightening & Perming", description: "Chemical straightening, permanent waves.", price: "₹5810", category: "Hair Services" },

    { id: "facials", name: "Facials", description: "Deep cleansing, anti-aging, hydrating facials, exfoliation.", price: "₹4980", category: "Skin & Facial Services" },
    { id: "peels", name: "Peels", description: "Chemical peels for brightening, acne, and skin rejuvenation.", price: "₹6640", category: "Skin & Facial Services" },
    { id: "microdermabrasion", name: "Microdermabrasion", description: "Exfoliating treatment to improve skin texture and reduce wrinkles.", price: "₹7470", category: "Skin & Facial Services" },
    { id: "waxing", name: "Waxing", description: "Full body waxing, including eyebrows, legs, and underarms.", price: "₹3320", category: "Skin & Facial Services" },
    { id: "threading", name: "Threading", description: "Eyebrow and facial hair threading for precise shaping.", price: "₹1245", category: "Skin & Facial Services" },
    { id: "skin-treatments", name: "Skin Treatments", description: "Acne treatments, pigmentation reduction, skin rejuvenation.", price: "₹5810", category: "Skin & Facial Services" },

    { id: "manicure", name: "Manicure", description: "Nail shaping, cuticle care, and polish application.", price: "₹1660", category: "Nail Services" },
    { id: "pedicure", name: "Pedicure", description: "Foot care, exfoliation, nail shaping, and polish application.", price: "₹2075", category: "Nail Services" },
    { id: "nail-art", name: "Nail Art", description: "Creative designs using gel, acrylic, and other materials.", price: "₹2905", category: "Nail Services" },
    { id: "acrylic-nails", name: "Acrylic Nails", description: "Durable, long-lasting artificial nails in various styles.", price: "₹4150", category: "Nail Services" },
    { id: "gel-nails", name: "Gel Nails", description: "A long-lasting alternative to regular nail polish, often with a shiny finish.", price: "₹3735", category: "Nail Services" },
    { id: "nail-extensions", name: "Nail Extensions", description: "Add length to natural nails with gel or acrylic extensions.", price: "₹4980", category: "Nail Services" },

    { id: "bridal-hair-makeup", name: "Bridal Hair & Makeup", description: "Specialized hair styling and makeup services for brides on their special day.", price: "₹16600", category: "Bridal & Event Services" },
    { id: "bridal-trial", name: "Bridal Trial", description: "A pre-wedding session to try different hairstyles and makeup looks before the big day.", price: "₹8300", category: "Bridal & Event Services" },
    { id: "event-makeup", name: "Event Makeup", description: "Makeup services for parties, proms, and special events.", price: "₹12450", category: "Bridal & Event Services" },
    { id: "bridal-party", name: "Bridal Party Hair & Makeup", description: "Hair and makeup services for bridesmaids and other members of the bridal party.", price: "₹12450", category: "Bridal & Event Services" },
    { id: "hair-makeup-packages", name: "Hair & Makeup Packages", description: "Custom packages for hair and makeup services tailored to the client’s needs for events.", price: "₹29050", category: "Bridal & Event Services" }
];


const categories = ["all", "Hair Services", "Bridal & Event Services", "Nail Services", "Skin & Facial Services"];

export const Services = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = services.filter(
        (service) => activeCategory === "all" || service.category === activeCategory
    );

    const getIcon = (category) => {
        switch (category) {
            case "Hair Services":
                return <Scissors className="w-5 h-5 text-primary" />;
            case "Skin & Facial Services":
                return <Sparkles className="w-5 h-5 text-primary" />;
            case "Nail Services":
                return <Brush className="w-5 h-5 text-primary" />;
            case "Bridal & Event Services":
                return <Heart className="w-5 h-5 text-primary" />;
            default:
                return null;
        }
    };

    return (
        <section id="services" className="py-24 px-4 relative bg-secondary/30" >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Our <span className="text-primary">Services</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="text-left mb-4 space-y-1">
                                <div className="flex items-center gap-2 mb-1">
                                    {getIcon(service.category)}
                                    <h3 className="font-semibold text-lg text-primary">{service.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <p className="font-bold text-lg text-foreground">{service.price}</p>
                            </div>
                            {/* Link to service-specific gallery */}
                            <Link
                                to={`/gallery/${service.id}`}
                                className="inline-block mt-4 text-sm text-primary underline hover:text-primary/80 transition"
                            >
                                View Gallery →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
