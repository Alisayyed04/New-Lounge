import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { cn } from "@/lib/utils";

const services = [
    { id: "haircuts", name: "Haircuts", category: "Hair Services" },
    { id: "hair-styling", name: "Hair Styling", category: "Hair Services" },
    { id: "hair-coloring", name: "Hair Coloring", category: "Hair Services" },
    { id: "facials", name: "Facials", category: "Skin & Facial Services" },
    { id: "peels", name: "Peels", category: "Skin & Facial Services" },
    { id: "manicure", name: "Manicure", category: "Nail Services" },
    { id: "pedicure", name: "Pedicure", category: "Nail Services" },
    { id: "bridal-hair-makeup", name: "Bridal Hair & Makeup", category: "Bridal & Event Services" },
    { id: "event-makeup", name: "Event Makeup", category: "Bridal & Event Services" },
    // Add all your services here...
];

const categories = [
    "Hair Services",
    "Skin & Facial Services",
    "Nail Services",
    "Bridal & Event Services"
];

// Dummy photos array for example:
const photos = [
    { id: 1, serviceId: "haircuts", url: "/images/haircut1.jpg" },
    { id: 2, serviceId: "hair-coloring", url: "/images/haircolor1.jpg" },
    { id: 3, serviceId: "manicure", url: "/images/manicure1.jpg" },
    { id: 4, serviceId: "haircuts", url: "/images/haircut2.jpg" },
    { id: 5, serviceId: "event-makeup", url: "/images/eventmakeup1.jpg" },
    // Add your real photos here
];

export const Gallery = ({
    theme,
    setTheme,
    menuOpen,
    setMenuOpen,
    menuData,
    setMenuData,
    setNavbarVisible,
    navbarVisible,
}) => {
    const { serviceId } = useParams();
    const initialCategory = serviceId
        ? services.find((s) => s.id === serviceId)?.category || "Hair Services"
        : "Hair Services";

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [activeSubcategory, setActiveSubcategory] = useState(serviceId || null);

    const subServices = services.filter((s) => s.category === activeCategory);

    const filteredPhotos = photos.filter((photo) => {
        if (activeSubcategory) {
            return photo.serviceId === activeSubcategory;
        } else {
            return subServices.some((s) => s.id === photo.serviceId);
        }
    });

    const onCategoryClick = (category) => {
        setActiveCategory(category);
        setActiveSubcategory(null);
    };

    return (
        <>
            {/* Navbar */}
            <NavBar
                theme={theme}
                setTheme={setTheme}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                menuData={menuData}
                setMenuData={setMenuData}
                navbarVisible={navbarVisible}
                setNavbarVisible={setNavbarVisible}
            />

            {/* Page Content */}
            <section className="gallery-section p-8 pt-24 min-h-screen bg-background text-foreground">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Gallery - <span className="text-primary">{activeCategory}</span>
                </h2>

                {/* Main categories */}
                <div className="flex justify-center gap-4 mb-6 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryClick(category)}
                            className={cn(
                                "px-5 py-2 rounded-full capitalize transition-colors duration-300 whitespace-nowrap",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Subcategories */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveSubcategory(null)}
                        className={cn(
                            "px-4 py-1 rounded-full capitalize border",
                            !activeSubcategory
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-transparent text-foreground border-secondary"
                        )}
                    >
                        All
                    </button>
                    {subServices.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveSubcategory(service.id)}
                            className={cn(
                                "px-4 py-1 rounded-full capitalize border",
                                activeSubcategory === service.id
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-transparent text-foreground border-secondary"
                            )}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredPhotos.length > 0 ? (
                        filteredPhotos.map((photo) => (
                            <img
                                key={photo.id}
                                src={photo.url}
                                alt={photo.serviceId}
                                className="rounded-lg shadow-md object-cover w-full h-48"
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full">No photos found.</p>
                    )}
                </div>
            </section>
        </>
    );
};
