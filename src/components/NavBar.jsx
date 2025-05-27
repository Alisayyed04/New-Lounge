import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
    { name: "Home", to: "/" },
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "#contact" },
];

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const bgClass = cn(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
            ? "bg-white/95 dark:bg-gray-900/90 shadow-md border-b border-gray-300 dark:border-gray-700"
            : "bg-transparent border-b border-transparent"
    );

    const linkBase =
        "relative px-3 py-2 font-medium transition-colors duration-200 group cursor-pointer";

    const handleAnchorClick = (e, to) => {
        e.preventDefault();
        setMenuOpen(false);

        if (location.pathname === "/") {
            const target = document.querySelector(to);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/", { replace: false });
            setTimeout(() => {
                const target = document.querySelector(to);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    const renderLink = (item, idx) => {
        const isActive =
            (item.to === "/" && location.pathname === "/") ||
            (item.to !== "/" && location.pathname === item.to);

        const commonProps = {
            key: idx,
            className: cn(
                linkBase,
                "text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400",
                isActive && "font-semibold border-b-2 border-blue-600"
            ),
        };

        if (item.to === "/") {
            return (
                <Link
                    to="/"
                    {...commonProps}
                    onClick={(e) => {
                        setMenuOpen(false);
                        if (location.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                    {item.name}
                </Link>
            );
        }

        if (item.to.startsWith("#")) {
            return (
                <a
                    href={item.to}
                    {...commonProps}
                    onClick={(e) => handleAnchorClick(e, item.to)}
                >
                    {item.name}
                </a>
            );
        }

        return (
            <Link
                to={item.to}
                {...commonProps}
                onClick={() => setMenuOpen(false)}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <nav className={bgClass}>
            <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-2">
                <Link to="/" className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                        NewLounge
                    </h1>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        Salon & Academy
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    {NAV_ITEMS.map(renderLink)}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className="flex md:hidden items-center space-x-2">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        className="p-2"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    "md:hidden fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300",
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                {NAV_ITEMS.map(renderLink)}
            </div>
        </nav>
    );
};
