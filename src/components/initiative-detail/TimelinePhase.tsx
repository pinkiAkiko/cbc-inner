import { useState } from "react";
import { Calendar } from "lucide-react";

interface TimelinePhaseProps {
  phase: string;
  title: string;
  date: string;
  description: string;
  isLast?: boolean;
}

const TimelinePhase = ({ phase, title, date, description, isLast }: TimelinePhaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-start gap-4 group">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-border -z-10"></div>
      )}

      {/* Phase Marker */}
      <div
        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {phase}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 className="font-semibold text-lg mb-1">{title}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          {isOpen && <p className="text-muted-foreground text-sm mt-2">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TimelinePhase;
