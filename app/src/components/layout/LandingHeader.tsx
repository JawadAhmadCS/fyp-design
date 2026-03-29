import BrandWordmark from "../BrandWordmark";
import { Button } from "../ui/Button";

export function LandingHeader() {
  return (
    <header className="landing-header">
      <BrandWordmark compact />
      <nav className="landing-nav" aria-label="Primary">
        <a className="active" href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Pages</a>
        <a href="#">Contact us</a>
      </nav>
      <Button variant="landingHeader" type="button">
        Get Started
      </Button>
    </header>
  );
}