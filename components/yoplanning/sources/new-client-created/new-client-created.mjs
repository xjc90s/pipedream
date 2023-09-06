import common from "../common/polling.mjs";

export default {
  ...common,
  key: "yoplanning-new-client-created",
  name: "New Client Created",
  description: "Triggers when a new client is created. [See the documentation](https://yoplanning.pro/api/v3.1/swagger/)",
  type: "source",
  version: "0.0.2",
  dedupe: "unique",
  props: {
    ...common.props,
    teamId: {
      propDefinition: [
        common.props.app,
        "teamId",
      ],
    },
  },
  methods: {
    ...common.methods,
    getResourceFn() {
      return this.app.listClients;
    },
    getResourceFnArgs() {
      return {
        teamId: this.teamId,
        params: {
          ordering: "-last_update",
          last_update__gt: this.getLastUpdate(),
        },
      };
    },
    generateMeta(resource) {
      return {
        id: resource.id,
        summary: `New Client: ${resource.id}`,
        ts: Date.now(),
      };
    },
  },
};
