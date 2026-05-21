import logo from "../assets/logos/hard_dance_soc_logo_white.png";
import {
  FaInstagram,
  FaFacebookF,
  FaSpotify,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative w-full bg-[#020617] border-t border-purple-500/20">
      {/* subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div
        className="
          max-w-[1500px]
          mx-auto
          px-8
          md:px-14
          lg:px-20
          py-10
          md:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[1.3fr_0.75fr_0.75fr_1.4fr_1fr]
            gap-10
            md:gap-12
            items-start
          "
        >
          {/* LOGO AREA */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="UNSW Hard Dance Society Logo"
              className="w-[190px] md:w-[210px] object-contain opacity-90"
            />

            <p
              className="
                mt-5
                text-[0.7rem]
                tracking-[0.28em]
                uppercase
                text-white/45
              "
            >
              UNSW Hard Dance Soc
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="footer-heading">Navigation</h3>

            <ul className="footer-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="footer-heading">Socials</h3>

            <ul className="footer-list">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Spotify</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-heading">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-white/45">
              <p>hello@unswhds.com</p>
              <p>UNSW, Sydney NSW 2052</p>
            </div>
          </div>

          {/* ICONS */}
          <div
            className="
              flex
              md:justify-end
              items-center
              gap-9
              h-full
              text-purple-400
            "
          >
            <a href="#" className="footer-icon" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" className="footer-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="footer-icon" aria-label="Spotify">
              <FaSpotify />
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className="
            mt-8
            text-center
            text-[0.7rem]
            tracking-[0.18em]
            uppercase
            text-white/35
          "
        >
          © 2024 UNSW Hard Dance Society
        </div>
      </div>
    </footer>
  );
}

export default Footer;