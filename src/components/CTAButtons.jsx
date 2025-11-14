import Link from "next/link";


export default function CTAButtons({ align = "left" }) {
    return (
        <div style={{ display: "flex", gap: "12px", justifyContent: align }}>
            <Link href="/#contact">
                <a className="button button-primary">Get a Free Estimate</a>
            </Link>
            <Link href="/tub-to-shower">
                <a className="button" style={{ background: "#2d3748", color: "#fff" }}>See Tub‑to‑Shower Details</a>
            </Link>
        </div>
    );
}