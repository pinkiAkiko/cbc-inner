import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface InitiativeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const InitiativeCard = ({ id, title, description, image, category }: InitiativeCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-gov-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={`/initiatives/${id}`}>
          <Button variant="ghost" className="group/btn p-0 h-auto">
            <span className="mr-2">Learn More</span>
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
