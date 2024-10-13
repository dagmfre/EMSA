import { ReactPhotoCollage } from "react-photo-collage";

export function PhotoCollage({ images }) {
  const setting = {
    width: "100%",
    height: ["150px", "100px"],
    layout: [1, 2],
    photos: images.map((image) => ({ source: image.url })),
    showNumOfRemainingPhotos: true,
  };
  return <ReactPhotoCollage {...setting} />;
}
