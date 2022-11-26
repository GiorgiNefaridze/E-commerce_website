import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useGetCoverImages } from "../../hooks/useGetCoverImages";

import Loader from "../Loader/Loader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CoverWrapper } from "./Cover.style";

const Cover: React.FC = () => {
  const { getCoverImages, loading, data } = useGetCoverImages();

  useEffect(() => {
    (async () => {
      await getCoverImages();
    })();
  }, []);

  return (
    <CoverWrapper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {loading && <Loader />}
      {!loading &&
        data?.map((image) => {
          const { _id, img } = image;
          return (
            <SwiperSlide key={_id}>
              <img src={img} />
            </SwiperSlide>
          );
        })}
    </CoverWrapper>
  );
};

export default Cover;
