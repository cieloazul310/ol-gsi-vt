function zoomToResolution(zoom: number) {
  return 156543 / Math.pow(2, zoom);
}

export default zoomToResolution;
