const handleKeyPress = (evt) => {
  switch (evt.code) {
    case "KeyA":
      const audioAKey = new Audio("./white_keys/A.mp3");
      audioAKey.play();
      break;
    case "KeyS":
      const audioSKey = new Audio("./white_keys/S.mp3");
      audioSKey.play();
      break;
    case "KeyD":
      const audioDKey = new Audio("./white_keys/D.mp3");
      audioDKey.play();
      break;
    case "KeyF":
      const audioFKey = new Audio("./white_keys/F.mp3");
      audioFKey.play();
      break;
    case "KeyG":
      const audioGKey = new Audio("./white_keys/G.mp3");
      audioGKey.play();
      break;
    case "KeyH":
      const audioHKey = new Audio("./white_keys/H.mp3");
      audioHKey.play();
      break;
    case "KeyJ":
      const audioJKey = new Audio("./white_keys/J.mp3");
      audioJKey.play();
      break;
    default:
      console.warn("None of the piano keys was pressed");
      break;
  }
};
document.addEventListener("keydown", handleKeyPress);
