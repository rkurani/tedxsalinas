import { speakers, getSpeakerById } from "@/lib/speakers";
import SpeakerCard from "@/components/SpeakerCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return speakers.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const speaker = getSpeakerById(id);
  if (!speaker) return {};

  return {
    title: `${speaker.name} — ${speaker.talkTitle}`,
    description: speaker.bio,
    openGraph: {
      type: "article",
      title: `${speaker.name} | TEDx Salinas`,
      description: speaker.bio,
    },
    twitter: {
      card: "summary_large_image",
      title: `${speaker.name} | TEDx Salinas`,
      description: speaker.bio,
    },
  };
}

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const speaker = getSpeakerById(id);
  if (!speaker) notFound();

  const otherSpeakers = speakers
    .filter((s) => s.id !== speaker.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${speaker.talkTitle} — ${speaker.name} | TEDx Salinas`,
    description: speaker.bio,
    startDate: "2017-02-25T10:00:00-08:00",
    endDate: "2017-02-25T18:00:00-08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Santa Lucia Ballroom, Steinbeck Institute of Art & Culture",
      address: {
        "@type": "PostalAddress",
        streetAddress: "940 North Main Street",
        addressLocality: "Salinas",
        addressRegion: "CA",
        postalCode: "93906",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "TEDx Salinas",
      url: "https://tedxsalinas.com",
    },
    performer: {
      "@type": "Person",
      name: speaker.name,
      jobTitle: speaker.title,
      description: speaker.bio,
    },
    recordedIn: {
      "@type": "VideoObject",
      name: speaker.talkTitle,
      description: speaker.bio,
      thumbnailUrl: `https://img.youtube.com/vi/${speaker.videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${speaker.videoId}`,
      uploadDate: "2017-02-25",
      contentUrl: speaker.youtubeUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-ted-black text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/speakers" className="hover:text-white transition-colors">
              Speakers
            </Link>
            <span>/</span>
            <span className="text-white/80">{speaker.name}</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
            TEDx Salinas 2017
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {speaker.name}
          </h1>
          <p className="text-lg text-white/60">{speaker.title}</p>
        </div>
        <div className="h-1 bg-ted-red mt-16" />
      </section>

      {/* Talk + Bio */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Video embed */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-ted-dark rounded-lg overflow-hidden mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${speaker.videoId}?rel=0`}
                  title={speaker.talkTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-ted-black mb-2">
                {speaker.talkTitle}
              </h2>
              <div className="flex items-center gap-3 text-sm text-ted-gray">
                <span>{speaker.name}</span>
                <span>&middot;</span>
                <span>TEDx Salinas</span>
                <span>&middot;</span>
                <span>February 2017</span>
                {speaker.views && (
                  <>
                    <span>&middot;</span>
                    <span>{speaker.views} views</span>
                  </>
                )}
              </div>
            </div>

            {/* Bio sidebar */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-3">
                About the Speaker
              </p>
              <p className="text-ted-gray leading-relaxed mb-6">
                {speaker.bio}
              </p>

              <a
                href={speaker.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ted-red-dark text-white text-sm font-medium px-4 py-3 rounded hover:bg-ted-red transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch on YouTube
              </a>

              <div className="mt-8 pt-8 border-t border-ted-border">
                <p className="text-xs font-semibold uppercase tracking-wide text-ted-gray mb-3">
                  Event
                </p>
                <p className="text-sm text-ted-black font-medium">
                  TEDx Salinas 2017
                </p>
                <p className="text-sm text-ted-gray">February 25, 2017</p>
                <p className="text-sm text-ted-gray">
                  Santa Lucia Ballroom, Salinas CA
                </p>
                <a
                  href="https://www.ted.com/tedx/events/20649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-ted-red hover:underline"
                >
                  View on TED.com &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Speakers */}
      <section className="bg-ted-light py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-ted-black">
              More speakers
            </h2>
            <Link
              href="/speakers"
              className="text-sm font-semibold text-ted-black hover:text-ted-red transition-colors underline underline-offset-4"
            >
              View all speakers
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSpeakers.map((s) => (
              <Link key={s.id} href={`/speakers/${s.id}`}>
                <SpeakerCard speaker={s} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
