import { Scissors, Sparkles, Users } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative" >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Elevating Beauty, One Client at a Time
                        </h3>

                        <p className="text-muted-foreground">
                            Welcome to our salon, where beauty meets expertise. With a team of
                            professional stylists and beauticians, we offer personalized hair,
                            skin, and beauty services in a warm, relaxing environment.
                        </p>

                        <p className="text-muted-foreground">
                            Whether you're preparing for a big day or just need a little
                            self-care, our mission is to make you look and feel your absolute
                            best—every visit, every time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                                href="#contact"
                                className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition duration-300"
                            >
                                Book an Appointment
                            </a>


                            <a
                                href="#services"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Scissors className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Hair Styling</h4>
                                    <p className="text-muted-foreground">
                                        Trendy cuts, coloring, and treatments tailored to your
                                        personality and lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Skilled Professionals</h4>
                                    <p className="text-muted-foreground">
                                        With over 5 years of trusted service, our salon has built a reputation for delivering exceptional hair and beauty experiences. Our team of expert stylists and professionals each bring over 10 years of industry experience, ensuring every client receives personalized care, attention to detail, and outstanding results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Client Care</h4>
                                    <p className="text-muted-foreground">
                                        A welcoming atmosphere and personalized attention for every
                                        guest, every time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
