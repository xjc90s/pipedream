const common = require("../common-webhook.js");

module.exports = {
  ...common,
  key: "github-new-issue",
  name: "New Issue (Instant)",
  description: "Emit an event when a new issue is created in a repo",
  version: "0.0.3",
  methods: {
    ...common.methods,
    getEventNames() {
      return ["issues"];
    },
    getEventTypes() {
      return ["opened"];
    },
    generateMeta(data) {
      const ts = new Date(data.issue.created_at).getTime();
      return {
        id: data.issue.id,
        summary: `#${data.issue.number} ${data.issue.title} opened by ${data.sender.login}`,
        ts,
      };
    },
  },
};