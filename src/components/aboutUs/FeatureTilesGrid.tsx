import Image from "next/image"

export default function FeatureGrid() {
  return (
    <div className="bg-black p-4 md:p-8 w-full">
      <div className="flex flex-wrap gap-x-4  justify-center max-w-[1280px] mx-auto">
        {/* Tile 1 */}
        <div className="rounded-lg overflow-hidden relative mb-4 ">
          <Image src="/FeatureTile1.png" alt="App background" width={351} height={351} className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-7xl font-[700] text-black"
              style={{fontFamily: "Inter"}}>1</h2>
              <p className="text-black text-xl font-[400]"
              style={{fontFamily: "Inter"}}>App</p>
            </div>
            <div className="absolute bottom-2 right-15">
              <Image src="/featureTileArrow.png" alt="Arrow" width={40} height={41} />
            </div>
          </div>
        </div>

        {/* Tile 2 */}
        <div className="rounded-lg overflow-hidden relative mb-4" style={{ height: '351px', width: '486px' }}>
  <Image
    src="/FeatureTile2.png"
    alt="Mobile app development"
    fill
    className="fill"
  />
</div>


        {/* Tile 3 */}
        <div className="rounded-lg overflow-hidden relative mb-4 ">
          <Image src="/FeatureTile1.png" alt="Industries background" width={351} height={350} className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
            <h2 className="text-7xl font-[700] text-black"
              style={{fontFamily: "Inter"}}>2</h2>
              <p className="text-black text-xl font-[400]"
              style={{fontFamily: "Inter"}}>Industries<br />Served</p>
            </div>
            <div className="absolute bottom-2 right-15">
              <Image src="/featureTileArrow.png" alt="Arrow" width={40} height={41} />
            </div>
          </div>
        </div>

        {/* Tile 4 */}
        <div className="rounded-lg overflow-hidden relative mb-4 ">
          <Image src="/FeatureTile3.png" alt="Build something background" width={351} height={347} className="object-cover" />
          <div className="absolute inset-0 p-6 flex items-center justify-center">
            <p className="text-black text-xl font-[400] text-center"
            style={{fontFamily: "Inter"}}>
              Let's build<br />something<br />amazing<br />together.
            </p>
          </div>
        </div>

        {/* Tile 5 */}
        <div className="rounded-lg overflow-hidden relative mb-4 ">
          <Image src="/FeatureTile1.png" alt="Customers background" width={351} height={350} className="object-cover" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div>
            <h2 className="text-7xl font-[700] text-black"
              style={{fontFamily: "Inter"}}>50</h2>
              <p className="text-black text-xl font-[400]"
              style={{fontFamily: "Inter"}}>Satisfied<br />Customers</p>
            </div>
            <div className="absolute bottom-2 right-15">
              <Image src="/featureTileArrow.png" alt="Arrow" width={40} height={41} />
            </div>
          </div>
        </div>

        {/* Tile 6 */}
        <div className="rounded-lg overflow-hidden relative mb-4" style={{ height: '351px', width: '486px' }}>
  <Image
    src="/FeatureTile4.png"
    alt="Mobile app development"
    fill
    className="fill"
  />
</div>

      </div>
    </div>
  )
}
