import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  @api obj;

  // Sample of `lwc:spread`. This is the best use case rather than using pure `object` when passing a data.
  // This is to avoid recreating the view for all the properties used in a view when the data is mutated.
  @api name;
  @api country;
  @api handleOnclick;

  constructor() {
    super();

    // Set the HTML Attribute to the c-child component
    this.setAttribute("tabindex", "0");
  }

  get serializeObj() {
    return JSON.stringify(this.obj);
  }

  updateOriginal() {
    this.obj.msg += "!!!"; // throws an invalid mutation error

    console.log("[CHILD]: Update Original");
  }

  updateShallow() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.obj = { ...this.obj, msg: "Hello New World!" };

    console.log("[CHILD]: Update Shallow");
  }
}
