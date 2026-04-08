import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ted-dark text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-ted-red text-white font-extrabold text-lg tracking-tight px-2 py-1 leading-none">
                TED<sup className="text-[0.6em] align-super">x</sup>
              </span>
              <span className="text-sm font-medium text-white/70">
                Salinas
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Independently organized TED event bringing together game changers
              and global thinkers in Salinas, California.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Explore</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/speakers"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Speakers
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About TEDx
              </Link>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Event</h3>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>February 25, 2017</p>
              <p>Santa Lucia Ballroom</p>
              <p>940 North Main Street</p>
              <p>Salinas, CA 93906</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            This independent TEDx event is operated under license from TED.
          </p>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TEDx Salinas
          </p>
        </div>
      </div>
    </footer>
  );
}
