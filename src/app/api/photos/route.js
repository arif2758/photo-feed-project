import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";


const getModifiedPhotos = () => {
    const allPhotos = getAllPhotos();
    return allPhotos.map(photo => ({
      id: photo.id,
      title: photo.title,
      url: photo.url
    }));
  };

export async function GET() {
  const data = await getModifiedPhotos();
  return NextResponse.json(data);
}
