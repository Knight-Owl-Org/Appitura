
export default function VideoSection() {
    return (
      <section className="relative h-[781px] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    );
  }
  