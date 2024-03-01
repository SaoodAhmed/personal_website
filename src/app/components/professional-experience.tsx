import { title } from "process";

interface ExperiencesType {
  role: string;
  description: string;
  current: boolean;
}

interface ProfessionalDataType {
  title: string;
  experiences: ExperiencesType[];
}

const ProfessionalExperience: React.FC<{ data: ProfessionalDataType }> = ({
  data,
}) => {
  const { title, experiences } = data;
  return (
    <section>
      <h2 className="mb-6">{title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((item: ExperiencesType, i: number) => (
          <div key={i} className="flex flex-col rounded-lg">
              <span className={`h-2 ${item.current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md">

              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
