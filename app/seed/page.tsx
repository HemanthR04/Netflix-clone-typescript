import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.movie.createMany({
      data: [
        {
          id: 11,
          title: "Sapta Sagaradaache Ello - Side A",
          age: 12,
          duration: 2.28,
          imageString:
            "https://res.cloudinary.com/dhoy0bkl7/image/upload/v1703662901/iamges/MV5BM2E2ODFhYjgtN2QzYy00ZjlkLTgzZjgtNDkwODA2YWEwMDc3XkEyXkFqcGdeQXVyMTU0MDA4MDkz._V1__of1rqx.jpg",
          overview:
            "Manu and Priya's ardent love story unfolds, delving into the depths of their emotions. Manu goes to great lengths to fulfill his promise and their love faces a profound transformation when destiny triggers an unexpected turn.",
          release: 2023,
          videoSource: "https://res.cloudinary.com/dhoy0bkl7/video/upload/v1703660863/videos/Sapta_Sagaradaache_Ello_Side_A_-_Official_Trailer___Rakshit_Shetty___Rukmini___Hemanth_M_Rao_wcggch.mp4",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/hcJ1ZHHahMA?si=pV71t_O9MPxh9EjQ",
        },
      ],
    });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}