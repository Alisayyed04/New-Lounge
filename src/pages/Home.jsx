import { ThemeToggle } from "@/components/ThemeToggle"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/AboutSection"
import { Services } from "../components/ServiceSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/FooterSection"


export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Navbar */}
        <NavBar />
        {/*Main content*/}
        <main>
            <HeroSection />
            <About />
            <Services />
            <ContactSection />
        </main>

        {/*Footer*/}
        <Footer />
    </div>
    )
}