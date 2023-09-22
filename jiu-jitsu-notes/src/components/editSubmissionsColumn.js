import ActionButton from "./actionButton";

const EditSubmissionsColumn = ({ submissions }) => {
  return (
    <div className="w-1/3">
      <div className="p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
        <h2 className="text-xl">Submissions</h2>

        {submissions.submissions.map((submission, i) => (
          <input
            type="text"
            placeholder="Enter Submission Name"
            className="p-2 border-2 border-gray-400 rounded-sm bg-white flex-1 w-full !outline-none"
            value={submission.name}
            onChange={(e) => {
              submissions.setPropertyByIndex(i, "name")(e.target.value);
            }}
          />
        ))}

        <ActionButton onClick={submissions.newEmptySubmission}>
          New Technique
        </ActionButton>
      </div>
    </div>
  );
};

export default EditSubmissionsColumn;
