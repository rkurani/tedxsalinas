import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - TEDx Salinas",
  description:
    "Learn about TEDx Salinas and its mission to showcase the incredible community of Salinas, California.",
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
              TEDx Salinas brought together six remarkable speakers from diverse
              backgrounds to share their ideas, stories, and visions for a
              better world.
            </p>
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
                <p className="text-ted-gray">10:00 AM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ted-black mb-1">
                  Venue
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
