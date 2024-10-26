/*
 * @author Hervé Guétin <www.linkedin.com/in/herveguetin>
 */
export default {
    count: 0,
    subscriber: null,
    init() {
      Zermatt.Event.on('event-1', () => console.log('🟢 event-1 received'));

      this.subscriber = Zermatt.Event.once(["event-1", "event-2"], (completedEvents) =>
        console.log(
          "Completed events: ",
          completedEvents.map((event) => event.type),
          completedEvents.map((event) => JSON.stringify(event.detail))
        )
      );
    },
    onInputChange() {
      this.count++;

      console.log('👉 onInputChange');
      console.log(`📈 Count: ${this.count}`);

      if (this.count === 3) {
        this.subscriber.off(["event-1"]);
      }
      if (this.count === 5) {
        this.subscriber.off(["event-2"]);
      }

      Zermatt.Event.dispatch("event-1", { message: "Event 1 dispatched" });

      new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
        Zermatt.Event.dispatch("event-2", { message: "Event 2 dispatched" });
      });
    },
  };
