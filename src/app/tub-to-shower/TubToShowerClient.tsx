/* eslint-disable @typescript-eslint/no-explicit-any */



"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import styles from "./styles.module.css";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScG7cTvwlJwmkZQnj_DKMHw4bQ7nugY8Ngd-WDpck65QA3wHw/viewform?usp=header";

export default function TubToShowerClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(
    () => [
      "/images/projects/tub-to-shower/tub-to-shower-1.png",
      "/images/projects/tub-to-shower/tub-to-shower-2.png",
      "/images/projects/tub-to-shower/tub-to-shower-3.png",
      "/images/projects/tub-to-shower/tub-to-shower-4.png",
      "/images/projects/tub-to-shower/tub-to-shower-5.png",
      "/images/projects/tub-to-shower/tub-to-shower-6.png"

    ],
    [],
  );

  const openLightbox = (index = 0) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((i) => (i + 1) % images.length);
  };

  const track = (action: string, label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", action, {
        event_category: "cta",
        event_label: label,
        value: 1,
      });
    }
  };

  return (
    <>
      <main className={styles.tubPage}>
        {/* Hero */}
        <section className="offer-hero">
          <div className="container">
            <motion.div
              className="offer-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <span className="text-sm uppercase tracking-wide text-gray-400 block mb-2">
                Bathroom Upgrade Specialists
              </span>
              <h1 className="offer-title">Tub-to-Shower Conversions</h1>
              <p className="offer-sub">
                Starting at <strong>$8,000</strong>{" "}
                — get your new walk-in shower in as little as{" "}
                <strong>15 days</strong>.
              </p>
              <ul className="trust-bullets">
                <li>
                  <a
                    href="https://www.schluter.com/schluter-us/en_US/schluter-workshops-for-tile-and-building-industry-professionals"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Schluter-certified installers
                  </a>
                </li>
                <li>Fully insured, family-owned</li>
                <li>Serving Fairfield County</li>
              </ul>
              <div className="cta-row">
                <motion.a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onClick={() => track("quote_click", "hero_quote")}
                >
                  Get My Free Quote
                </motion.a>
                <button
                  className="btn btn-secondary"
                  onClick={() => openLightbox(0)}
                >
                  View Gallery
                </button>
                <a
                  href="tel:+12036284618"
                  className="btn btn-secondary"
                  onClick={() => track("call_click", "hero_call")}
                >
                  Call ADM Solutions
                </a>
              </div>

              {/* What’s included preview (trust booster) */}
              <p className="text-sm text-gray-400 mt-4">
                Includes professional demo, waterproofing, new shower base, tile
                installation.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-white text-gray-900 rounded-full px-3 py-1 shadow-sm">
                  Licensed & Insured
                </span>
                <span className="text-xs bg-white text-gray-900 rounded-full px-3 py-1 shadow-sm">
                  Schluter Certified
                </span>
                <span className="text-xs bg-white text-gray-900 rounded-full px-3 py-1 shadow-sm">
                  10–15 day timeline
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEW: Easy Quote section (no obligation / no spam / 6 questions) */}
        <section className="section">
          <div className="container">
            <motion.div
              className="card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(75,83,99,0.25) 0%, rgba(34,34,34,0.4) 50%, rgba(27,27,27,0.35) 100%)",
                borderColor: "rgba(170,250,255,0.18)",
              }}
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Getting a Quote is Easy
                </h2>
                <p className="text-lg text-gray-700">
                  No obligation. No daily calls. Just{" "}
                  <strong>6 quick questions</strong>{" "}
                  — and we’ll follow up with a clear estimate or any info we
                  still need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/60 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Quick & Simple
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Answer 6 short questions about your space and goals.
                  </p>
                </div>

                <div className="bg-white/60 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      No Pressure
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Your request is{" "}
                    <strong>no-obligation</strong>. We won’t spam or call you
                    every day.
                  </p>
                </div>

                <div className="bg-white/60 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Fast Response
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    We’ll reply with a preliminary quote or request a couple of
                    details/photos.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <motion.a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onClick={() => track("quote_click", "easy_quote_card")}
                >
                  Start My 6-Question Quote
                </motion.a>
                <a
                  href="tel:+12036284618"
                  className="btn btn-secondary"
                  onClick={() => track("call_click", "easy_quote_call")}
                >
                  Prefer to talk? Call us
                </a>
              </div>

              <p className="text-xs text-gray-600 text-center mt-3">
                We respect your time and privacy. Your info is only used to
                prepare your quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why ADM */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              Why homeowners choose ADM
            </motion.h2>
            <p className="text-lg text-gray-600">
              Built to last with certified systems, thoughtful design guidance,
              and a clean, respectful job site.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                {
                  title: "Waterproofing done right",
                  desc:
                    "Schluter systems, proper slopes, corners and seals for durability.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7l9-4 9 4-9 4-9-4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10l9 4 9-4V7"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Design guidance",
                  desc:
                    "Tile, fixtures, glass and layout choices to fit your style and budget.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },

                {
                  title: "Clean job sites",
                  desc:
                    "Dust control, floor protection and daily cleanup while we work.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Local CT team",
                  desc:
                    "Family-owned, fully insured, and clear communication from estimate to finish.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18, x: i % 2 === 0 ? -18 : 18 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: i * 0.16,
                    ease: "easeOut",
                  }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-6">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              >
                Trusted by CT Homeowners
              </motion.h2>

              <div className="stats-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div
                  className="card flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <div
                    className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-md mb-3"
                    aria-hidden
                  >
                    <svg className="w-6 h-6 text-[#aafaff]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l7 4v5c0 5-3.4 9.74-7 11-3.6-1.26-7-6-7-11V6l7-4z" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                <div className="text-2xl font-extrabold text-gray-900">30+ Years</div>
                <div className="text-gray-600">Family-Owned Craftsmanship</div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="card flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.16 }}
              >
                <div
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-md mb-3"
                  aria-hidden
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-gray-900">5-Star Reviews</div>
                <div className="text-gray-600">Trusted by CT Homeowners</div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="card flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.32 }}
              >
                <div
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-md mb-3"
                  aria-hidden
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-gray-900">Serving Fairfield County</div>
                <div className="text-gray-600">
                  Danbury, Ridgefield, Bethel, Brookfield, Newtown, Greenwich &amp; more
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Gallery */}
        <section className="section">
          <div className="container">
            <motion.div
              className="card hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <div className="section-header">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0 }}
                >
                  Recent Tub-to-Shower projects
                </motion.h2>
                <button className="link-cta" onClick={() => openLightbox(0)}>
                  View Gallery
                </button>
              </div>
              <p className="text-lg text-gray-600">
                See our latest tub-to-shower conversions and custom shower
                builds from Fairfield County.
              </p>
              <motion.div
                className="gallery-grid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0 }}
              >
                {images.slice(0, 6).map((src, i) => (
                  <motion.button
                    key={src}
                    className="thumb"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.16 }}
                    onClick={() => openLightbox(i)}
                    aria-label={`Open image ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="Bathroom renovation by ADM Solutions" />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              Our 5-step process
            </motion.h2>
            <p className="text-lg text-gray-600">
              A fast, organized path from estimate to final walkthrough — most
              projects complete within 10–15 days across Fairfield County,
              including Danbury, Ridgefield, Brookfield, and nearby towns.
            </p>
            <motion.div
              className="card hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <motion.ol
                className="process-list"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.16 }}
              >
                <motion.li
                  className="muted"
                  initial={{ opacity: 0, x: -16, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  In-home estimate & measurements
                </motion.li>
                <motion.li
                  className="muted"
                  initial={{ opacity: 0, x: 16, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Design & materials
                </motion.li>
                <motion.li
                  className="muted"
                  initial={{ opacity: 0, x: -16, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Demo & prep
                </motion.li>
                <motion.li
                  className="muted"
                  initial={{ opacity: 0, x: 16, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Build (pan, waterproofing, tile, grout)
                </motion.li>
                <motion.li
                  className="muted"
                  initial={{ opacity: 0, x: -16, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Final walkthrough & care tips
                </motion.li>
              </motion.ol>
              <div className="cta-inline">
                <div className="cta-lead">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M13 2L3 14h7v8l11-14h-8z" />
                  </svg>
                  <span>Ready to start?</span>
                </div>
                <motion.a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onClick={() => track("quote_click", "process_quote")}
                >
                  Get My Free Quote
                </motion.a>
                <a
                  href="tel:+12036284618"
                  className="btn btn-secondary"
                  aria-label="Call us"
                >
                  Call ADM Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              Terms & conditions
            </motion.h2>
            <motion.div
              className="card hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              <p className="text-gray-600">
                The $8,000 is a starting price and can vary based on layout,
                size, material selections, plumbing/electrical updates,
                structural conditions, glass type, and custom features (niches,
                benches, etc.).
              </p>
              <details className="details">
                <summary>See what can affect price</summary>
                <ul>
                  <li>Bathroom size and existing tub layout</li>
                  <li>Tile choice, pattern/format, and grout type</li>
                  <li>Plumbing/electrical updates or relocations</li>
                  <li>Subfloor/structural repairs if needed</li>
                  <li>Custom features like niches, benches, shelves</li>
                </ul>
              </details>
              <p className="text-gray-600" style={{ marginTop: 12 }}>
                Every project starts with an in-home consultation and a clear
                written estimate — no surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        {/* Inclusions & Exclusions */}
        <section className="section service-section service-inclusions">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inclusions & Exclusions
            </h2>

            <details open>
              <summary>What’s included (starting package)</summary>
              <p>
                <strong>
                  Baseline assumes a standard 36&quot; × 60&quot; tub alcove.
                </strong>
              </p>
              <ul>
                <li>
                  <strong>Demolition</strong>{" "}
                  — remove existing tub and tile wall; protect vanity, mirror,
                  floors, and adjacent finishes.
                </li>
                <li>
                  <strong>Schluter waterproofing</strong>{" "}
                  — Kerdi board on walls,{" "}
                  <strong>Kerdi center-drain tray 36&quot;×60&quot;</strong>,
                  Kerdi drain flange kit, mortar, profiles.
                </li>
                <li>
                  <strong>Tile work</strong>{" "}
                  — walls, curb &amp; niche slab installation (if applicable),
                  and grout.
                </li>
                <li>
                  <strong>Plumbing</strong>{" "}
                  — install shower valve &amp; shower head; center/align shower
                  drain to tray.
                </li>
                <li>
                  <strong>Electrical</strong>{" "}
                  — one recessed light (shower-rated where required).
                </li>
              </ul>
              <p>
                <em>Note:</em> A{" "}
                <strong>standard Kerdi drain &amp; flange</strong>{" "}
                is included. Decorative covers or <strong>linear drains</strong>
                {" "}
                are optional upgrades.
              </p>
            </details>

            <details>
              <summary>Not included (typical)</summary>
              <ul>
                <li>
                  Dumpster &amp; portable toilet (only if required by site/HOA).
                </li>
                <li>
                  Stone slabs beyond curb/niche basics (e.g., slab walls, bench
                  tops).
                </li>
                <li>
                  Shower door &amp; installation (frameless/custom glass quoted
                  separately).
                </li>
                <li>
                  Specialty/upgrade shower finishes (thermostatic valves, body
                  sprays, etc.).
                </li>
              </ul>
            </details>

            <details>
              <summary>Price factors (can change the final price)</summary>
              <ul>
                <li>Bullnose or specialty tile trims.</li>
                <li>
                  <strong>Large-format</strong> tile on shower floor.
                </li>
                <li>
                  <strong>Curbless</strong>{" "}
                  shower prep &amp; waterproofing details.
                </li>
                <li>
                  Built-in <strong>bench</strong> or additional niches.
                </li>
                <li>
                  <strong>Hand shower</strong> kits &amp; extra plumbing lines.
                </li>
                <li>
                  Tile on the <strong>ceiling</strong> of the shower.
                </li>
                <li>
                  New or upsized <strong>exhaust fan</strong> &amp; ducting.
                </li>
                <li>
                  <strong>Linear drain</strong> systems or premium drain covers.
                </li>
                <li>Subfloor/structure repair discovered during demo.</li>
                <li>
                  Electrical or plumbing code upgrades beyond baseline.
                </li>
              </ul>
            </details>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="section service-terms">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms &amp; Conditions
            </h2>
            <details>
              <summary>Price &amp; scope</summary>
              <p>
                “Starting at <strong>$8,000</strong>” reflects a standard{" "}
                <strong>36&quot; × 60&quot;</strong>{" "}
                tub-to-shower conversion with the inclusions above. Final
                pricing depends on field conditions, layout, material
                selections, and any upgrades or code-required work.
              </p>
            </details>
            <details>
              <summary>Site readiness</summary>
              <p>
                Owner clears personal items and provides access during work
                hours. Building/HOA rules (dumpster, restroom, parking) may add
                cost/time.
              </p>
            </details>
            <details>
              <summary>Materials</summary>
              <p>
                Tile,fixtures, and finishes chosen by owner can affect cost and
                lead time.
              </p>
            </details>
            <details>
              <summary>Schedule</summary>
              <p>
                Typical build time <strong>10–15 days</strong>{" "}
                after materials are on site; unforeseen conditions may extend
                schedule.
              </p>
            </details>
            <details>
              <summary>Warranty</summary>
              <p>
                Waterproofing installed to Schluter specs; workmanship warranty
                provided in the proposal.
              </p>
            </details>
            <details>
              <summary>Estimates</summary>
              <p>
                A written in-home estimate details exact inclusions/exclusions
                before work begins.
              </p>
            </details>
          </div>
        </section>

        <section className="promise-section bg-gradient-to-r from-[#4b5363] via-[#222] to-[#1b1b1b] py-20 text-center text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-[#4b5363]/30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#4b5363]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-semibold mb-4">Our Promise</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We treat every home as if it were our own — providing clear
                estimates, clean job sites, and timely, professional
                craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <Reviews />

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
            >
              Ready to upgrade your bathroom?
            </motion.h2>
            <div className="cta-center">
              <motion.a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() => track("quote_click", "final_quote")}
              >
                Request My Free Quote
              </motion.a>
            </div>
          </div>
        </section>

        <Contact />

        {/* Sticky CTA */}
        <div className="sticky-cta" role="region" aria-label="Get a Free Quote">
          <div className="sticky-inner">
            <span>Tub-to-Shower Conversions — starting at $8,000</span>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={() => track("quote_click", "sticky_quote")}
            >
              Get My Free Quote
            </a>
            <a
              href="tel:+12036284618"
              className="btn btn-secondary btn-sm"
              aria-label="Call us"
              onClick={() => track("call_click", "sticky_call")}
            >
              Call ADM Solutions
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal
          >
            <button
              className="nav prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lightbox-img"
              src={images[activeIndex]}
              alt="Bathroom renovation"
            />
            <button
              className="nav next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
            <button
              className="close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
      </main>

      {/* Schema.org structured data for Organization and Service */}
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ADM Solutions",
            url: "https://admsolutionsusa.com",
            telephone: "+1-203-628-4618",
            areaServed: [
              "Danbury",
              "Ridgefield",
              "Bethel",
              "Brookfield",
              "Newtown",
              "Greenwich",
            ],
            sameAs: ["https://instagram.com/admsolutionsusa"],
          }),
        }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Tub-to-Shower Conversion",
            provider: { "@type": "LocalBusiness", name: "ADM Solutions" },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Fairfield County, CT",
            },
            offers: {
              "@type": "Offer",
              price: "8000",
              priceCurrency: "USD",
              description: "Starting at $8,000 — timeline 10–15 days",
            },
          }),
        }}
      />

      {/* FAQ rich results */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What’s included in the starting price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional demo, waterproofing, shower base/pan, tile installation, grout.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Most conversions are completed in 10–15 days, depending on materials and scope.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we help you select tile, fixtures — and provide 3D design previews.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Danbury, Ridgefield, Brookfield, Bethel, Newtown, Greenwich, and nearby Connecticut towns.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
