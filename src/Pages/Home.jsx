import books from "@/utils/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import {Card,CardContent} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay";
const Home = () => {
  return (
   
<div className=" max-h-[20rem] lg:max-h-[34rem] max-w-screen flex items-center justify-center overflow-hidden m-3">
      <Carousel plugins={[Autoplay({ delay: 2500 })]} className="w-full h-full">
        <CarouselContent className="w-full h-full ">
          {
            books.map((data) => (
              <CarouselItem
                key={data.id}
                className=" min-h-[80%] flex items-center justify-center"
              >
                <Card className="">
                  <CardContent className="w-full h-full flex items-center justify-center">
                    <img
                      src={data.url}
                     
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
           }
        </CarouselContent>
      </Carousel>
    </div>
 
     
   
  );
};

export default Home;
