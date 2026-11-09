import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import PayloadImage from "@/components/PayloadImage";
import CopyEmail from "@/components/CopyEmail";
import { siteConfig } from "@/lib/site";
import { getCertificates, getEducation, getExperience, getProjects, getSiteSettings, getSkills, type MediaAsset } from "@/lib/payload/content";

const yr = (d?: string) => (d ? new Date(d).getFullYear() : "");
const span = (s: string, e?: string, cur?: boolean) => `${yr(s)} – ${cur ? "Present" : e ? yr(e) : ""}`;
const media = (v: unknown) => (v && typeof v !== "number" ? (v as MediaAsset) : null);
const lines = (...lists: Array<Array<{ item?: string }> | undefined>) => lists.flatMap((l) => l ?? []).flatMap(({ item }) => (item ? [item] : []));

export default async function Home() {
  const [settings, projects, experience, education, certificates, skills] = await Promise.all([getSiteSettings(), getProjects(), getExperience(), getEducation(), getCertificates(), getSkills()]);
  const id = settings?.identity;
  const [first, ...rest] = (id?.fullName || siteConfig.name).split(" ");
  const portrait = media(id?.profileImage);
  const resume = media(id?.resume);
  const groups = [...new Set(skills.map((s) => s.category))];
  const links = settings?.socialLinks?.length ? settings.socialLinks : siteConfig.socials.map((url) => ({ platform: new URL(url).hostname.replace("www.", ""), url }));

  return <main id="main-content">
    <section id="intro" className="sec hero" aria-label="Introduction">
      <div>
        <h1 className="name">{first}<span>{rest.join(" ")}</span></h1>
        <p className="lede">{id?.introduction || "I build web products with clear interfaces and reliable engineering."}</p>
      </div>
      <aside className="glance" aria-label="At a glance">
        {portrait?.url ? <PayloadImage asset={portrait} className="portrait" priority /> : null}
        <dl>
          <div><dt>Based in</dt><dd>{id?.location || "Addis Ababa"}</dd></div>
          <div><dt>Role</dt><dd>{id?.professionalTitle || "Software Developer"}</dd></div>
          <div><dt>Status</dt><dd>{id?.availability === "open" ? <><span className="dot" aria-hidden="true" />Open to opportunities</> : "Reachable by email"}</dd></div>
          {resume?.url ? <div><dt>Résumé</dt><dd><a href={resume.url}>Download</a></dd></div> : null}
        </dl>
      </aside>
    </section>

    <section id="work" className="sec" aria-labelledby="work-h">
      <h2 id="work-h">Work{projects.length ? <small>{projects.length}</small> : null}</h2>
      {projects.length ? projects.map((p) => {
        const cover = media(p.coverImage);
        const shots = (p.screenshots || []).flatMap((s) => { const m = media(s.image); return m?.url ? [{ m, caption: s.caption }] : []; }).slice(0, 3);
        const tech = (p.technologies || []).flatMap((t) => (t.name ? [t.name] : []));
        return <details key={p.id} className="proj reveal">
          <summary>
            <h3>{p.title}</h3>
            <span className="meta">{p.category}{p.projectDate ? ` · ${yr(p.projectDate)}` : ""}<span className="toggle" aria-hidden="true">+</span></span>
            <p className="sum">{p.summary}</p>
            {tech.length ? <p className="tech">{tech.join(", ")}</p> : null}
          </summary>
          <div className="case">
            {cover?.url ? <PayloadImage asset={cover} alt={cover.alt || ""} className="cover" /> : null}
            <div className="rich-text">
              {p.overview ? <RichText data={p.overview as never} /> : null}
              {p.problem ? <><h4>Problem</h4><p>{p.problem}</p></> : null}
              {p.solution ? <><h4>Solution</h4><p>{p.solution}</p></> : null}
              {p.role ? <><h4>My role</h4><p>{p.role}</p></> : null}
              {lines(p.responsibilities).length ? <ul>{lines(p.responsibilities).map((t, i) => <li key={i}>{t}</li>)}</ul> : null}
            </div>
            {shots.map(({ m, caption }, i) => <figure key={i}><PayloadImage asset={m} alt={m.alt || caption || ""} className="cover" />{caption ? <figcaption>{caption}</figcaption> : null}</figure>)}
            <p className="case-links">
              {p.liveURL ? <a href={p.liveURL} target="_blank" rel="noreferrer">Live project<span className="sr-only"> (opens in a new tab)</span> ↗</a> : null}
              {p.githubURL ? <a href={p.githubURL} target="_blank" rel="noreferrer">Repository<span className="sr-only"> (opens in a new tab)</span> ↗</a> : null}
              <Link href={`/projects/${p.slug}`}>Standalone page</Link>
            </p>
          </div>
        </details>;
      }) : <p className="empty">Case studies are being written and will appear here once published.</p>}
    </section>

    <section id="path" className="sec tint" aria-labelledby="path-h">
      <h2 id="path-h">Experience and education</h2>
      <div className="duo">
        {[{ title: "Experience", rows: experience.map((x) => ({ k: x.id, a: x.position, b: [x.organization, x.location].filter(Boolean).join(" · "), when: span(x.startDate, x.endDate, x.current), pts: lines(x.responsibilities, x.achievements) })) },
          { title: "Education", rows: education.map((x) => ({ k: x.id, a: [x.qualification, x.fieldOfStudy].filter(Boolean).join(" · "), b: [x.institution, x.location].filter(Boolean).join(" · "), when: span(x.startDate, x.endDate, x.current), pts: [...(x.description ? [x.description] : []), ...lines(x.achievements)] })) }].map((g) =>
          <div key={g.title}>
            <h3>{g.title}</h3>
            {g.rows.length ? <ol className="spine">{g.rows.map((r) => <li key={r.k} className="reveal"><time>{r.when}</time><strong>{r.a}</strong><span>{r.b}</span>{r.pts.length ? <ul>{r.pts.map((t, i) => <li key={i}>{t}</li>)}</ul> : null}</li>)}</ol> : <p className="empty">Nothing published here yet.</p>}
          </div>)}
      </div>
    </section>

    <section id="credentials" className="sec" aria-labelledby="cred-h">
      <h2 id="cred-h">Credentials{certificates.length ? <small>{certificates.length}</small> : null}</h2>
      {certificates.length ? <ul className="creds">{certificates.map((c) => { const f = media(c.credentialFile); return <li key={c.id} className="reveal"><strong>{c.title}</strong><span>{c.issuer} · {yr(c.issueDate)}{c.credentialID ? ` · ID ${c.credentialID}` : ""}</span>{c.verificationURL ? <a href={c.verificationURL} target="_blank" rel="noreferrer">Verify<span className="sr-only"> {c.title} (opens in a new tab)</span> ↗</a> : f?.url ? <a href={f.url}>View file<span className="sr-only"> for {c.title}</span></a> : null}</li>; })}</ul> : <p className="empty">Credentials will be listed once published.</p>}
    </section>

    <section id="toolkit" className="sec tint" aria-labelledby="tool-h">
      <h2 id="tool-h">Toolkit</h2>
      {groups.length ? <div className="kit">{groups.map((g) => <div key={g} className="reveal"><h3>{g}</h3><ul>{skills.filter((s) => s.category === g).map((s) => <li key={s.id}>{s.name}</li>)}</ul></div>)}</div> : <p className="empty">Skills will be listed once published.</p>}
    </section>

    <section id="contact" className="sec dark" aria-labelledby="contact-h">
      <h2 id="contact-h">Contact</h2>
      <p className="lede">Product work, collaboration, or a technical question: email is the fastest way to reach me.</p>
      {id?.contactEmail ? <CopyEmail email={id.contactEmail} /> : <p className="empty">Email address not published yet; use a profile below.</p>}
      <ul className="socials">{links.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.platform}<span className="sr-only"> (opens in a new tab)</span> ↗</a></li>)}</ul>
      <p className="fine">© {new Date().getFullYear()} {id?.fullName || siteConfig.name}</p>
    </section>
  </main>;
}
