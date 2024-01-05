import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div>
        <Image
          src="https://www.mappr.co/wp-content/uploads/2022/09/world-map-2022.jpg"
          layout="fill"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrapi">
          <div>
            <h1 className=" text-black text-6xl absolute w-full h-full">
              Capital quiz
            </h1>
          </div>
          <div>
            <input className="flex w-1/6 h-8 absolute justify-center items-center"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
