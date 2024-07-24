const BaseBG = () => (
  <div style={{
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, 
    backgroundImage: 'url(/BaseBG.png)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }}></div>
);

export default BaseBG;