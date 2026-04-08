import SpeakerCard from "@/components/SpeakerCard";
import { speakers } from "@/lib/speakers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers - TEDx Salinas",
  description: "Meet the speakers from TEDx Salinas 2017.",
};

export default function SpeakersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ted-black text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
            TEDx Salinas 2017
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Speakers</h1>
        </div>
        <div className="h-1 bg-ted-red mt-16" />
      </section>

      {/* Speaker Cards */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <div key={speaker.id}>
                <SpeakerCard speaker={speaker} />
                <p className="text-sm text-ted-gray leading-relaxed mt-3">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
