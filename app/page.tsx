"use client";

import { FormEvent, useState } from "react";

const audience = [
  ["01", "Creators", "Build a sustainable content system and reach the people who care."],
  ["02", "Founders", "Create demand and turn attention into useful conversations."],
  ["03", "Growth operators", "Connect distribution, outreach, and measurement into one practice."],
  ["04", "Marketers", "Share campaigns, systems, and evidence across disciplines."],
  ["05", "Engineers", "Apply automation and technical leverage to real distribution problems."],
];
const weekly = [
  ["MON", "What are you building?", "Set an experiment for the week and share the context."],
  ["WED", "Breakdown or teardown", "Examine one campaign, workflow, or content system in detail."],
  ["FRI", "What did you learn?", "Report what worked, what failed, and what changes next."],
];
const activities = [
  ["DISCUSS", "Practical conversations about content, distribution, growth, and automation."],
  ["BUILD", "Member experiments, workflows, and honest results—with the context included."],
  ["REVIEW", "Feedback on positioning, campaigns, content systems, and work in progress."],
  ["BREAK DOWN", "Useful tools, processes, and examples examined beyond the headline."],
  ["GO LIVE", "Teardowns and build sessions when there is something worth solving together."],
  ["DOCUMENT", "The best questions, templates, and lessons collected into a growing library."],
];
const faqs = [
  ["What is All Things Attention?", "A practical community about creating, distributing, and converting attention through content, systems, automation, and experimentation."],
  ["Who should join?", "Creators, founders, growth and GTM operators, marketers, and engineers who are actively building or learning in these areas."],
  ["Where does the community live?", "The founding community lives on Discord, with focused channels, forum-based feedback, roles, and live voice sessions."],
  ["Is it free?", "The version-one membership decision has not been announced. No fee or free-forever promise will be published until it is confirmed."],
  ["Do I need technical experience?", "No. Technical builders are welcome, but the community is equally designed for creators, operators, marketers, and founders."],
  ["Can I promote my work?", "Relevant links are welcome when they support a useful contribution. Unsolicited promotion, mass pitching, and DM spam are not."],
  ["What happens after I apply?", "You will receive joining instructions, the community rules, and a simple introduction prompt once the controlled Discord invite is ready."],
  ["Are messages private?", "Members must not repost messages, screenshots, contact details, or private work without permission."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setError(""); setSaving(true); const form = new FormData(e.currentTarget); const payload = Object.fromEntries(form.entries()) as Record<string, string | boolean>; payload.rulesAgreed = form.has("rulesAgreed"); payload.updatesConsent = form.has("updatesConsent"); try { const response = await fetch("/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); const result = await response.json(); if (!response.ok || !result.ok) throw new Error(result.error || "Unable to submit"); setSubmitted(true); } catch (err) { setError(err instanceof Error ? err.message : "Please try again in a moment."); } finally { setSaving(false); } }
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="All Things Attention home"><span className="brand-mark">A*</span><span>ALL THINGS<br/>ATTENTION</span></a>
      <div className="nav-links"><a href="/community">Community</a><a href="/resources">Resources</a><a href="/about">About</a></div>
      <a className="button button-small" href="#join">Join Discord <span>↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span className="pulse"/> Founding members now joining</div>
      <h1>BUILD AN AUDIENCE.<br/>ENGINEER <em>distribution.</em><br/>TURN ATTENTION<br/>INTO GROWTH.</h1>
      <div className="hero-bottom"><div><p>A practical community for creators, founders, marketers, growth operators, and engineers building better systems for content, distribution, outreach, automation, and measurement.</p><a className="text-link" href="#inside">See what happens inside ↓</a></div><a className="button button-large" href="#join">Join the Discord community <span>↗</span></a></div>
      <div className="flow" aria-label="Attention system: idea to content to distribution to conversation to growth">
        {['IDEA','CONTENT','DISTRIBUTION','CONVERSATION','GROWTH'].map((item,i)=><div className={`flow-item f${i}`} key={item}><span>0{i+1}</span>{item}</div>)}<div className="flow-line"/>
      </div>
    </section>

    <section className="manifesto shell"><p className="section-label">THE PREMISE</p><div><h2>Attention is not luck.<br/>It is a system you can study.</h2><p>The best ideas do not travel by themselves. We learn how to understand an audience, create useful work, distribute it through the right channels, automate the repetitive parts, and improve from the response.</p></div></section>

    <section className="audience shell" id="inside">
      <div className="section-head"><p className="section-label">WHO BELONGS HERE</p><p>You do not need “attention” in your job title. You do need to care how the system works—and be willing to share what you learn.</p></div>
      <div className="audience-list">{audience.map(([n,title,copy])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div>
    </section>

    <section className="activities shell"><div className="section-head"><p className="section-label">WHAT HAPPENS INSIDE</p><h2>Useful work,<br/>made visible.</h2></div><div className="activity-grid">{activities.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="system" id="system"><div className="shell">
      <div className="section-head light"><p className="section-label">HOW THE COMMUNITY WORKS</p><h2>A light rhythm.<br/><em>Serious practice.</em></h2></div>
      <div className="week-grid">{weekly.map(([day,title,copy],i)=><article key={day}><div><span>{day}</span><b>0{i+1}</b></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="discord-map"><div><span>DISCORD / FOUNDING SERVER</span><strong>Built for signal,<br/>not another full-time feed.</strong><a href="#join">Join the Discord community →</a></div><ul><li><span>#</span> start-here</li><li><span>#</span> announcements</li><li><span>#</span> the-commons</li><li><span>#</span> builds-and-feedback</li><li><span>#</span> content-and-distribution</li><li><span>#</span> automation-and-systems</li><li><span>◉</span> voice-and-events</li></ul></div>
    </div></section>

    <section className="learn shell"><div><p className="section-label">THE PRACTICE</p><h2>From isolated tactics<br/>to a repeatable loop.</h2></div><ol>
      <li><span>01</span><strong>Understand</strong><p>Choose the audience and sharpen the message.</p></li><li><span>02</span><strong>Create</strong><p>Turn useful ideas into a sustainable workflow.</p></li><li><span>03</span><strong>Distribute</strong><p>Build a system across the channels that matter.</p></li><li><span>04</span><strong>Automate</strong><p>Remove repetitive work without lowering quality.</p></li><li><span>05</span><strong>Measure</strong><p>Run the experiment, explain the result, improve.</p></li>
    </ol></section>

    <section className="standards shell" id="standards"><div className="standards-title"><p className="section-label">COMMUNITY STANDARD</p><h2>High signal is<br/>a shared responsibility.</h2></div><div className="standards-grid"><p><b>Share context.</b> A result without its audience, input, method, or time period is hard to learn from.</p><p><b>Contribute before promoting.</b> Links are useful when they support a real point or answer.</p><p><b>Ask specific questions.</b> Explain what you tried, what happened, and where you are stuck.</p><p><b>Respect privacy.</b> Do not repost member messages, screenshots, or private work without permission.</p></div></section>

    <section className="faq shell"><p className="section-label">GOOD TO KNOW</p><div><h2>Questions,<br/>answered.</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="join" id="join"><div className="shell join-grid"><div><p className="section-label">FOUNDING GROUP</p><h2>Build better attention systems with people doing the work.</h2><p>The first group will shape the questions, resources, and rituals that become All Things Attention.</p></div>
      {submitted?<div className="success" role="status"><span>APPLICATION RECEIVED</span><h3>You’re on the founding list.</h3><p>This draft does not send or store your answers yet. Once the secure form and controlled invite are connected, approved members will receive Discord joining details by email.</p><h4>When you enter Discord</h4><ol><li>Accept the rules.</li><li>Choose your interest roles.</li><li>Introduce yourself: where you are based, what you build, the attention problem you are solving, and one lesson you can share.</li></ol><button onClick={()=>setSubmitted(false)}>Submit another response</button></div>:<form onSubmit={submit}>
        <label>Name<input name="name" required autoComplete="name" placeholder="Your name"/></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com"/></label><label>Discord username <span className="optional">Optional</span><input name="discord" autoComplete="off" placeholder="yourname"/></label><label>What best describes you?<select name="role" required defaultValue=""><option value="" disabled>Select your role</option><option>Creator or content operator</option><option>Founder or independent builder</option><option>GTM or growth operator</option><option>Marketer</option><option>Engineer or automation builder</option></select></label><label>Location or time zone<input name="timezone" required placeholder="Bengaluru / IST"/></label><label>What are you building?<textarea name="building" required placeholder="A sentence or two is perfect."/></label><label>What do you want to improve?<textarea name="improve" required placeholder="Content systems, distribution, outreach, automation…"/></label><label>LinkedIn or website <span className="optional">Optional</span><input name="website" type="url" placeholder="https://"/></label><input name="website_url" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/><label className="check"><input name="rulesAgreed" type="checkbox" required/><span>I agree to the <a href="/guidelines">community guidelines</a>.</span></label><label className="check"><input name="updatesConsent" type="checkbox"/><span>Send me occasional community updates. <span className="optional">Optional</span></span></label>{error&&<p className="form-error" role="alert">{error}</p>}<button className="button button-submit" type="submit" disabled={saving}>{saving ? "Saving application…" : "Apply to join Discord"} <span>↗</span></button>
      </form>}
    </div></section>
    <footer className="shell"><a className="brand" href="#top"><span className="brand-mark">A*</span><span>ALL THINGS<br/>ATTENTION</span></a><p>Build an audience. Engineer distribution.<br/>Turn attention into growth.</p><div><a href="/guidelines">Guidelines</a><a href="/privacy">Privacy</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
