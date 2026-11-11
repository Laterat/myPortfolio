import Link from "next/link";
import PortfolioImage from "@/components/PortfolioImage";
import CopyEmail from "@/components/CopyEmail";
import { portfolioContent } from "@/lib/content";

const content = portfolioContent;
const labels = content.copy.labels;
const text = content.copy;
const year = (date?: string) => (date ? new Date(date).getFullYear() : "");
const dateSpan = (start: string, end?: string, current?: boolean) => `${year(start)} – ${current ? labels.present : year(end)}`;

export default function Home() {
  const [first, ...rest] = content.identity.nameLines;
  const groups = [...new Set(content.skills.map((skill) => skill.category))];

  return <main id="main-content">
    <section id="intro" className="sec hero" aria-label={text.sections.intro}>
      <div>
        <h1 className="name">{first}<span>{rest.join(" ")}</span></h1>
        <p className="lede">{content.identity.introduction}</p>
      </div>
      <aside className="glance" aria-label={labels.atAGlance}>
        {content.identity.profileImage ? <PortfolioImage asset={content.identity.profileImage} className="portrait" priority /> : null}
        <dl>
          <div><dt>{labels.basedIn}</dt><dd>{content.identity.location}</dd></div>
          <div><dt>{labels.role}</dt><dd>{content.identity.professionalTitle}</dd></div>
          <div><dt>{labels.status}</dt><dd>{content.identity.availability.open ? <><span className="dot" aria-hidden="true" />{content.identity.availability.label}</> : content.identity.availability.label}</dd></div>
          {content.identity.resumeUrl ? <div><dt>{labels.resume}</dt><dd><a href={content.identity.resumeUrl}>{labels.download}</a></dd></div> : null}
        </dl>
      </aside>
    </section>

    <section id="work" className="sec" aria-labelledby="work-h">
      <h2 id="work-h">{text.sections.work}{content.projects.length ? <small>{content.projects.length}</small> : null}</h2>
      {content.projects.length ? content.projects.map((project) => <details key={project.slug} className="proj reveal">
        <summary>
          <h3>{project.title}</h3>
          <span className="meta">{project.category}{project.projectDate ? ` · ${year(project.projectDate)}` : ""}<span className="toggle" aria-hidden="true">+</span></span>
          <p className="sum">{project.summary}</p>
          {project.technologies?.length ? <p className="tech">{project.technologies.join(", ")}</p> : null}
        </summary>
        <div className="case">
          {project.coverImage ? <PortfolioImage asset={project.coverImage} className="cover" /> : null}
          <div className="rich-text">
            {project.overview?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {project.problem ? <><h4>{labels.problem}</h4><p>{project.problem}</p></> : null}
            {project.solution ? <><h4>{labels.solution}</h4><p>{project.solution}</p></> : null}
            {project.role ? <><h4>{labels.myRole}</h4><p>{project.role}</p></> : null}
            {project.responsibilities?.length ? <ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </div>
          {project.screenshots?.map((image) => <figure key={`${image.src}-${image.caption || ""}`}><PortfolioImage asset={image} className="cover" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}
          <p className="case-links">
            {project.liveURL ? <a href={project.liveURL} target="_blank" rel="noreferrer">{labels.liveProject}<span className="sr-only">{labels.opensInNewTab}</span> ↗</a> : null}
            {project.githubURL ? <a href={project.githubURL} target="_blank" rel="noreferrer">{labels.repository}<span className="sr-only">{labels.opensInNewTab}</span> ↗</a> : null}
            <Link href={`/projects/${project.slug}`}>{labels.standalonePage}</Link>
          </p>
        </div>
      </details>) : <p className="empty">{text.empty.projects}</p>}
    </section>

    <section id="path" className="sec tint" aria-labelledby="path-h">
      <h2 id="path-h">{text.sections.experienceAndEducation}</h2>
      <div className="duo">
        {[
          { title: labels.experience, emptyKey: "experience", rows: content.experience.map((item, index) => ({ key: `${item.position}-${index}`, heading: item.position, subheading: [item.organization, item.location].filter(Boolean).join(" · "), when: dateSpan(item.startDate, item.endDate, item.current), details: [...(item.responsibilities || []), ...(item.achievements || [])] })) },
          { title: labels.education, emptyKey: "education", rows: content.education.map((item, index) => ({ key: `${item.institution}-${index}`, heading: [item.qualification, item.fieldOfStudy].filter(Boolean).join(" · "), subheading: [item.institution, item.location].filter(Boolean).join(" · "), when: dateSpan(item.startDate, item.endDate, item.current), details: [...(item.description ? [item.description] : []), ...(item.achievements || [])] })) },
        ].map((group) => <div key={group.title}>
          <h3>{group.title}</h3>
          {group.rows.length ? <ol className="spine">{group.rows.map((row) => <li key={row.key} className="reveal"><time>{row.when}</time><strong>{row.heading}</strong><span>{row.subheading}</span>{row.details.length ? <ul>{row.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}</li>)}</ol> : <p className="empty">{text.empty[group.emptyKey]}</p>}
        </div>)}
      </div>
    </section>

    <section id="credentials" className="sec" aria-labelledby="cred-h">
      <h2 id="cred-h">{text.sections.credentials}{content.certificates.length ? <small>{content.certificates.length}</small> : null}</h2>
      {content.certificates.length ? <ul className="creds">{content.certificates.map((certificate) => <li key={`${certificate.title}-${certificate.issuer}`} className="reveal"><strong>{certificate.title}</strong><span>{certificate.issuer} · {year(certificate.issueDate)}{certificate.credentialID ? ` · ID ${certificate.credentialID}` : ""}</span>{certificate.verificationURL ? <a href={certificate.verificationURL} target="_blank" rel="noreferrer">{labels.verify}<span className="sr-only"> {certificate.title}{labels.opensInNewTab}</span> ↗</a> : certificate.credentialFile ? <a href={certificate.credentialFile}>{labels.viewFile}<span className="sr-only"> {certificate.title}</span></a> : null}</li>)}</ul> : <p className="empty">{text.empty.credentials}</p>}
    </section>

    <section id="toolkit" className="sec tint" aria-labelledby="tool-h">
      <h2 id="tool-h">{text.sections.toolkit}</h2>
      {groups.length ? <div className="kit">{groups.map((group) => <div key={group} className="reveal"><h3>{group}</h3><ul>{content.skills.filter((skill) => skill.category === group).map((skill) => <li key={skill.name}>{skill.name}</li>)}</ul></div>)}</div> : <p className="empty">{text.empty.skills}</p>}
    </section>

    <section id="contact" className="sec dark" aria-labelledby="contact-h">
      <h2 id="contact-h">{text.sections.contact}</h2>
      <p className="lede">{text.contactIntro}</p>
      {content.identity.contactEmail ? <CopyEmail email={content.identity.contactEmail} /> : <p className="empty">{text.empty.email}</p>}
      <ul className="socials">{content.socialLinks.map((link) => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}<span className="sr-only">{labels.opensInNewTab}</span> ↗</a></li>)}</ul>
      <p className="fine">{text.copyright} {new Date().getFullYear()} {content.identity.fullName}</p>
    </section>
  </main>;
}
