import Hero from "@/components/Hero";
import SpeakerCard from "@/components/SpeakerCard";
import { speakers, eventInfo } from "@/lib/speakers";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-4">
              About the Event
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ted-black mb-6">
              The Salinas Valley
            </h2>
            <p className="text-lg text-ted-gray leading-relaxed">
              {eventInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="bg-ted-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-2">
                TEDx Salinas 2017
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ted-black">
                Speakers
              </h2>
            </div>
            <Link
              href="/speakers"
              className="text-sm font-semibold text-ted-black hover:text-ted-red transition-colors underline underline-offset-4"
            >
              View all speakers
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <Link key={speaker.id} href={`/speakers/${speaker.id}`}>
                <SpeakerCard speaker={speaker} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info Banner */}
      <section className="bg-ted-black text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-2">
                Event Details
              </p>
              <h2 className="text-2xl font-bold mb-2">{eventInfo.venue}</h2>
              <p className="text-white/60">{eventInfo.address}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-2xl font-bold">{eventInfo.date}</p>
              <p className="text-white/60 text-sm mt-1">10:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
