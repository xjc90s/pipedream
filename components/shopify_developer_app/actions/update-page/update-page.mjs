import shopify from "../../shopify_developer_app.app.mjs";
import common from "@pipedream/shopify/actions/update-page/update-page.mjs";

import { adjustPropDefinitions } from "../../common/utils.mjs";

const {
  name, description, type, ...others
} = common;
const props = adjustPropDefinitions(others.props, shopify);

export default {
  ...others,
  key: "shopify_developer_app-update-page",
  version: "0.0.11",
  name,
  description,
  type,
  props: {
    shopify,
    ...props,
  },
};
