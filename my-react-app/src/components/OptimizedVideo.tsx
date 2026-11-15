interface VideoProps {
  poster: string; // The static thumbnail
  src: string;
  title: string;
}

export default function OptimizedVideo({ poster, src, title }: VideoProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-black">
      <video
        controls
        preload="none" // Don't download until clicked
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="absolute bottom-2 left-2 text-white bg-black/50 p-1 rounded">
        {title}
      </p>
    </div>
  );
}