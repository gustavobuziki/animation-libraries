interface DescriptionProps {
  title: string;
  description: string;
}

export const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="description">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
};
