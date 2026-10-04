import Image from "next/image";
import type { TeamMember } from "@/content/team";
import { PlaceholderBadge, Tag } from "./Badge";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="border-line flex h-full flex-col overflow-hidden rounded-xl border bg-white">
      <Image
        src={member.photo}
        alt={`Portrait of ${member.name}`}
        width={600}
        height={600}
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-muted text-sm">{member.role}</p>
        {member.placeholder && (
          <p className="mt-2">
            <PlaceholderBadge />
          </p>
        )}
        <p className="text-muted mt-3">{member.bio}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
          {member.skills.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-5 text-sm">
          {member.github && (
            <a
              className="text-accent underline"
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub<span className="sr-only"> profile of {member.name} (opens in a new tab)</span>
            </a>
          )}
          {member.linkedin && (
            <a
              className="text-accent underline"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span className="sr-only"> profile of {member.name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
