import { useState } from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";

const CardsDiv = styled.div`
  display: grid;
  place-items: center;

  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  grid-gap: 1rem;

  place-items: end;

  // Found this very late on how to put the cards halfway through the back ground image, but couldnt get it to work in time
  // transform : translate(0, 50%)

  .card {
    padding: 0.5rem;

    border-radius: 10px;

    width: -webkit-fill-available;
  }

  .show {
    position: relative;
    background-color: limegreen;
  }

  .link {
    cursor: pointer;
    justify-self: center;
  }

  .no-show {
    text-align: center;

    font-weight: bold;

    position: relative;
    background-color: #0047ab;
  }

  .no-show img {
    width: inherit;
    border-radius: 10px;
  }

  .close {
    position: absolute;

    color: white;

    cursor: pointer;

    top: 1px;
    right: 1px;

    justify-self: end;
    border-radius: 50%;
    border: solid 1px white;
    background-color: limegreen;

    width: 20px;
    height: 20px;

    font-size: 1.5rem;

    display: grid;
    place-content: center;
  }

  .open {
    position: absolute;

    color: white;

    cursor: pointer;

    right: 50%;

    justify-self: end;
    border-radius: 50%;
    border: solid 1px white;
    background-color: dodgerblue;

    width: 20px;
    height: 20px;

    font-size: 1.5rem;

    display: grid;
    place-content: center;
  }
`;

