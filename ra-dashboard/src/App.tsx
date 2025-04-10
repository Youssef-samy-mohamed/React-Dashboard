import { Admin, ListGuesser, Resource, DataProvider, EditGuesser } from "react-admin";
import  {ReportList} from "./components/reports/ReportList.jsx";
import {ReportCreate} from "./components/reports/ReportCreate.jsx";

import ReportsIcons from '@mui/icons-material/Report';
import CommentsIcons from '@mui/icons-material/Comment';



type AppProps = number | string | undefined;


const fetchingDataProvider: DataProvider = {
  getList: async (resource: string) => {
    const response = await fetch(`http://localhost:3001/${resource}`);
    const data = await response.json();
    return {
      data,
      total: data.length,
    };
  },

  // Minimal implementations of other required methods
  getOne: async (resource: string, params: { id: AppProps }) => {
    const response = await fetch(
      `http://localhost:3001/${resource}/${params.id}`
    );
    const data = await response.json();
    return { data };
  },

  getMany: async (resource: string, params: { ids: AppProps[] }) => {
    const response = await fetch(
      `http://localhost:3001/${resource}?ids=${params.ids.join(",")}`
    );
    const data = await response.json();
    return { data };
  },

  getManyReference: async () => {
    throw new Error("Function not implemented.");
  },

  create: async () => {
    throw new Error("Function not implemented.");
  },

  update: async () => {
    throw new Error("Function not implemented.");
  },

  updateMany: async () => {
    throw new Error("Function not implemented.");
  },

  delete: async () => {
    throw new Error("Function not implemented.");
  },

  deleteMany: async () => {
    throw new Error("Function not implemented.");
  },
};

const App = () => {
  return (
    <Admin dataProvider={fetchingDataProvider}>
      <Resource
        name="reports"
        list={ReportList}
        edit={EditGuesser}
        create={ReportCreate}
        icon={ReportsIcons}
        
      />
      <Resource name="comments" list={ListGuesser} icon={CommentsIcons} />

    </Admin>
  );
};

export default App;
