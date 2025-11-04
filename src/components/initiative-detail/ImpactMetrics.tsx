import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

interface MetricRow {
  outcome: string;
  target: string;
  achieved: string;
  percentage: number;
  remarks: string;
}

interface ImpactMetricsProps {
  metrics: MetricRow[];
}

const ImpactMetrics = ({ metrics }: ImpactMetricsProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Outcome</TableHead>
            <TableHead className="font-semibold">Target</TableHead>
            <TableHead className="font-semibold">Achieved</TableHead>
            <TableHead className="font-semibold">Progress</TableHead>
            <TableHead className="font-semibold">Remarks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric, index) => (
            <TableRow key={index} className="hover:bg-muted/50">
              <TableCell className="font-medium">{metric.outcome}</TableCell>
              <TableCell>{metric.target}</TableCell>
              <TableCell className="font-semibold text-accent">{metric.achieved}</TableCell>
              <TableCell className="w-32">
                <div className="space-y-1">
                  <Progress value={metric.percentage} className="h-2" />
                  <span className="text-xs text-muted-foreground">{metric.percentage}%</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{metric.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ImpactMetrics;
