import {
  __customer_form_page,
  __customer_form_path,
  __filter_images_page,
  __filter_images_path,
  __item_list_page,
  __item_list_path,
  __item_description_page,
  __item_description_path,
  __profile_page,
  __profile_page_path,
} from "../constants";
import ItemList from "../containers/ItemList/ItemList";
import ItemListDetails from "../containers/ItemListDetails/ItemListDetails";
import Profile from "../containers/ProfilePage/ProfilePage";
import ImageFilter from "../containers/SearchImage/SearchImage";
import CustomerForm from "../containers/CustomerForm/CustomerForm";

const routes = [
  {
    name: __item_list_page,
    path: __item_list_path,
    strict: true,
    exact: true,
    component: ItemList,
  },
  {
    name: __item_description_page,
    path: __item_description_path,
    strict: true,
    exact: true,
    component: ItemListDetails,
  },
  {
    name: __profile_page,
    path: __profile_page_path,
    strict: true,
    exact: true,
    component: Profile,
  },
  {
    name: __filter_images_page,
    path: __filter_images_path,
    strict: true,
    exact: true,
    component: ImageFilter,
  },
  {
    name: __customer_form_page,
    path: __customer_form_path,
    strict: true,
    exact: true,
    component: CustomerForm,
  },
];

export default routes;
