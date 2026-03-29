import { Star } from "lucide-react";
import { LandingHeader } from "../components/layout/LandingHeader";

export function LandingPage() {
  return (
    <div className="landing-page">
      <LandingHeader />

      <section className="hero-grid">
        <div className="hero-copy">
          <div className="hero-chip">Boost Your Productivity with Tolkio</div>
          <h1>
            The AI Voice
            <br />
            Assistant That
            <br />
            Understands
            <br />
            Your Needs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit. At
            arcu amet nisi scelerisque aliquam diam.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-pill">
              Try Free Now
            </button>
            <button type="button" className="ghost-pill">
              Learn More
            </button>
          </div>

          <div className="hero-social-proof">
            <strong>4.8/5</strong>
            <Star size={14} fill="currentColor" />
            <div className="mini-avatars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <b>100 K+</b>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb" />
          <div className="floating-card">
            <h3>How It Works</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim.</p>
          </div>
          <div className="avatar-block one" />
          <div className="avatar-block two" />
        </div>
      </section>
    </div>
  );
}
