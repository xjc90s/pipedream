const common = require("../common-webhook.js");

module.exports = {
  ...common,
  key: "github-new-or-updated-pull-request",
  name: "New or Updated Pull Request (Instant)",
  description: "Emit an event when a pull request is opened or updated",
  version: "0.0.1",
  methods: {
    ...common.methods,
    getEventNames() {
      return ["pull_request"];
    },
    getEventTypes() {
      return [
        "opened",
        "edited",
        "closed",
        "assigned",
        "unassigned",
        "review_requested",
        "review_request_removed",
        "ready_for_review",
        "converted_to_draft",
        "labeled",
        "unlabeled",
        "syncronize",
        "auto_merge_enabled",
        "auto_merge_disabled",
        "locked",
        "unlocked",
        "reopened",
      ];
    },
    generateMeta(data) {
      const ts = new Date(data.pull_request.updated_at).getTime();
      return {
        id: `${data.pull_request.id}${ts}`,
        summary: `${data.pull_request.title} ${data.action} by ${data.sender.login}`,
        ts,
      };
    },
  },
};