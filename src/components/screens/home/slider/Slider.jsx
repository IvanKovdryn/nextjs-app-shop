import { slides } from "./Slides";
import styles from "../Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "@/store/slices/sliderSlice";

export function Slider() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.slider.count);
  return (
    <div className={`${styles.sliderwrapper} relative h-full`}>
      <div
        style={{
          transform:
            count === 1
              ? "translateX(0)"
              : count === 2
              ? "translateX(-33.333%)"
              : "translateX(-66.666%)",
        }}
        className={`${styles.slider} absolute left-0 transition-all flex items-center w-[300%]`}
      >
        {slides &&
          slides.map((slide) => (
            <div
              key={slide.id}
              id={slide.id}
              className={`${
                count === slide.id ? styles.active : ""
              } flex flex-col top-0 w-full h-full gap-10 pt-[150px] px-[10px] items-center`}
            >
              {slide.html}
            </div>
          ))}
      </div>
      <div
        className={`${styles.buttons} flex gap-2 items-center justify-center mt-10`}
      >
        {slides &&
          slides.map((slide) => (
            <button
              key={slide.id}
              onClick={(e) => {
                dispatch(changeCount(+e.target.id));
              }}
              id={slide.id}
              className="flex h-4 items-center justify-center transition-all"
            >
              <span
                style={{
                  background:
                    count === slide.id ? "rgb(17 24 39)" : "rgb(209 213 219)",
                }}
                className="w-8 h-1 pointer-events-none rounded-sm bg-gray-300"
              ></span>
            </button>
          ))}
      </div>
    </div>
  );
}
