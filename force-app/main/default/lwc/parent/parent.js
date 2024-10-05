import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  obj = {
    msg: "hello"
  };

  get serializeObj() {
    return JSON.stringify(this.obj);
  }

  updateShallow() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.obj = { ...this.obj, msg: "Hello, World!" };

    console.log("[PARENT]: Update Shallow");
  }
}
