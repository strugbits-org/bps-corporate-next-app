import { markPageLoaded } from "@/utils/utilityFunctions"

export default function Custom404() {
    markPageLoaded();
    return <h1>404 - Page Not Found</h1>
  }