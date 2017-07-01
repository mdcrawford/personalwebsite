import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import boozyMike from "./assets/boozymike.jpg";
import computerMike from "./assets/computermike.jpg";
import thinkingMike from "./assets/thinkingmike.jpg";

export default class AboutMeCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Image
            width={"100%"}
            height={100}
            alt="thinkingMike"
            src={thinkingMike}
          />
          <Carousel.Caption>
            <h3>Thinking</h3>
            <p>
              I'm a reflective person at heart. Whether it's my own life or
              outside challenges, I've come to love the process of taking a
              problem, breaking it down, solving it, and (most importantly)
              reflecting on what I learned from that process.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            width={"100%"}
            height={100}
            alt="computerMike"
            src={computerMike}
          />
          <Carousel.Caption>
            <h3>Learning</h3>
            <p>
              I'm the mind of an engineer trapped in a humanities-loving soul.
              My academic interests led me to investigate English literature,
              abstract Mathematics, and a healthy dose of Computer Science on
              the side. It's plenty of work, but the rewards have been
              bountiful.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image width={"100%"} height={100} alt="boozyMike" src={boozyMike} />
          <Carousel.Caption>
            <h3>Living</h3>
            <p>
              I'm only human after all. Beyond my programming life, I also enjoy
              reading classic literature, hosting my own radio show at WXTJ, and
              waiting for that next Zelda game.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
