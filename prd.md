# Product Requirements Document (PRD) — ResumeRoast AI

## 1. Executive Summary
ResumeRoast AI is a lightweight Micro-SaaS that allows job seekers to upload or paste a resume along with a target job description. The application uses AI to stream detailed, structured analysis including an overall "Hireability Score," missing key industry terms, and actionable bullet-point rewrites.

## 2. Target Audience
* Software engineers, students, and job seekers looking to optimize their resumes for Applicant Tracking Systems (ATS) and recruiter visibility.

## 3. Tech Stack & Architecture
* **Frontend:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui.
* **Backend:** Next.js Route Handlers (API routes).
* **AI Engine:** Vercel AI SDK (`streamObject` or `generateObject`) with Zod schema enforcement.
* **Database & Auth:** Supabase (Postgres with RLS enabled, Supabase SSR Auth).
* **Hosting:** Vercel.

## 4. Core Features & Scope
* **Authentication:** Supabase Auth (Email/Password or OAuth).
* **Resume Analyzer Engine:**
  * Inputs: Raw text / PDF upload for resume + raw text for Job Description.
  * AI Analysis Output (Validated via Zod):
    * `hireabilityScore`: Number (0–100)
    * `summary`: String (High-level feedback)
    * `missingKeywords`: String Array
    * `bulletRewrites`: Object Array containing `original`, `improved`, and `reasoning`.
* **User Dashboard:** Display past scan results fetched from Supabase.
* **Free Tier Utility:** Public scan flow available without paywalls during development.

## 5. Security & Data Integrity
* Enforce strict Row Level Security (RLS) on all user data.
* Read all API keys exclusively from server-side environment variables (`process.env`).