import React from "react";
import { Parallax } from "react-parallax";

const Home = () => {
  const Image1 =
    "https://media.istockphoto.com/photos/pit-on-highway-picture-id687095848?k=20&m=687095848&s=612x612&w=0&h=Ze_ni0s8ku-_022YqEl5KGDVmOaIfUBbx9H_ih52rCo=";
  const Image2 =
    "https://media.istockphoto.com/photos/country-highway-picture-id151939707?k=20&m=151939707&s=612x612&w=0&h=BDAgzHE_92a5jUBVWGuQaViGuqKg7DSPV6WMlStnhOw=";
  const Image3 =
    "https://media.istockphoto.com/photos/argentina-bariloche-picture-id947994474?k=20&m=947994474&s=612x612&w=0&h=-lxIbKUpss4ayKms6b49CUYgB63WQVFXdXMiUc8jYNE=";
  const Image4 =
    "https://media.istockphoto.com/photos/cracked-asphalt-picture-id499756819?k=20&m=499756819&s=612x612&w=0&h=C28FCL8IhA9dx3EV-hdCspxO5lAhhpQa48jVZsaR-H0=";

  const inlineStyle = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%,-50%)",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={Image1} strength={500}>
        <div style={{ height: 600 }}>
          <div style={inlineStyle}> Html is inside the parallax</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={Image3} blur={{ min: -1, max: 6 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}> God is good</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={Image4} strength={-200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}> God is good</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax
        bgImage={Image2}
        strength={200}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: `rgba(255,123,23, ${percentage * 1})`,
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${percentage * 5}) `,
            }}
          ></div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}> joy overflow</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Home;
