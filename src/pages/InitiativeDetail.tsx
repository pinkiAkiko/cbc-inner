import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Calendar, Users, Target, Video, FileText, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import TimelinePhase from "@/components/initiative-detail/TimelinePhase";
import MilestoneCard from "@/components/initiative-detail/MilestoneCard";
import MediaGallery from "@/components/initiative-detail/MediaGallery";
import ImpactMetrics from "@/components/initiative-detail/ImpactMetrics";
import ulbInitiative from "@/assets/ulb-initiative.jpg";
import digitalGovernance from "@/assets/digital-governance.jpg";
import trainingSession from "@/assets/training-session.jpg";

const InitiativeDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from an API
  const initiativeData: Record<string, any> = {
    "ulb-capacity-building": {
      title: "Rashtriya Karmayogi Large Scale Jan Seva Program",
      subtitle: "Empowering through Strategic Learning & Development",
      category: "Mission Karmayogi",
      image: ulbInitiative,
      vision:
        "To create a robust ecosystem of empowered and capable Urban Local Bodies that can effectively address the multifaceted challenges of rapid urbanization in India. Our vision is to transform municipal governance by building world-class administrative, technical, and leadership capabilities that enable ULBs to deliver efficient, transparent, and citizen-centric services. We envision cities where local governance is characterized by innovation, sustainability, and inclusiveness—where every municipal official is equipped with the knowledge, skills, and tools to contribute meaningfully to urban development. Through systematic capacity building, we aim to foster a culture of continuous learning and excellence that positions Indian cities as models of effective local governance, ultimately improving the quality of life for millions of urban residents and creating sustainable, resilient, and thriving urban communities.",
      shortTermObjectives:
        "In the immediate term (1-3 years), our focus is on establishing foundational capacity across ULBs through comprehensive training programs targeting municipal commissioners, engineers, financial officers, and frontline staff. We aim to deliver 100+ specialized training modules covering urban planning, financial management, e-governance, and citizen engagement to at least 25,000 officials across 300+ cities. Key short-term goals include: establishing 15 regional training centers equipped with modern facilities and e-learning infrastructure; developing standardized competency frameworks for different municipal roles; creating mentorship programs pairing experienced officials with emerging leaders; implementing rapid-response technical assistance mechanisms for ULBs facing immediate governance challenges; and launching digital knowledge platforms for continuous learning and peer-to-peer collaboration among municipal officials.",
      longTermObjectives:
        "Over the long term (5-10 years), we aspire to fundamentally transform the institutional culture and capabilities of Urban Local Bodies nationwide. Our strategic objectives include: creating self-sustaining Centers of Excellence in each state that continuously innovate in urban governance training; establishing comprehensive career development pathways for municipal officials with clear progression frameworks tied to demonstrated competencies; building advanced capabilities in emerging areas such as smart city technologies, climate resilience, circular economy principles, and data-driven decision making; fostering international knowledge exchange programs that expose Indian ULB officials to global best practices; developing accreditation systems for municipal officials that recognize specialized expertise and encourage professional development; institutionalizing performance management systems in ULBs that reward innovation and citizen satisfaction; and ultimately creating a cadre of urban governance professionals who are recognized nationally and internationally for their excellence in municipal administration.",
      conceptGist:
        "The Capacity Building of Urban Local Bodies initiative represents a paradigm shift in how India approaches municipal governance strengthening. At its core, the concept recognizes that effective urban development depends not just on infrastructure and funding, but critically on the capabilities of the people managing our cities. The initiative employs a holistic, multi-layered approach combining classroom training, on-the-job learning, peer exchanges, digital platforms, and mentorship to build comprehensive competencies across administrative, technical, financial, and leadership domains.",
      timeline: [
        {
          phase: "1",
          title: "Pilot Implementation",
          date: "April 2020 - March 2021",
          description:
            "Launched pilot programs in 50 cities across 10 states. Developed initial training modules, established 3 regional centers, and trained 3,000 officials in foundational competencies.",
        },
        {
          phase: "2",
          title: "Nationwide Rollout",
          date: "April 2021 - March 2023",
          description:
            "Expanded to 250+ cities nationwide. Established 10 additional training centers, developed specialized modules for different municipal roles, and integrated digital learning platforms.",
        },
        {
          phase: "3",
          title: "Consolidation & Advanced Training",
          date: "April 2023 - Present",
          description:
            "Focus on advanced capabilities including smart city technologies, climate resilience, and data analytics. Launched mentorship programs and international exchange initiatives.",
        },
      ],
      milestones: [
        { icon: Users, value: 15000, label: "Officials Trained", suffix: "+" },
        { icon: MapPin, value: 250, label: "Cities Covered", suffix: "+" },
        { icon: FileText, value: 50, label: "Training Modules", suffix: "+" },
        { icon: Target, value: 10, label: "Training Centers" },
      ],
      impactMetrics: [
        {
          outcome: "Municipal officials trained",
          target: "20,000",
          achieved: "15,248",
          percentage: 76,
          remarks: "On track to exceed target by Q4 2025",
        },
        {
          outcome: "Cities covered",
          target: "300",
          achieved: "252",
          percentage: 84,
          remarks: "Expanded to tier-3 cities in Phase 3",
        },
        {
          outcome: "Training modules developed",
          target: "60",
          achieved: "52",
          percentage: 87,
          remarks: "8 advanced modules in development",
        },
        {
          outcome: "Satisfaction rate",
          target: "85%",
          achieved: "91%",
          percentage: 91,
          remarks: "Consistently exceeds expectations",
        },
      ],
      mediaGallery: [
        { type: "image", url: ulbInitiative, caption: "Training session in progress at Regional Center, Mumbai", date: "March 2024" },
        { type: "image", url: trainingSession, caption: "Municipal commissioners workshop on financial management", date: "February 2024" },
        { type: "image", url: digitalGovernance, caption: "Digital governance training module demonstration", date: "January 2024" },
        { type: "image", url: ulbInitiative, caption: "Field visit to smart city implementation site", date: "December 2023" },
        { type: "image", url: trainingSession, caption: "Graduation ceremony for advanced leadership program", date: "November 2023" },
        { type: "image", url: digitalGovernance, caption: "Peer learning session between municipal officials", date: "October 2023" },
        { type: "image", url: ulbInitiative, caption: "International knowledge exchange program", date: "September 2023" },
        { type: "image", url: trainingSession, caption: "Hands-on training on e-governance platforms", date: "August 2023" },
        { type: "image", url: digitalGovernance, caption: "Climate resilience workshop for urban planners", date: "July 2023" },
        { type: "image", url: ulbInitiative, caption: "Certificate distribution at regional training center", date: "June 2023" },
        { type: "video", url: "dQw4w9WgXcQ", caption: "Introduction to ULB Capacity Building Initiative", date: "March 2024" },
        { type: "video", url: "dQw4w9WgXcQ", caption: "Success Stories: Transformed Municipal Governance", date: "February 2024" },
        { type: "video", url: "dQw4w9WgXcQ", caption: "Testimonials from Municipal Commissioners", date: "January 2024" },
        { type: "video", url: "dQw4w9WgXcQ", caption: "Smart City Technologies Training Module", date: "December 2023" },
        { type: "video", url: "dQw4w9WgXcQ", caption: "Financial Management Best Practices", date: "November 2023" },
      ],
      wayForward:
        "Building on our success, we are embarking on an ambitious expansion phase that will deepen impact and broaden reach. Our next steps include: launching advanced certification programs in specialized areas like climate resilience and smart city management; establishing Centers of Excellence in partnership with premier institutions; scaling our digital learning platforms with AI-powered personalized learning paths; creating a national knowledge repository of urban governance best practices; expanding international partnerships for knowledge exchange; and developing comprehensive career progression frameworks for municipal officials. We invite state governments, academic institutions, and development partners to collaborate with us in this transformative journey towards excellence in urban governance.",
      resources: [
        { title: "Training Module - Urban Planning", type: "PDF", size: "2.5 MB" },
        { title: "Best Practices Compendium", type: "PDF", size: "5.8 MB" },
        { title: "Financial Management Guidelines", type: "PDF", size: "3.2 MB" },
        { title: "Complete Concept Note", type: "PDF", size: "8.4 MB" },
      ],
    },
    "digital-transformation": {
      title: "Digital Transformation Initiative",
      category: "Technology",
      image: digitalGovernance,
      overview:
        "Driving digital transformation across government departments through comprehensive capacity building in emerging technologies, data analytics, and digital governance frameworks.",
      objectives: [
        "Enhance digital literacy across all levels of government",
        "Promote adoption of emerging technologies in public service delivery",
        "Build capacity for data-driven decision making",
        "Strengthen cybersecurity awareness and practices",
      ],
      achievements: [
        "20,000+ government officials trained in digital technologies",
        "Implementation of digital governance frameworks in 200+ departments",
        "Development of 75+ digital training modules",
        "Establishment of Center of Excellence for Digital Governance",
      ],
      resources: [
        { title: "Digital Governance Framework", type: "PDF", size: "4.2 MB" },
        { title: "Cybersecurity Guidelines", type: "PDF", size: "2.8 MB" },
        { title: "AI in Governance - Case Studies", type: "PDF", size: "6.5 MB" },
      ],
    },
    "leadership-development": {
      title: "Leadership Development Program",
      category: "Training",
      image: trainingSession,
      overview:
        "A flagship program designed to develop strong, visionary leaders in the civil services through advanced training in leadership, strategic thinking, and change management.",
      objectives: [
        "Develop transformational leadership capabilities",
        "Enhance strategic thinking and decision-making skills",
        "Foster innovation and change management competencies",
        "Build collaborative leadership across government departments",
      ],
      achievements: [
        "5,000+ senior officials trained in advanced leadership",
        "Development of 30+ specialized leadership modules",
        "Establishment of partnerships with 15+ premier institutions",
        "Creation of leadership development framework for civil services",
      ],
      resources: [
        { title: "Leadership Competency Framework", type: "PDF", size: "3.8 MB" },
        { title: "Change Management Toolkit", type: "PDF", size: "4.5 MB" },
        { title: "Strategic Leadership Case Studies", type: "PDF", size: "7.2 MB" },
      ],
    },
  };

  const initiative = initiativeData[id || ""] || initiativeData["ulb-capacity-building"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Initiatives", path: "/initiatives" },
          { label: initiative.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${initiative.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-primary-foreground">
              <div className="mb-4">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {initiative.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{initiative.title}</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-6 font-light">
                {initiative.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                  <Video className="mr-2" size={20} />
                  Watch Video
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
                >
                  <Download className="mr-2" size={20} />
                  Download Concept Note
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Initiative Summary */}
        <section className="py-16 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-accent" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-2">Vision</CardTitle>
                    <CardDescription className="text-base">
                      Transforming municipal governance through comprehensive capacity building
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {initiative.vision}
                </p>
              </CardContent>
            </Card>

            {/* Objectives Tabs */}
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl">Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="short-term" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="short-term" className="text-base">
                      Short-Term Objectives
                    </TabsTrigger>
                    <TabsTrigger value="long-term" className="text-base">
                      Long-Term Objectives
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="short-term" className="space-y-4">
                    <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                      <h4 className="font-semibold text-lg mb-3 text-accent flex items-center gap-2">
                        <Calendar size={20} />
                        1-3 Year Goals
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {initiative.shortTermObjectives}
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="long-term" className="space-y-4">
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                      <h4 className="font-semibold text-lg mb-3 text-primary flex items-center gap-2">
                        <TrendingUp size={20} />
                        5-10 Year Vision
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {initiative.longTermObjectives}
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Concept Note */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <FileText className="text-accent" size={32} />
                  Concept Note
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent">
                  <p className="text-muted-foreground leading-relaxed text-justify italic">
                    "{initiative.conceptGist}"
                  </p>
                </div>
                <Button className="w-full md:w-auto" size="lg">
                  <Download className="mr-2" size={20} />
                  Download Full Concept Note (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Chronology of Events</h2>
              <p className="text-muted-foreground text-lg">Journey from pilot to nationwide impact</p>
            </div>
            <div className="max-w-4xl mx-auto">
              {initiative.timeline?.map((phase: any, index: number) => (
                <TimelinePhase
                  key={index}
                  phase={phase.phase}
                  title={phase.title}
                  date={phase.date}
                  description={phase.description}
                  isLast={index === initiative.timeline.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Key Milestones</h2>
              <p className="text-muted-foreground text-lg">Measuring our impact and reach</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {initiative.milestones?.map((milestone: any, index: number) => (
                <MilestoneCard
                  key={index}
                  icon={milestone.icon}
                  value={milestone.value}
                  label={milestone.label}
                  suffix={milestone.suffix}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Impact Metrics Dashboard</h2>
              <p className="text-muted-foreground text-lg">
                Tracking progress against strategic targets
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <ImpactMetrics metrics={initiative.impactMetrics || []} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Media Gallery</h2>
              <p className="text-muted-foreground text-lg">
                Visual stories from the field and training centers
              </p>
            </div>
            <MediaGallery items={initiative.mediaGallery || []} />
          </div>
        </section>

        {/* Way Forward */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Way Forward</h2>
                <p className="text-primary-foreground/90 leading-relaxed mb-6 text-justify">
                  {initiative.wayForward}
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                >
                  Partner with CBC for Expansion
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-primary-foreground/20 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                    <h3 className="text-2xl font-semibold mb-4">Next Steps</h3>
                    {[
                      "Launch advanced certification programs",
                      "Establish Centers of Excellence",
                      "Scale digital learning platforms",
                      "Expand international partnerships",
                      "Develop career progression frameworks",
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
                          {index + 1}
                        </div>
                        <p className="pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Sidebar */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Resources & Downloads</CardTitle>
                  <CardDescription>Access program materials, guidelines, and documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {initiative.resources?.map((resource: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-all cursor-pointer hover:shadow-md border"
                    >
                      <div className="flex-1">
                        <p className="font-semibold">{resource.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                      <Download size={20} className="text-accent" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-primary-foreground shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3">Get Involved</h3>
                  <p className="text-sm mb-6 text-primary-foreground/90 leading-relaxed">
                    Interested in participating in this initiative? Contact our team for more
                    information and partnership opportunities.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InitiativeDetail;
