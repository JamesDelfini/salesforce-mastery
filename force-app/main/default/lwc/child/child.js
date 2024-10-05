import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  @api obj;

  get serializeObj() {
    return JSON.stringify(this.obj);
  }

  updateOriginal() {
    this.obj.msg += "!!!"; // throws an invalid mutation error
  }

  updateShallow() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.obj = { ...this.obj, msg: "Hello New World!" };
  }
}
