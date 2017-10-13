import React from 'react';
import { List, Edit, Show, Create, Datagrid, ReferenceField,
    TextField, EditButton, ShowButton, DisabledInput, LongTextInput,
    ReferenceInput, SelectInput, SimpleForm, SimpleList, ImageField, SelectField,
    Filter, TextInput, Responsive, SingleFieldList, ChipField, SimpleShowLayout, RichTextField, ReferenceManyField
} from 'admin-on-rest';

const AuthorQueryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

export const AuthorQueryList = (props) => (
    <List {...props} filters={<AuthorQueryFilter />}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            <TextField source="doi"/>
            <TextField label="author email" source="authorEmail"/>
            <TextField label="journal No" source="journalNo"/>
            <TextField label="journal Title" source="journalTitle"/>
            <TextField label="article Title" source="articleTitle"/>
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

const AuthorQueryTitle = ({ record }) => {
    return <span>AuthorQuery {record ? `"${record.name}"` : ''}</span>;
};

export const AuthorQueryShow = (props) => (
    <Show title={<AuthorQueryTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="id" source="authorQueryId"/>
            <TextField source="doi"/>
            <TextField label="author email" source="authorEmail"/>
            <TextField label="journal No" source="journalNo"/>
            <TextField label="journal Title" source="journalTitle"/>
            <TextField label="article Title" source="articleTitle"/>
        </SimpleShowLayout>
    </Show>
);
