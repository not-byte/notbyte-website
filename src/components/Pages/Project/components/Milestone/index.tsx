import { Milestone } from "@/lib/model/project";

interface MilestoneItemProps {
  milestone: Milestone;
}

export const MilestoneItem: React.FC<MilestoneItemProps> = ({ milestone }) => (
  <div className="p-4 border border-gray-200 rounded-lg mb-4 dark:border-gray-700">
    <h4 className="font-bold">{milestone.name}</h4>
    <p>Date: {milestone.date}</p>
  </div>
);
