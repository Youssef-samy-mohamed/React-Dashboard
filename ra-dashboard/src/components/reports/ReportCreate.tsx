import {
  DateInput,
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
export const ReportCreate = () => (
  <Create>
    {" "}
    <SimpleForm>
      {" "}
      <TextInput source="id" /> <TextInput source="name" />{" "}
      <NumberInput source="age" /> <DateInput source="lastSeen" />{" "}
      <TextInput source="location" /> <TextInput source="description" />{" "}
      <TextInput source="status" />{" "}
    </SimpleForm>{" "}
  </Create>
);
