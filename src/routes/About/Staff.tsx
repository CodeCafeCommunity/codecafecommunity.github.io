import StaffCard from "./StaffCard.tsx";
import staff from "./staff-info.json";

interface Staff {
  name: string;
  preferredLanguage: string;
  bio: string;
  yearsExp: number;
}

export default function Staff() {
  return (
    <div className="bg-primary pb-12 pt-6">
      <h3 className="mb-12 text-center text-3xl text-secondary">Staff</h3>
      <div className="mx-36 grid grid-cols-2 gap-x-48 gap-y-16">
        {staff.map((member: Staff, index) => (
          <StaffCard staff={member} key={index} />
        ))}
      </div>
    </div>
  );
}
