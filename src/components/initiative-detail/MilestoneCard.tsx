import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

interface MilestoneCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

const MilestoneCard = ({ icon: Icon, value, label, suffix = "" }: MilestoneCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 text-center border hover:shadow-lg transition-all hover:scale-105">
      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
        <Icon className="text-accent" size={24} />
      </div>
      <p className="text-3xl font-bold text-primary mb-1">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default MilestoneCard;
