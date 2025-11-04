import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import InitiativeCard from "@/components/InitiativeCard";
import { Button } from "@/components/ui/button";
import trainingSession from "@/assets/training-session.jpg";
import digitalGovernance from "@/assets/digital-governance.jpg";
import ulbInitiative from "@/assets/ulb-initiative.jpg";

const Initiatives = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const initiatives = [
    {
      id: "ulb-capacity-building",
      title: "Capacity Building of ULBs",
      description:
        "Strengthening urban local bodies through comprehensive training programs and institutional development.",
      image: ulbInitiative,
      category: "Urban Governance",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description:
        "Leveraging technology to modernize public administration and enhance service delivery.",
      image: digitalGovernance,
      category: "Technology",
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description:
        "Building strong leadership capabilities in civil services through targeted interventions.",
      image: trainingSession,
      category: "Training",
    },
    {
      id: "panchayati-raj",
      title: "Panchayati Raj Institutions",
      description:
        "Empowering rural governance through capacity enhancement of PRIs and functionaries.",
      image: ulbInitiative,
      category: "Rural Governance",
    },
    {
      id: "mission-karmayogi",
      title: "Mission Karmayogi",
      description:
        "Comprehensive civil service capacity building program for the 21st century.",
      image: trainingSession,
      category: "Training",
    },
    {
      id: "e-governance",
      title: "E-Governance Excellence",
      description:
        "Promoting digital literacy and e-governance capabilities across government departments.",
      image: digitalGovernance,
      category: "Technology",
    },
  ];

  const categories = ["all", "Urban Governance", "Technology", "Training", "Rural Governance"];

  const filteredInitiatives =
    activeFilter === "all"
      ? initiatives
      : initiatives.filter((initiative) => initiative.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Initiatives" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Our Initiatives</h1>
              <p className="text-xl text-primary-foreground/90">
                Discover our comprehensive programs designed to build capacity across various
                sectors of public administration and governance.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Initiatives" : category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInitiatives.map((initiative) => (
                <InitiativeCard key={initiative.id} {...initiative} />
              ))}
            </div>
            {filteredInitiatives.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No initiatives found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Initiatives;