const cards = [
  {
    id: 1,
    name: "HEALTHCARE MANAGEMENT",
    image:
      "data:image/png;base64,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",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
  {
    id: 2,
    name: "PSYCHOLOGY",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
  {
    id: 3,
    name: "DATA SCIENCE/ CRIME ANALYSIS",
    image:
      "data:image/png;base64,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",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
  {
    id: 4,
    name: "NETWORK AND CYBER SECURITY",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHrQmiDU5mvfhO8Vd4QYWvBrnsdF34bVVUQ&usqp=CAU",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
  {
    id: 5,
    name: "ACCOUNTING AND BUSINESS",
    image:
      "data:image/png;base64,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",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
  {
    id: 6,
    name: "SEE ALL PROGRAMS",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///9AQEI7Oz01NTf6+vosLC/X19ltbW86Ojqnp6c2NjY+Pj+mpqZsbGz5+fnY2Nd0dHTz8/MvLy8oKCtWVlitra5QUFLS0tKgoKBlZWUbGxtFRUcnJye1tbVSUlRLS03g4ODr6+yKioojIyNeXmB9fX4wMDPJycqJiYsbGx8kJCMaGhoKCg8REREPDxRhYWB0oJuKAAAGMElEQVR4nO2ca1+jOBSHuc5QwqWUFEQQWntRd3bX7//t9pyAtfUy6HYoQf+PLxpifjZPA+ckDWgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgkkWGsfwzLWr3LeOTSHRqZjym43Fjm0IjNcjzBVSUGFyTFajWa4c67gKBpervRDMtLDCENYjmWoGNfRNA0bWdsQ3ugMGrrYrgPBsqFwV4PQ/t2sHe4tfUwHC5fLTUxnFE5co5R86zotO6z8N+YaWRY+N4Rm5iq/vLOwS80Mww9cUTFhpU4By/UzfBkguqyYXpWDrRgCEMYftawWPhHXLPhtX8OC91i6U0QzJ4Igqs1VV0913yeILjRzHAYYDg038vw9ucx2xVVbVWx4OvpNlRlXoTcFFQIw4I6vSpU9eOhcfiysU6GhW0doealG1XcB1QMfY+KNieApUslz1tQp+OKa63q0NhbcON521i3WPpuPrRVp71DilMLIiF8NlyI08bCn502/oKGLxrDcIKG0zpL20jj9kaaQ1jyphZpvli2eMPwDwDDofn2hleBgjc4b9oiX2V5Wwyo0+u2RbvU4gXTU+PZU2PNDdsVcKVi6eKwqF1WbTXH0s3zcvlXW3t12lhzw3fy4f7Q6Vf58FXjaRra38+w+uqGdZY7UzVU3853neZiZ9hWd4ZlIf3ciMjwrcaaG27UDsuim5fyZosyXLTVkZqXeo9lk8VJdNx47uu5M/PasN1di7h3znExet5/cxJnHSVJxLxsrNvuGhuWp4YfITJIL6Gft3+tmWEjs08b8kiTX/SOgmaGtSmtY0N1s0Ec85xsFbcHRnenXxzHDo1cHv/I6YhO0zcar7QztFpDleJSdvnbdd2quuaJWLGp3DTdPHKnH1T1hkbu7p+Kbym5zlXjNO0ah5uUqtNHzQx3ss5MSdeilKUprDxKDJd+J2XWfjEhpWzqHQUYzocNHdCpmXNjkZWx4TiNrLlWxdJMylq3bOHQGG7JUJTSajIrEzldWntTbIXpX1H35lKYVmaHhjIspSeyJHHyhdlkQvqxkTiU8RshfL6tg++Wo7+jl2Hk7DJ1HUqxbWjkFjGFfEvUZl03AQ3cTshMWvWcVMhQ0pFHESYus8xUhlFEYUps65I+Dies5dbSy3BpJMacfajrZSPMpilzMnTpKBP+jDLbzqvpbKxDZSikWQs/4jEUrSF9Bntu7GVsOG+ktS21MpyRYXgwpNOtLHOK/67y9QJlSGfvk6HZGkZkKJuGDHM2tFpDuiR37bWsk+GSz1KrlGXdGtLI5ZQA/k1Lt1lcX5HhvCpTyy4fyTB42Dd7oWJp/qu0rbTc8IA/pM3erARftI+lt+dY2oUlXQzDrLYorihDId2c0h3ltPxHnK9INr5TByvSUvkwj3OVD3POh/markkq5VS7iowo5lo6StbaGFI+oIsn41OLzy+ioWHhiQpPMTmfRzQeDiUQmoNSlZpyqgkqlyL16vCroaZvfOw4RpIkOhkaYVmqCU07N02V4ZMGmxo8z+beG4cpmhN1E21V3b12k3MuJ/qcpe+sLZzuzr22GB2E1BB19/bxkkJVR8ct1NKCi7pEmnPWh3ybX37aeDrrw4+s8ZlF+5XHBNf4+K4NhjC8sOG7d+693LeYvb1vca39vkW3u9TxdOfeW3tPV2/vPQU67z19/acRgsHeIdDD0KqH6oBTW1oY0mzk5zCI7um/0Q1pGIfh6c+PZzj8Q8DdBziWoSEvo2jJsQRpJXSRJ50XIz7MXV/iUWd/vCE0jKRIBwoyz6RFMqKhY9zdhwOlio77uxH92PDrvAv4xuS/f/opGPU/l/wRbk+Wxq8fURvuUfdLUfx+3mMVY3fwbPpmPWLsDp7Luu9J0nQ9dhfPJHd7DN2ph5ql3WM44Lc8l+G+b4Fl3Y/dxTPZ9hpux+7imfSvka2xu3ge675AQ6Fm2sE03/ca7qcdTHtD6eSDaW8onXwwLfq/qhLTnZk6N8tlrx+zXN5McxlfuPv+q5Cx9+40x/HhQ3otD2N39n9xu/nwP9fbTHQdvPrwP9dbjd1VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzxHyz1q9u8SqsDAAAAAElFTkSuQmCC",
    description:
      "Sit lorem ipsum dolor amet consecur adipisi  Eiusmod me erat voluat Ut wisi enip uistis lorem",
  },
];

export default function Cards() {
  const [showDescription, setShowDescription] = useState(["PSYCHOLOGY"]);

  const handleClose = name => {
    // Remove the selected degree to now show description from the array
    setShowDescription(showDescription.filter(item => item !== name));
  };

  const handleOpen = name => {
    // Add the selected degree to show description by addint it to the arrray without deleting anything inside it previously
    setShowDescription([...showDescription, name]);
  };

  return (
    <CardsDiv>
      {cards.map(card => (
        <>
          {showDescription.includes(card.name) ? (
            <div className="show card" key={card.id}>
              <button
                className="close"
                onClick={e => {
                  handleClose(card.name);
                }}
              >
                &times;
              </button>
              <p>{card.name}</p>
              <p>{card.description}</p>
              <p className="link">
                CTA TO PAGE <IoIosArrowForward />
              </p>
            </div>
          ) : (
            <div className="no-show card" key={card.id}>
              <img
                src={card.image}
                alt={`${card.name} logo`}
                height={"100px"}
              />
              <p>{card.name}</p>
              <button
                className="open"
                onClick={e => {
                  handleOpen(card.name);
                }}
              >
                +
              </button>
            </div>
          )}
        </>
      ))}
    </CardsDiv>
  );
}