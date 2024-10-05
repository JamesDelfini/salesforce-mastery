import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  obj = {
    msg: "hello"
  };

  get serializeObj() {
    return JSON.stringify(this.obj);
  }
}
