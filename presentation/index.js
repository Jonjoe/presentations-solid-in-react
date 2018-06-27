// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  Appear,
  CodePane
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* Intro */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            SOLID + React = 💯
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Building React components using SOLID patterns.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            What is SOLID?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <strong>S</strong>ingle Responsibility Principle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>O</strong>pen/Close Principle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>L</strong>iskcov Substitution Principle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>I</strong>nterface Seperation Principle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <strong>D</strong>ependancy Injection Principle
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Section 1 - SRP */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            What is SOLID?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <strong>S</strong>ingle Responsibility Principle
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Methods
          </Heading>
        </Slide>
        {/* ------------ Bad */}
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require("raw-loader!./code-examples/bad-s.example")}
          />
        </Slide>
        {/* ------------ Good */}
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require("raw-loader!./code-examples/good-s.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Components
          </Heading>
        </Slide>
        {/* ------------ Bad */}
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require("raw-loader!./code-examples/bad-s.1.example")}
          />
        </Slide>
        {/* Section 2 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            What is SOLID?
          </Heading>
          <List>
            <ListItem>
              <strong>S</strong>ingle Responsibility Principle
            </ListItem>
            <Appear>
              <ListItem>
                <strong>O</strong>pen/Close Principle
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* ------------ Bad */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={4} textColor="secondary">
            A Very Bad Example!
          </Heading>

          <Appear>
            <CodePane
              lang="js"
              source={require("raw-loader!./code-examples/bad-s.example")}
            />
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!./code-examples/bad-s.example")}
          ranges={[
            { loc: [0, 1], title: "Bad Example" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] }
            // ...
          ]}
        />
        {/* ------------ Good */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={4} textColor="secondary">
            A Very Good Example!
          </Heading>

          <Appear>
            <CodePane
              lang="js"
              source={require("raw-loader!./code-examples/bad-s.example")}
            />
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!./code-examples/bad-s.example")}
          ranges={[
            { loc: [0, 1], title: "Bad Example" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] }
            // ...
          ]}
        />
      </Deck>
    );
  }
}
