"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface Props {
  open: boolean;
  close: () => void;
  index: number;
  slides: any[];
}

export default function GalleryLightbox({
  open,
  close,
  index,
  slides,
}: Props) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Zoom, Captions]}
    />
  );
}