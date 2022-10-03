import React from "react";
import PropTypes from "prop-types";
import Typed from "react-typed";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType, HeadingType, ButtonType } from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <section
            id={id}
            className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-inner">
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail gradient-border gradient-animation">
                                    <Image
                                        src={data.images[0].src}
                                        alt={
                                            data.images[0]?.alt ||
                                            "Al-Amin Bali"
                                        }
                                        id="border"
                                        className="gradient-border"
                                    />
                                </div>
                            )}

                            {data?.headings?.[0] && (
                                <h1>{data.headings[0]?.content}</h1>
                            )}

                            <span className="cd-headline clip is-full-width">
                                {data?.headings?.[1] && (
                                    <span>{data.headings[1]?.content}</span>
                                )}{" "}
                                {data?.animated_texts && (
                                    <Typed
                                        className="animated-text"
                                        strings={data.animated_texts}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        backDelay={1}
                                        loop
                                        smartBackspace
                                    />
                                )}
                            </span>

                            <div className="button-area">
                                {data?.buttons?.map(({ id, path, content }) => (
                                    <Button key={id} path={path}>
                                        <span>{content}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
