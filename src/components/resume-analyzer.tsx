"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, FileText, Flame, Gauge, Sparkles, Target } from "lucide-react";

const sampleResume = `MAYA CHEN
Product Designer | maya.chen@email.com

Product designer with 4+ years of experience creating simple, useful tools for growing teams. Led end-to-end design for a B2B collaboration platform used by 12,000+ monthly users.

EXPERIENCE
Product Designer, Northstar Labs
- Designed onboarding flows and shipped a new workspace experience
- Partnered with product and engineering to improve customer activation
- Ran user interviews and translated insights into product direction

EDUCATION
BFA, Interaction Design`;

const sampleJob = `We are looking for a Senior Product Designer to shape intuitive experiences for our collaboration platform. You will partner closely with product managers and engineers, lead discovery, and turn complex workflows into elegant, accessible products.

The ideal candidate has experience with B2B SaaS, design systems, user research, prototyping, and measuring the impact of their work.`;

const missingKeywords = ["Design systems", "Prototyping", "Accessibility", "B2B SaaS", "Systems thinking"];

export default function ResumeAnalyzer() {
  const [resume, setResume] = useState(sampleResume);
  const [job, setJob] = useState(sampleJob);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

  function roast(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setScanned(true);
    }, 700);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-[#f4f7f5]">
      <div className="pointer-events-none absolute -left-32 top-24 size-[34rem] rounded-full bg-[#27e6d0]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-15rem] top-[30rem] size-[42rem] rounded-full bg-[#8f7cff]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/15 pb-5">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <span className="flex size-9 items-center justify-center rounded-full bg-[#d7ff72] text-[#070b14]"><Flame className="size-5 fill-current" /></span>
            RESUMEROAST<span className="text-[#d7ff72]">.AI</span>
          </a>
          <span className="hidden text-xs font-bold uppercase tracking-[.14em] text-white/45 sm:block">Free beta / Analysis 001</span>
          <a href="#results" className="flex items-center gap-1 text-xs font-bold uppercase tracking-[.14em] hover:text-[#d7ff72]">Results <ArrowUpRight className="size-3.5" /></a>
        </header>

        <section id="top" className="grid gap-8 pb-14 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:pt-24">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[#8ef7eb]"><span className="h-px w-8 bg-[#8ef7eb]" /> ATS reality check</p>
            <h1 className="max-w-4xl font-serif text-[clamp(3.7rem,8vw,8.2rem)] leading-[.82] tracking-[-.075em]">Make your resume <em className="text-[#d7ff72]">impossible</em> to ignore.</h1>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-lg leading-relaxed text-white/60">Paste your resume and a job description. Get the honest read a recruiter gives it in six seconds, minus the polite nod.</p>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.14em]">01 Paste <span className="mx-2 text-[#8ef7eb]">/</span> 02 Roast</p>
          </div>
        </section>

        <form onSubmit={roast} className="grid gap-4 lg:grid-cols-2">
          <label className="flex min-h-[380px] flex-col border border-white/15 bg-white/[.055] p-5 backdrop-blur-md focus-within:border-[#8ef7eb] sm:p-7">
            <span className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]"><FileText className="size-4 text-[#8ef7eb]" /> Your resume</span>
            <textarea value={resume} onChange={(event) => setResume(event.target.value)} aria-label="Resume text" className="min-h-0 flex-1 resize-none bg-transparent font-mono text-sm leading-6 text-white/85 outline-none" />
            <span className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[.1em] text-white/35">{resume.length} characters</span>
          </label>
          <label className="flex min-h-[380px] flex-col border border-white/15 bg-white/[.055] p-5 backdrop-blur-md focus-within:border-[#8ef7eb] sm:p-7">
            <span className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]"><Target className="size-4 text-[#8ef7eb]" /> Target job description</span>
            <textarea value={job} onChange={(event) => setJob(event.target.value)} aria-label="Job description" className="min-h-0 flex-1 resize-none bg-transparent font-mono text-sm leading-6 text-white/85 outline-none" />
            <span className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[.1em] text-white/35">{job.length} characters</span>
          </label>
          <div className="flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-center lg:col-span-2">
            <p className="text-xs text-white/45">Your text stays in this browser for this demo. No account, no sugarcoating.</p>
            <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-3 bg-[#d7ff72] px-7 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#070b14] transition hover:bg-[#8ef7eb] disabled:opacity-60 sm:w-auto">{loading ? "Reading between the lines..." : "Roast my resume"}<ArrowUpRight className="size-4" /></button>
          </div>
        </form>

        <section id="results" aria-live="polite" className="mt-20 border-t-2 border-white/80 pt-6">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[.15em] text-[#8ef7eb]">{scanned ? "Fresh scan / just now" : "Sample scan / preview"}</p><h2 className="font-serif text-5xl tracking-[-.06em]">The honest read.</h2></div><p className="max-w-xs text-sm text-white/45">A snapshot of what your resume says before a human gets curious.</p></div>
          <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            <div className="border border-[#8ef7eb]/20 bg-[#0d1324]/90 p-6 text-[#f4f7f5] shadow-[0_0_60px_rgba(39,230,208,.08)] sm:p-8"><div className="flex min-h-[275px] flex-col justify-between"><div className="flex justify-between text-xs font-bold uppercase tracking-[.14em] text-white/50"><span className="flex items-center gap-2"><Gauge className="size-4 text-[#8ef7eb]" /> Hireability score</span><span>Out of 100</span></div><div><div className="font-serif text-9xl leading-[.8] tracking-[-.1em] text-[#d7ff72]">72</div><p className="mt-6 max-w-xs text-sm text-white/55">Good bones. Your experience is clear, but the role-specific signal is getting lost in translation.</p></div><div className="h-1 bg-white/10"><div className="h-full w-[72%] bg-[#8ef7eb]" /></div></div></div>
            <div className="border border-white/15 bg-white/[.055] p-6 backdrop-blur-md sm:p-8"><div className="mb-8 flex items-center justify-between"><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em]"><Sparkles className="size-4 text-[#d7ff72]" /> Missing keywords</span><span className="font-mono text-xs text-white/35">05 found</span></div><div className="grid gap-3 sm:grid-cols-2">{missingKeywords.map((keyword) => <div key={keyword} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm"><span className="flex size-5 items-center justify-center rounded-full bg-[#d7ff72]/15"><Check className="size-3 text-[#d7ff72]" /></span>{keyword}</div>)}</div><p className="mt-10 border-t border-white/10 pt-5 text-sm text-white/50">These words appear in the role but not in your resume. Add the ones you can genuinely stand behind.</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
