import { Flex, IconButton } from "vcc-ui";
import { SliderRef } from "../types";

export default function CarouselNavigation ({sliderRef} : SliderRef) {
    return (
        <div id="">
        <Flex
        className="navigationButtons"
      >
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Next slide"
            iconName="navigation-chevronback"
            onClick={() => sliderRef.current?.slickPrev()}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <IconButton
            variant="outline"
            aria-label="Previous slide"
            iconName="navigation-chevronforward"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
        </Flex>
        </div>
    )
}