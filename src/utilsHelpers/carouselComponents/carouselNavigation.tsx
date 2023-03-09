import { Flex, IconButton } from "vcc-ui";

export default function CarouselNavigation ({sliderRef}) {
    return (
        <Flex
        extend={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "end",
          padding: "25px",
        }}
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
    )
}