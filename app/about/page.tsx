import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TEDx Salinas, organized by Michelle Serna, and its mission to showcase the incredible community of Salinas, California.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ted-black text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">TEDx Salinas</h1>
        </div>
        <div className="h-1 bg-ted-red mt-16" />
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-[800px] mx-auto px-6">
          {/* What is TEDx */}
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
              What is TEDx?
            </p>
            <h2 className="text-2xl font-bold text-ted-black mb-4">
              Ideas worth spreading, locally organized
            </h2>
            <p className="text-ted-gray leading-relaxed mb-4">
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. At a
              TEDx event, TED Talks video and live speakers combine to spark
              deep discussion and connection. These local, self-organized events
              are branded TEDx, where x = independently organized TED event.
            </p>
            <p className="text-ted-gray leading-relaxed">
              The TED Conference provides general guidance for the TEDx program,
              but individual TEDx events are self-organized, subject to certain
              rules and regulations.
            </p>
          </div>

          {/* About TEDx Salinas */}
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
              Our Mission
            </p>
            <h2 className="text-2xl font-bold text-ted-black mb-4">
              Salinas is more than its stereotype
            </h2>
            <p className="text-ted-gray leading-relaxed mb-4">
              Salinas is a place full of rich history, agriculture, literature,
              and incredible community members. What the rest of the world sees
              though, is its struggles with poverty, homelessness, and gang
              violence.
            </p>
            <p className="text-ted-gray leading-relaxed mb-4">
              TED and TEDx are known for their ability to bring together
              communities of incredible game changers and global thinkers, and
              this is something that Salinas truly needs to show the world that
              it is so much more than its negative stereotype.
            </p>
            <p className="text-ted-gray leading-relaxed">
              TEDx Salinas brought together 14 remarkable speakers from diverse
              backgrounds — academics, bestselling authors, entrepreneurs, and
              musicians — many from the local community, to share their ideas,
              stories, and visions for a better world.
            </p>
          </div>

          {/* Organizer */}
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
              Organizer
            </p>
            <h2 className="text-2xl font-bold text-ted-black mb-4">
              Michelle Serna
            </h2>
            <p className="text-ted-gray leading-relaxed mb-4">
              TEDx Salinas was organized by Michelle Nicole Serna, a speaker,
              activist, and organizer from Salinas. She gave her first TEDx talk
              at 16, her second at 17, and executive produced her first TEDx at
              18 — making TEDx Salinas one of the youngest-organized TEDx events
              in the country.
            </p>
            <p className="text-ted-gray leading-relaxed">
              Serna curated a diverse speaker lineup assembled to confound
              media-saturated expectations of what Salinas is about, with the
              theme connecting Silicon Valley innovation to Salinas Valley
              agriculture. As she put it: the millennial generation has a lot of
              complaints, but they are smart, driven individuals who can change
              their futures.
            </p>
          </div>

          {/* Press */}
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
              Press & Coverage
            </p>
            <h2 className="text-2xl font-bold text-ted-black mb-6">
              In the news
            </h2>
            <div className="space-y-4">
              <a
                href="https://www.montereycountyweekly.com/entertainment/art/a-young-local-dynamo-is-behind-the-new-tedx-salinas/article_5e453656-f94d-11e6-a345-db0c5543b58a.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-ted-border rounded-lg p-6 hover:border-ted-red/30 hover:bg-ted-light/50 transition-colors group"
              >
                <p className="text-xs text-ted-gray mb-2">
                  Monterey County Weekly &middot; February 23, 2017
                </p>
                <h3 className="text-lg font-semibold text-ted-black group-hover:text-ted-red transition-colors mb-2">
                  A young, local dynamo is behind the new TEDx Salinas
                </h3>
                <p className="text-sm text-ted-gray">
                  By Walter Ryce — A profile of 19-year-old organizer Michelle
                  Serna and how she brought the first-ever TEDx event to
                  Salinas.
                </p>
              </a>

              <a
                href="https://hackingtheredcircle.com/tedxsalinas-michelle-serna/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-ted-border rounded-lg p-6 hover:border-ted-red/30 hover:bg-ted-light/50 transition-colors group"
              >
                <p className="text-xs text-ted-gray mb-2">
                  Hacking the Red Circle Podcast
                </p>
                <h3 className="text-lg font-semibold text-ted-black group-hover:text-ted-red transition-colors mb-2">
                  TEDxSalinas — Michelle Serna
                </h3>
                <p className="text-sm text-ted-gray">
                  Interview with Michelle Serna about organizing TEDxSalinas and
                  the journey behind bringing TED to the Salinas community.
                </p>
              </a>

              <a
                href="https://www.ted.com/tedx/events/20649"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-ted-border rounded-lg p-6 hover:border-ted-red/30 hover:bg-ted-light/50 transition-colors group"
              >
                <p className="text-xs text-ted-gray mb-2">TED.com</p>
                <h3 className="text-lg font-semibold text-ted-black group-hover:text-ted-red transition-colors mb-2">
                  TEDxSalinas — Official Event Page
                </h3>
                <p className="text-sm text-ted-gray">
                  The official TED listing for TEDxSalinas with the full speaker
                  lineup and event details.
                </p>
              </a>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-ted-light rounded-lg p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
              Event Details
            </p>
            <h2 className="text-2xl font-bold text-ted-black mb-6">
              TEDx Salinas 2017
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-ted-black mb-1">
                  Date
                </p>
                <p className="text-ted-gray">February 25, 2017</p>
                <p className="text-ted-gray">10:00 AM &ndash; 6:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ted-black mb-1">
                  Venue
                </p>
                <p className="text-ted-gray">
                  Steinbeck Institute of Art &amp; Culture
                </p>
                <p className="text-ted-gray">Santa Lucia Ballroom</p>
                <p className="text-ted-gray">940 North Main Street</p>
                <p className="text-ted-gray">Salinas, CA 93906</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
