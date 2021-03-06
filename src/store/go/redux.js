import { connect } from "react-redux";

import * as actions from "./actions";

export default connect(
  ({ go, router }) => ({ go, router }),
  {
    ...actions
  }
);
