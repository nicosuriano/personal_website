"use client";

type ExperienceCardProps = {
  title: string;
  items: string[];
};

export default function ExperienceCard({ title, items }: ExperienceCardProps) {
  return (
    <div className="exp-card">
      <h3>{title}</h3>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
