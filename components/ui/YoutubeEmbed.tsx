interface YouTubeEmbedProps {
    videoId: string;
    title: string;
    description: string;
  }
  
  export default function YouTubeEmbed({ videoId, title, description }: YouTubeEmbedProps) {
    return (
      <div className="rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    );
  }