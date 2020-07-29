import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

/**
 *  This function registers FA Brand icons to the FA library
 *  @returns  '@fortawesome/fortawesome-svg-core" library
 *
 * */
export default function registerFaIcons() {
  library.add(fab);
}
