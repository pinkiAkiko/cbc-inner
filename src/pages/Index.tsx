import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitiativeCard from "@/components/InitiativeCard";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, BookOpen, TrendingUp } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import trainingSession from "@/assets/training-session.jpg";
import digitalGovernance from "@/assets/digital-governance.jpg";
import ulbInitiative from "@/assets/ulb-initiative.jpg";

const Index = () => {
  const initiatives = [
    {
      id: "ulb-capacity-building",
      title: "Capacity Building of ULBs",
      description: "Strengthening urban local bodies through comprehensive training programs and institutional development.",
      image: ulbInitiative,
      category: "Mission Karmayogi",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Leveraging technology to modernize public administration and enhance service delivery.",
      image: digitalGovernance,
      category: "Technology",
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Building strong leadership capabilities in civil services through targeted interventions.",
      image: trainingSession,
      category: "Training",
    },
  ];

  const stats = [
    { icon: Users, label: "Officers Trained", value: "50,000+" },
    { icon: Target, label: "Programs Launched", value: "120+" },
    { icon: BookOpen, label: "Training Modules", value: "300+" },
    { icon: TrendingUp, label: "Partner Institutions", value: "85+" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBuilding})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Excellence in
              <br />
              Public Administration
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
              Capacity Building Commission is committed to promoting excellence in governance
              through innovative training programs and institutional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/initiatives">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Explore Initiatives
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/reports">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Reports
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-none shadow-gov-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">About the Commission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  The Capacity Building Commission was established to harmonise capacity building
                  initiatives in India, review and reform the capacity building framework in the
                  country, and own an integrated portal for capacity building.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We work closely with ministries, departments, and training institutions to ensure
                  that government personnel are equipped with the necessary skills and competencies
                  to deliver effective governance.
                </p>
                <Link to="/about">
                  <Button variant="default" size="lg">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={trainingSession}
                  alt="Training Session"
                  className="rounded-lg shadow-gov-lg"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Important Initiatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our flagship programs designed to enhance capacity building across various
                sectors of governance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative) => (
                <InitiativeCard key={initiative.id} {...initiative} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/initiatives">
                <Button variant="default" size="lg">
                  View All Initiatives
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Subscribe to our newsletter for the latest updates on capacity building programs,
                training opportunities, and policy initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-md text-foreground"
                />
                <Button
                  size="lg"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
