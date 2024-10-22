declare module "react-slick" {
  import React from "react";

  interface SliderMethods {
    slickNext: () => void;
    slickPrev: () => void;
    slickGoTo: (slide: number) => void;
  }

  interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    lazyLoad?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    beforeChange?: (current: number, next: number) => void;
    afterChange?: (current: number) => void;
    [key: string]: any;
  }

  export default class Slider extends React.Component<SliderProps> {
    slickNext: () => void;
    slickPrev: () => void;
    slickGoTo: (slide: number) => void;
  }
}
