import ActionButton from "./actionButton";

const EditSubmissionsColumn = ({ submissions }) => {
  return (
    <div className="p-5 bg-white shadow-sm rounded-lg flex flex-col gap-5">
      <h2 className="text-xl">Submissions</h2>

      {submissions.submissions.map((submission, i) => (
        <input
          type="text"
          placeholder="Enter Submission Name"
          className="p-2 border border-gray-200 rounded-md shadow-sm bg-white flex-1 w-full !outline-none"
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
  );
};

export default EditSubmissionsColumn;
