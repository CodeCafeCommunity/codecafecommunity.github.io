interface Props {
  staff: Staff;
}

export default function StaffCard({ staff }: Props) {
  return (
    <div className="outer mx-auto max-h-60 rounded-2xl border border-solid border-transparent p-2.5">
      <div className="inner flex flex-col rounded-lg px-4 py-6 text-secondary">
        <div className="flex items-center">
          <img
            className="mr-3 size-20 rounded-full"
            src={`/images/${staff.name.toLowerCase()}.png`}
            alt={staff.name}
          />
          <div className="flex flex-col">
            <h4 className="text-4xl">{staff.name}</h4>
            <p>{`${staff.preferredLanguage} - ${staff.yearsExp.toString()} years`}</p>
          </div>
        </div>
        <p className="mt-4">{staff.bio}</p>
      </div>
    </div>
  );
}
