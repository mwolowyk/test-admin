import React from 'react';
import { List, Edit, Show, Create, Datagrid, ReferenceField,
    TextField, EditButton, ShowButton, DisabledInput, LongTextInput,
    ReferenceInput, SelectInput, SimpleForm, SimpleList, ImageField, SelectField,
    Filter, TextInput, Responsive, SingleFieldList, ChipField, SimpleShowLayout, RichTextField, ReferenceManyField
} from 'admin-on-rest';

const AuthorQueryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const AuthorQueryList = (props) => (
    <List {...props} filters={<AuthorQueryFilter />}>
        <Responsive small={
            <SimpleList primaryText={record => record.articleTitle}
                        secondaryText={record => record.authorEmail}
                        tertiaryText={record => record.journalTitle}/>
        } medium={
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
        }>
        </Responsive>
    </List>
);

const AuthorQueryTitle = ({ record }) => {
    return <span>{record ? `AuthorQuery of ${record.authorEmail} for "${record.articleTitle} (in ${record.journalTitle})"` : ''}</span>;
};

export const AuthorQueryShow = (props) => (
    <Show title={<AuthorQueryTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="doi"/>
            <TextField label="author email" source="authorEmail"/>
            <TextField label="journal No" source="journalNo"/>
            <TextField label="journal Title" source="journalTitle"/>
            <TextField label="article Title" source="articleTitle"/>
        </SimpleShowLayout>
    </Show>
);

export const AuthorQueryEdit = (props) => (
    <Edit title={<AuthorQueryTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextField source="doi"/>
            <TextField label="author email" source="authorEmail"/>
            <TextField label="journal No" source="journalNo"/>
            <TextField label="journal Title" source="journalTitle"/>
            <TextField label="article Title" source="articleTitle"/>
        </SimpleForm>
    </Edit>
);
