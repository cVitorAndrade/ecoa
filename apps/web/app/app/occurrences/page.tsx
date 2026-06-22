import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import CivicReportList from "./_components/civic-reports-list";
import OperationalSidebar from "./_components/operational-sidebar";
import MetricsSidebar from "./_components/metric-sidebar";
import OccurrencesDashboard from "./_components/occurrences-dashboard";

export default function OccurrencesPage() {
  return (
    <div>
      {/* Header aqui */}
      <div className="grid grid-cols-4 gap-4 p-4 items-start">
        <div className="col-span-1 sticky top-4 flex flex-col gap-4">
          <OperationalSidebar />
        </div>

        <div className="col-span-2">
          <OccurrencesDashboard />
        </div>

        <div className="col-span-1 sticky top-4">
          <MetricsSidebar />
        </div>
      </div>
    </div>
  );
}
