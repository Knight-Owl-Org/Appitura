import Image from "next/image"

export default function FeatureGrid() {
  return (
    <div className="bg-black p-4 md:p-8 w-full">
      <div className="flex flex-wrap gap-x-4 justify-center max-w-[1280px] mx-auto">
        {/* Tile 1 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[220px] md:w-[240px] lg:w-[240px] xl:w-[320px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
          <Image src="/FeatureTile1.png" alt="App background" fill className="object-cover" />
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-[700] text-black" style={{ fontFamily: "Inter" }}>1</h2>
              <p className="text-black text-md md:text-sm lg:text-lg font-[400]" style={{ fontFamily: "Inter" }}>App</p>
            </div>
            <div className="absolute bottom-2 right-4">
              <Image src="/featureTileArrow.png" alt="Arrow" width={25} height={25} />
            </div>
          </div>
        </div>

        {/* Tile 2 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[280px] md:w-[280px] lg:w-[280px] xl:w-[400px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
          <Image src="/FeatureTile2.png" alt="Mobile app development" fill className="object-cover" />
        </div>

        {/* Tile 3 */}
<div className="rounded-lg overflow-hidden relative mb-4 w-[220px] md:w-[240px] lg:w-[240px] xl:w-[320px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
  <Image src="/FeatureTile1.png" alt="Industries background" fill className="object-cover" />
  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
    <h2 className="text-5xl md:text-6xl font-[700] text-black" style={{ fontFamily: "Inter" }}>
      1
    </h2>
    <p className="text-black text-md md:text-sm lg:text-lg font-[400]" style={{ fontFamily: "Inter" }}>
      Industries<br />Served
    </p>
    <div className="absolute bottom-2 right-4">
      <Image src="/featureTileArrow.png" alt="Arrow" width={25} height={25} />
    </div>
  </div>
</div>


        {/* Tile 4 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[220px] md:w-[240px] lg:w-[240px] xl:w-[320px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
          <Image src="/FeatureTile3.png" alt="Build something background" fill className="object-cover" />
          <div className="absolute inset-0 p-4 flex items-center justify-start">
            <p
              className="text-black text-md md:text-sm lg:text-lg font-[400] text-start"
              style={{ fontFamily: "Inter", marginLeft: "25px" }}
            >
              Let's build<br />something<br />amazing<br />together.
            </p>
          </div>
        </div>

        {/* Tile 5 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[220px] md:w-[240px] lg:w-[240px] xl:w-[320px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
          <Image src="/FeatureTile1.png" alt="Customers background" fill className="object-cover" />
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-[700] text-black" style={{ fontFamily: "Inter" }}>10</h2>
              <p className="text-black text-md md:text-sm lg:text-lg font-[400] text-center" style={{ fontFamily: "Inter" }}>Satisfied<br />Customers</p>
            </div>
            <div className="absolute bottom-2 right-4">
              <Image src="/featureTileArrow.png" alt="Arrow" width={25} height={25} />
            </div>
          </div>
        </div>

        {/* Tile 6 */}
        <div className="rounded-lg overflow-hidden relative mb-4 w-[280px] md:w-[280px] lg:w-[280px] xl:w-[400px] h-[220px] md:h-[240px] lg:h-[240px] xl:h-[320px]">
          <Image src="/FeatureTile4.png" alt="Mobile app development" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
