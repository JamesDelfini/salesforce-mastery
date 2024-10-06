import { LightningElement } from "lwc";

export default class SlotDemo extends LightningElement {
  isRenderSampleSlot = true;

  handleSlotChange() {
    console.log("New slotted content has been added or removed!");
  }
}
