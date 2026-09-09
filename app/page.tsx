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
const faqs = [
  ["What is All Things Attention?", "A practical community about creating, distributing, and converting attention through content, systems, automation, and experimentation."],
  ["Who should join?", "Creators, founders, growth and GTM operators, marketers, and engineers who are actively building or learning in these areas."],
  ["Where does the community live?", "The founding community lives on Discord, with focused channels, forum-based feedback, roles, and live voice sessions."],
  ["Do I need technical experience?", "No. Technical builders are welcome, but the community is equally designed for creators, operators, marketers, and founders."],
  ["Can I promote my work?", "Relevant links are welcome when they support a useful contribution. Unsolicited promotion, mass pitching, and DM spam are not."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="All Things Attention home"><span className="brand-mark">A*</span><span>ALL THINGS<br/>ATTENTION</span></a>
      <div className="nav-links"><a href="#inside">Inside</a><a href="#system">The system</a><a href="#standards">Standards</a></div>
      <a className="button button-small" href="#join">Join the community <span>↗</span></a>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span className="pulse"/> Founding members now joining</div>
      <h1>BUILD AN AUDIENCE.<br/>ENGINEER <em>distribution.</em><br/>TURN ATTENTION<br/>INTO GROWTH.</h1>
      <div className="hero-bottom"><p>A practical community for people building better systems for content, distribution, outreach, automation, and measurement.</p><a className="button button-large" href="#join">Join the Discord community <span>↗</span></a></div>
      <div className="flow" aria-label="Attention system: idea to content to distribution to conversation to growth">
        {['IDEA','CONTENT','DISTRIBUTION','CONVERSATION','GROWTH'].map((item,i)=><div className={`flow-item f${i}`} key={item}><span>0{i+1}</span>{item}</div>)}<div className="flow-line"/>
      </div>
    </section>

    <section className="manifesto shell"><p className="section-label">THE PREMISE</p><div><h2>Attention is not luck.<br/>It is a system you can study.</h2><p>The best ideas do not travel by themselves. We learn how to understand an audience, create useful work, distribute it through the right channels, automate the repetitive parts, and improve from the response.</p></div></section>

    <section className="audience shell" id="inside">
      <div className="section-head"><p className="section-label">WHO BELONGS HERE</p><p>You do not need “attention” in your job title. You do need to care how the system works—and be willing to share what you learn.</p></div>
      <div className="audience-list">{audience.map(([n,title,copy])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div>
    </section>

    <section className="system" id="system"><div className="shell">
      <div className="section-head light"><p className="section-label">HOW THE COMMUNITY WORKS</p><h2>A light rhythm.<br/><em>Serious practice.</em></h2></div>
      <div className="week-grid">{weekly.map(([day,title,copy],i)=><article key={day}><div><span>{day}</span><b>0{i+1}</b></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="discord-map"><div><span>DISCORD / FOUNDING SERVER</span><strong>Built for signal,<br/>not another full-time feed.</strong></div><ul><li><span>#</span> the-commons</li><li><span>#</span> builds-and-feedback</li><li><span>#</span> content-and-distribution</li><li><span>#</span> automation-and-systems</li></ul></div>
    </div></section>

    <section className="learn shell"><div><p className="section-label">THE PRACTICE</p><h2>From isolated tactics<br/>to a repeatable loop.</h2></div><ol>
      <li><span>01</span><strong>Understand</strong><p>Choose the audience and sharpen the message.</p></li><li><span>02</span><strong>Create</strong><p>Turn useful ideas into a sustainable workflow.</p></li><li><span>03</span><strong>Distribute</strong><p>Build a system across the channels that matter.</p></li><li><span>04</span><strong>Automate</strong><p>Remove repetitive work without lowering quality.</p></li><li><span>05</span><strong>Measure</strong><p>Run the experiment, explain the result, improve.</p></li>
    </ol></section>

    <section className="standards shell" id="standards"><div className="standards-title"><p className="section-label">COMMUNITY STANDARD</p><h2>High signal is<br/>a shared responsibility.</h2></div><div className="standards-grid"><p><b>Share context.</b> A result without its audience, input, method, or time period is hard to learn from.</p><p><b>Contribute before promoting.</b> Links are useful when they support a real point or answer.</p><p><b>Ask specific questions.</b> Explain what you tried, what happened, and where you are stuck.</p><p><b>Respect privacy.</b> Do not repost member messages, screenshots, or private work without permission.</p></div></section>

    <section className="faq shell"><p className="section-label">GOOD TO KNOW</p><div><h2>Questions,<br/>answered.</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="join" id="join"><div className="shell join-grid"><div><p className="section-label">FOUNDING GROUP</p><h2>Build better attention systems with people doing the work.</h2><p>The first group will shape the questions, resources, and rituals that become All Things Attention.</p></div>
      {submitted?<div className="success" role="status"><span>APPLICATION RECEIVED</span><h3>You’re on the founding list.</h3><p>This is a draft flow. Once the real form and controlled Discord invite are connected, joining details will appear here and arrive by email.</p><button onClick={()=>setSubmitted(false)}>Submit another response</button></div>:<form onSubmit={submit}>
        <label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label><label>What best describes you?<select name="role" required defaultValue=""><option value="" disabled>Select your role</option><option>Creator or content operator</option><option>Founder or independent builder</option><option>GTM or growth operator</option><option>Marketer</option><option>Engineer or automation builder</option></select></label><label>What are you building?<textarea name="building" required placeholder="A sentence or two is perfect."/></label><label className="check"><input type="checkbox" required/><span>I agree to the community standards.</span></label><button className="button button-submit" type="submit">Apply to join <span>↗</span></button>
      </form>}
    </div></section>
    <footer className="shell"><a className="brand" href="#top"><span className="brand-mark">A*</span><span>ALL THINGS<br/>ATTENTION</span></a><p>Build an audience. Engineer distribution.<br/>Turn attention into growth.</p><div><a href="#standards">Community guidelines</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
