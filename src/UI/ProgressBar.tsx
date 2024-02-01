import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import withPortal from "@/lib/HOCS/portal";

type Props = {
  progress: number;
};

const ProgressBarUtil = ({ progress }: Props) => {
  return (
    <div className="absolute top-40 w-full flex justify-center items-center">
      <ProgressBar className="w-[50%]" completed={progress.toFixed(2)} />
    </div>
  );
};

export default withPortal(ProgressBarUtil, {
  portalId: "#progress_bar",
});
