import Control, { type Options as ControlOptions } from "ol/control/Control";
import Geolocation from "ol/Geolocation";

export type GeolocationControlOptions = ControlOptions & {
  geolocation: Geolocation;
};

class GeolocationControl extends Control {
  checked: boolean = false;

  geolocation: Geolocation | null = null;

  constructor(opt_options?: GeolocationControlOptions) {
    const options = opt_options || {};
    const button = document.createElement("button");
    button.innerHTML = "@";
    button.setAttribute("title", "現在地を表示");
    const element = document.createElement("div");
    element.className = "geolocation ol-unselectable ol-control";
    element.appendChild(button);
    super({
      element,
      // @ts-ignore
      target: options.target,
    });

    // @ts-ignore
    this.geolocation = options?.geolocation ?? null;
    button.addEventListener("click", this.toggleGeolocation, false);
  }

  private handleGeolocationError = () => {
    this.geolocation?.once("error", () => {
      this.checked = false;
      this.geolocation?.setTracking(false);
    });
  };

  private toggleGeolocation = () => {
    if (this.geolocation) {
      this.checked = !this.checked;
      this.geolocation.setTracking(this.checked);
    }
  };

  public setGeolocation(geolocation: Geolocation) {
    this.geolocation = geolocation;
    this.handleGeolocationError();
    return this;
  }
}

export default GeolocationControl;
