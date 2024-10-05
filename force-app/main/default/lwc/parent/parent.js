import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  obj = { msg: "hello" };
  videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

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
}
