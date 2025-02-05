import StaffCard from "./StaffCard.tsx";
import staff from "./staff-info.json";

export default function Staff() {
  return (
    <div className="bg-primary pt-6 pb-12">
      <h3 className="text-3xl text-center text-secondary mb-12">Staff</h3>
      <div className="grid grid-cols-2 gap-x-48 gap-y-16 mx-36">
        {staff.map((member: Staff, index) => (
          <StaffCard staff={member} key={index} />
        ))}
      </div>
    </div>
  );
}
