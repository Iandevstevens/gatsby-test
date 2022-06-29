import "./src/css/index.scss"
import { recordPage } from "./src/analytics"
export { wrapRootElement } from "./src/components/Apollo"

export const onRouteUpdate = ({ location, prevLocation }) => {
  recordPage(
    location.pathname,
    prevLocation ? prevLocation.pathname : null,
    location.search
  )
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
