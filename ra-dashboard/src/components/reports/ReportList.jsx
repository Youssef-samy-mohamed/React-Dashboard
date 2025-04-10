import { Datagrid, DateField, DeleteButton, EditButton, List, NumberField, ReferenceField, TextField } from "react-admin";

export const ReportList = () => (
  <List>
    <Datagrid rowClick={false}>
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="age" />
      <NumberField source="lastSeen" />
      <TextField source="location" />
      <TextField source="description" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
