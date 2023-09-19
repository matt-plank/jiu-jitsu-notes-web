import { useEffect, useState } from "react";
import {
  createSubmission,
  deleteSubmission,
  updateSubmission,
} from "../api/api";

const useSubmissions = (submissionApiResults, fromPositionId) => {
  const [submissions, setSubmissions] = useState(submissionApiResults ?? []);

  useEffect(() => {
    setSubmissions(submissionApiResults ?? []);
  }, [submissionApiResults]);

  const setPropertyByIndex = (submissionIndex, propertyName) => {
    return (newPropertyValue) => {
      setSubmissions((currentSubmissions) => {
        const newSubmissions = [...currentSubmissions];
        newSubmissions[submissionIndex][propertyName] = newPropertyValue;
        return newSubmissions;
      });
    };
  };

  const saveByIndex = async (index) => {
    const submission = submissions[index];

    if (!submission.id && submission.name === "") return;

    if (!submission.id) {
      await createSubmission(submission);
      return;
    }

    if (submission.name === "") {
      await deleteSubmission(submission.id);
      return;
    }

    await updateSubmission(submission.id, submission);
  };

  const newEmptySubmission = () => {
    setSubmissions((currentSubmissions) => [
      ...currentSubmissions,
      {
        name: "",
        from_position: { id: fromPositionId },
      },
    ]);
  };

  return {
    submissions: submissions,
    setPropertyByIndex,
    newEmptySubmission,
    saveByIndex,
  };
};

export default useSubmissions;
