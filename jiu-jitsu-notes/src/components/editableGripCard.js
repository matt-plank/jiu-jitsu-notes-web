import ActionButton from "./actionButton";

const EditableGripCard = ({ gripName, onGripNameChange, onDelete }) => {
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm p-3 flex gap-2">
      <input
        type="text"
        className="p-1 !outline-none flex-1"
        value={gripName}
        onChange={onGripNameChange}
      />

      <ActionButton onClick={onDelete}>Delete</ActionButton>
    </div>
  );
};

export default EditableGripCard;
