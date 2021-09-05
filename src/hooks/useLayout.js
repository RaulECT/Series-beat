const useLayout = () => {
  function getCenter(node) {
    const x = node.offsetLeft + node.offsetWidth / 2;
    const y = node.offsetTop + node.offsetHeight / 2;
    
    return { x, y };
  }

  function distanceBetweenPoints(firstPoint, secondPoint) {
    const x = Math.pow(firstPoint.x - secondPoint.x, 2);
    const y = Math.pow(firstPoint.y - secondPoint.y, 2);
    
    return Math.sqrt(x + y);
  }

  return {getCenter, distanceBetweenPoints}
};

export default useLayout;