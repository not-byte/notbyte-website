import { Feedback } from "@/lib/model/project";
import React from "react";

type Props = {
  feedback: Feedback[];
};
export const FeedbackSec = ({ feedback }: Props) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Feedback</h2>
      <div className="space-y-4">
        {feedback.map((feedback, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <strong>From:</strong> {feedback.from}
            <p className="text-gray-700 dark:text-gray-300">{feedback.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
