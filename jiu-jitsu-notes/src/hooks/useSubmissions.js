import { useEffect, useState } from "react";
import submissionsApi from "../api/submissions";

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
      await submissionsApi.create(submission);
      return;
    }

    if (submission.name === "") {
      await submissionsApi.delete(submission.id);
      return;
    }

    await submissionsApi.update(submission.id, submission);
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
