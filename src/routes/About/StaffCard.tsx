interface Props {
  staff: Staff;
}

export default function StaffCard({ staff }: Props) {
  return (
    <div className="outer mx-auto border border-solid border-transparent rounded-2xl max-h-60 p-2.5">
      <div className="inner rounded-lg py-6 px-4 text-secondary flex flex-col">
        <div className="flex items-center">
          <img
            className="size-20 rounded-full mr-3"
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
