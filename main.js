const handleKeyPress = (evt) => {
  switch (evt.code) {
    case 'KeyA':
      const audioAKey = new Audio('./white_keys/A.mp3');
      audioAKey.play();
      break;
    case 'KeyS':
      const audioSKey = new Audio('./white_keys/S.mp3');
      audioSKey.play();
      break;
    case 'KeyD':
      const audioDKey = new Audio('./white_keys/D.mp3');
      audioDKey.play();
      break;
    case 'KeyF':
      const audioFKey = new Audio('./white_keys/F.mp3');
      audioFKey.play();
      break;
    case 'KeyG':
      const audioGKey = new Audio('./white_keys/G.mp3');
      audioGKey.play();
      break;
    case 'KeyH':
      const audioHKey = new Audio('./white_keys/H.mp3');
      audioHKey.play();
      break;
    case 'KeyJ':
      const audioJKey = new Audio('./white_keys/J.mp3');
      audioJKey.play();
      break;
    case 'KeyW':
      const audioWKey = new Audio('./black_keys/W.mp3');
      audioWKey.play();
      break;
    case 'KeyE':
      const audioEKey = new Audio('./black_keys/E.mp3');
      audioEKey.play();
      break;
    case 'KeyT':
      const audioTKey = new Audio('./black_keys/T.mp3');
      audioTKey.play();
      break;
    case 'KeyY':
      const audioYKey = new Audio('./black_keys/Y.mp3');
      audioYKey.play();
      break;
    case 'KeyU':
      const audioUKey = new Audio('./black_keys/U.mp3');
      audioUKey.play();
      break;
    default:
      console.warn('None of the piano keys was pressed');
      break;
  }
};
document.addEventListener('keydown', handleKeyPress);
