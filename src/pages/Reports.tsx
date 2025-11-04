import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  const reports = [
    {
      id: 1,
      title: "Annual Report 2023-24",
      year: "2024",
      category: "Annual Report",
      date: "March 2024",
      size: "8.5 MB",
    },
    {
      id: 2,
      title: "Capacity Building Framework for Urban Local Bodies",
      year: "2024",
      category: "Research Paper",
      date: "February 2024",
      size: "3.2 MB",
    },
    {
      id: 3,
      title: "Digital Transformation in Government - Progress Report",
      year: "2024",
      category: "Progress Report",
      date: "January 2024",
      size: "5.7 MB",
    },
    {
      id: 4,
      title: "Training Impact Assessment Study",
      year: "2023",
      category: "Research Paper",
      date: "December 2023",
      size: "4.1 MB",
    },
    {
      id: 5,
      title: "Annual Report 2022-23",
      year: "2023",
      category: "Annual Report",
      date: "March 2023",
      size: "7.8 MB",
    },
    {
      id: 6,
      title: "Best Practices in Civil Service Training",
      year: "2023",
      category: "Best Practices",
      date: "November 2023",
      size: "6.3 MB",
    },
    {
      id: 7,
      title: "Quarterly Progress Report Q2 2023",
      year: "2023",
      category: "Progress Report",
      date: "September 2023",
      size: "2.9 MB",
    },
    {
      id: 8,
      title: "Leadership Development Framework 2023",
      year: "2023",
      category: "Policy Document",
      date: "July 2023",
      size: "4.5 MB",
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = yearFilter === "all" || report.year === yearFilter;
    return matchesSearch && matchesYear;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Annual Report": "default",
      "Research Paper": "secondary",
      "Progress Report": "outline",
      "Best Practices": "default",
      "Policy Document": "secondary",
    };
    return colors[category] || "default";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Reports & Resources" }]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Reports & Resources</h1>
              <p className="text-xl text-primary-foreground/90">
                Access our comprehensive collection of reports, research papers, and policy
                documents on capacity building and governance reforms.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <Input
                  type="text"
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <div className="flex gap-3">
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-[180px] bg-background">
                    <SelectValue placeholder="Filter by year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-lg shadow-gov-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50%]">Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{report.title}</TableCell>
                      <TableCell>
                        <Badge variant={getCategoryColor(report.category) as any}>
                          {report.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{report.date}</TableCell>
                      <TableCell className="text-muted-foreground">{report.size}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download size={16} />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredReports.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">No reports found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Resources Categories */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Annual Reports", "Research Papers", "Policy Documents", "Best Practices"].map(
                (category) => (
                  <button
                    key={category}
                    className="p-6 bg-card rounded-lg shadow-gov-sm hover:shadow-gov-md transition-shadow text-center"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{category}</h3>
                    <p className="text-sm text-muted-foreground">
                      View all {category.toLowerCase()}
                    </p>
                  </button>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
