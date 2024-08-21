import Control, { type Options as ControlOptions } from "ol/control/Control";
import LayerBase from "ol/layer/Base";

export type LayerControlOptions = ControlOptions & {
  layers: LayerBase[];
};

class LayerControl extends Control {
  layers: LayerBase[] = [];

  constructor(opt_options?: LayerControlOptions) {
    const options = opt_options || {};

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = "Layers";
    details.appendChild(summary);
    const fieldset = document.createElement("fieldset");
    details.appendChild(fieldset);

    const element = document.createElement("div");
    element.className = "layer-controler ol-unselectable ol-control";
    element.appendChild(details);

    super({
      element,
      // @ts-ignore
      target: options.target,
    });

    // @ts-ignore
    this.layers = options?.layers ?? [];

    this.layers.forEach((layer, index) => {
      layer.setVisible(index === 0);
      const { name } = layer.getProperties();
      const layerName = name ?? `layer-${index}`;

      const container = document.createElement("div");
      const radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "layer");
      radio.setAttribute("id", layerName);
      radio.setAttribute("value", layerName);
      if (layer.getVisible()) {
        radio.setAttribute("checked", "true");
      }
      container.appendChild(radio);

      const label = document.createElement("label");
      label.setAttribute("for", layerName);
      label.innerText = layerName;
      container.appendChild(label);

      fieldset.appendChild(container);

      radio.addEventListener("change", this.setVisibleLayer(index));
    });
  }

  private setVisibleLayer(index: number) {
    return () => {
      this.layers.forEach((lyr, idx) => {
        lyr.setVisible(idx === index);
      });
    };
  }
}

export default LayerControl;
