import { Carousel } from "@material-tailwind/react";
 
export default function ImageCarousel() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t39.30808-6/290180178_114181514659567_6038146120769084684_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFa8aRErF2HUngUnJv0WTZkoWoBYclyq_6hagFhyXKr_kgeaQ5l55amqIrUzdjg0EGOdWHx00Pv34aX-Ct3Rj7P&_nc_ohc=NOkcjnR1vtwAX9rCFff&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi2-1.fna&oh=00_AfByQQQvI4_caPIn-ZM6_6Uv-b_uYU0P0H7sz0GRbnu1cw&oe=648B9966"
        alt="image 1"
        className="h-full w-full object-cover"
        style={{
          height:550
        }}
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}