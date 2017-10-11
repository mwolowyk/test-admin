import React from 'react';
import { List, Edit, Show, Create, Datagrid, ReferenceField,
    TextField, EditButton, ShowButton, DisabledInput, LongTextInput,
    ReferenceInput, SelectInput, SimpleForm, SimpleList, ImageField, SelectField,
    Filter, TextInput, Responsive, SingleFieldList, ChipField, SimpleShowLayout, RichTextField, ReferenceManyField
} from 'admin-on-rest';

const BrandFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

export const BrandList = (props) => (
    <List {...props} filters={<BrandFilter />}>
            <Datagrid>
                <TextField label="id" source="id"/>
                <TextField label="name" source="name"/>
                <TextField label="description" source="description"/>
                <EditButton/>
                <ShowButton/>
            </Datagrid>
    </List>
);

const BrandTitle = ({ record }) => {
    return <span>Brand {record ? `"${record.name}"` : ''}</span>;
};

export const BrandShow = (props) => (
    <Show title={<BrandTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export const BrandEdit = (props) => (
    <Edit title={<BrandTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Create>
);

