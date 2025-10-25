interface SpotifyEmbedProps {
    type: 'track' | 'playlist' | 'album';
    id: string;
  }
  
  export default function SpotifyEmbed({ type, id }: SpotifyEmbedProps) {
    return (
      <div className="rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 p-4">
        <iframe
          className="rounded-xl"
          src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    );
  }