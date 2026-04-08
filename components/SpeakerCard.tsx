import type { Speaker } from "@/lib/speakers";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${speaker.videoId}/hqdefault.jpg`;

  return (
    <div className="group">
      {/* Thumbnail */}
      <a
        href={speaker.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video bg-ted-dark rounded overflow-hidden mb-4 relative"
      >
        <img
          src={thumbnailUrl}
          alt={speaker.talkTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
          <svg
            className="w-14 h-14 text-white opacity-0 group-hover:opacity-90 transition-opacity drop-shadow-lg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Views badge */}
        {speaker.views && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
            {speaker.views} views
          </span>
        )}
      </a>

      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wide text-ted-red mb-1">
        Speaker
      </p>

      {/* Talk title */}
      <h3 className="text-base font-semibold text-ted-black mb-1 group-hover:underline">
        <a href={speaker.youtubeUrl} target="_blank" rel="noopener noreferrer">
          {speaker.talkTitle}
        </a>
      </h3>

      {/* Speaker name + title */}
      <p className="text-sm text-ted-gray">
        {speaker.name} &middot; {speaker.title}
      </p>
    </div>
  );
}
