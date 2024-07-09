import books from "@/utils/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
const Home = () => {
  return (
    <div>
      <div className=" max-h-[20rem] lg:max-h-[34rem] max-w-screen flex items-center justify-center overflow-hidden m-3">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="w-full h-full ">
            {books.map((data) => (
              <CarouselItem
                key={data.id}
                className=" min-h-[80%] flex items-center justify-center"
              >
                <Card className="">
                  <CardContent className="w-full h-full flex items-center justify-center">
                    <img src={data.url} className="object-cover" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <div
          className=" bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg 
        bg-opacity-20 border border-gray-100  p-8 lg:text-3xl text-red-500 italic text-2xl mt-5 font-rubik flex items-center justify-center"
        >
          Featured Books
        </div>

        <FeaturedBooks />
      </div>
    </div>
  );
};

export default Home;
