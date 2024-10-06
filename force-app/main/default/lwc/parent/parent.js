import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  // Set Properties on Child Components
  obj = { msg: "hello" };

  // Call Methods on Child Components
  videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  childProps = {
    // Spread Properties on Child Components
    name: "Dennis James Matildo",
    country: "USA",

    // Use lwc:spread With an Event Handler
    handleOnclick: this.spreadClick.bind(this),

    // Reflect HTML Attributes on a Child Component (as long as it is not @api and it is "All HTML attributes are reactive by default")
    className: "spanclass",
    id: "myspan"
  };

  get serializeObj() {
    return JSON.stringify(this.obj);
  }

  updateShallow() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.obj = { ...this.obj, msg: "Hello, World!" };

    console.log("[PARENT]: Update Shallow");
  }

  handlePlay() {
    this.template.querySelector("c-video-player").play();
    console.log("[PARENT]: Call Play() at videoPlayer Component");
  }

  handlePause() {
    this.template.querySelector("c-video-player").pause();
    console.log("[PARENT]: Call Pause() at videoPlayer Component");
  }

  spreadClick() {
    this.childProps = { name: "Lightning Web Components" };
  }
}
