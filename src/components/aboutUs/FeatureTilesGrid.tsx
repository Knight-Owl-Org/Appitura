import Image from "next/image"

export default function FeatureGrid() {
  return (
    <div className="bg-black p-4 md:p-8 w-full">
      <div className="flex flex-wrap gap-x-4 justify-center max-w-[1280px] mx-auto">
        {/* Tile 1 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[260px] md:w-[260px] lg:w-[260px] xl:w-[320px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
          <Image src="/FeatureTile1.png" alt="App background" fill className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-[700] text-black" style={{ fontFamily: "Inter" }}>1</h2>
              <p className="text-black text-lg md:text-xl font-[400]" style={{ fontFamily: "Inter" }}>App</p>
            </div>
            <div className="absolute bottom-2 right-4">
              <Image src="/featureTileArrow.png" alt="Arrow" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Tile 2 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[320px] md:w-[300px] lg:w-[300px] xl:w-[400px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
          <Image src="/FeatureTile2.png" alt="Mobile app development" fill className="object-cover" />
        </div>

        {/* Tile 3 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[260px] md:w-[260px] lg:w-[260px] xl:w-[320px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
          <Image src="/FeatureTile1.png" alt="Industries background" fill className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-[700] text-black" style={{ fontFamily: "Inter" }}>2</h2>
              <p className="text-black text-lg md:text-xl font-[400] text-center" style={{ fontFamily: "Inter" }}>Industries<br />Served</p>
            </div>
            <div className="absolute bottom-2 right-4">
              <Image src="/featureTileArrow.png" alt="Arrow" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Tile 4 */}
<div className="rounded-lg overflow-hidden relative mb-4 w-[260px] md:w-[260px] lg:w-[260px] xl:w-[320px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
  <Image src="/FeatureTile3.png" alt="Build something background" fill className="object-cover" />
  <div className="absolute inset-0 p-6 flex items-center justify-start">
    <p
      className="text-black text-lg md:text-xl font-[400] text-start"
      style={{ fontFamily: "Inter", marginLeft: "35px" }}
    >
      Let's build<br />something<br />amazing<br />together.
    </p>
  </div>
</div>


        {/* Tile 5 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[260px] md:w-[260px] lg:w-[260px] xl:w-[320px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
          <Image src="/FeatureTile1.png" alt="Customers background" fill className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-[700] text-black" style={{ fontFamily: "Inter" }}>50</h2>
              <p className="text-black text-lg md:text-xl font-[400] text-center" style={{ fontFamily: "Inter" }}>Satisfied<br />Customers</p>
            </div>
            <div className="absolute bottom-2 right-4">
              <Image src="/featureTileArrow.png" alt="Arrow" width={30} height={30} />
            </div>
          </div>
        </div>

        {/* Tile 6 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[320px] md:w-[300px] lg:w-[300px] xl:w-[400px] h-[260px] md:h-[260px] lg:h-[260px] xl:h-[320px]">
          <Image src="/FeatureTile4.png" alt="Mobile app development" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
