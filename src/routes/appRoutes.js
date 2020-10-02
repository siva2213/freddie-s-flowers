import {
  __landing_path,
  __catalog_path,
  __catalog_details_path,
} from "../constants/routePaths";
import {
  __landing_page,
  __catalog_page,
  __catalog_details_page,
} from "../constants/pageNames";
import Landing from "../containers/LandingPage/LandingPage";
import Catalog from "../containers/Categories/Categories";
import CatalogDetails from "../containers/CategoriesDetails/CategoriesDetails";

const routes = [
  {
    name: __landing_page,
    path: __landing_path,
    strict: true,
    exact: true,
    component: Landing,
  },
  {
    name: __catalog_page,
    path: __catalog_path,
    strict: true,
    exact: true,
    component: Catalog,
  },
  {
    name: __catalog_details_page,
    path: __catalog_details_path,
    strict: true,
    exact: true,
    component: CatalogDetails,
  },
];

export default routes;
