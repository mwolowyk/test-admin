import React from 'react';
import { List, Edit, Show, Create, Datagrid, ReferenceField,
    TextField, EditButton, ShowButton, DisabledInput, LongTextInput,
    ReferenceInput, SelectInput, SimpleForm, SimpleList, ImageField, SelectField,
    Filter, TextInput, Responsive, SingleFieldList, ChipField, SimpleShowLayout, RichTextField, ReferenceManyField,
    Card, CardMedia
} from 'admin-on-rest';

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

export const ProductList = (props) => (
    <List {...props} filters={<ProductFilter />}>
            <Datagrid>
                <TextField label="id" source="id"/>
                {/*<ReferenceField label="Brand" resource="brands" source="brand" reference="name">*/}
                    {/*<TextField source="name" />*/}
                {/*</ReferenceField>*/}
                <TextField label="brand" source="brand"/>
                <TextField label="ean-code" source="eanCode"/>
                <TextField label="name" source="name"/>
                <TextField label="description" source="description"/>
                <ChipField label="category" source="category"/>
                <TextField label="material" source="material"/>
                <TextField label="tags" source="tags"/>
                <img src="http://lorempixel.com/100/50" alt="" style={{ width: 'initial', minWidth: 'initial', maxWidth: '42em', maxHeight: '15em' }} />
                <EditButton/>
                <ShowButton/>
            </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.name}"` : ''}</span>;
};

export const ProductShow = (props) => (
    <Show title={<ProductTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <RichTextField source="description" />
            <TextField source="amount"/>
            <TextField source="currency"/>
            <ImageField source="images" title="Picture" />
            {/*<ReferenceManyField label="storeNames" source="items">*/}
                {/*<SingleFieldList>*/}
                    {/*<ChipField source="storeName" />*/}
                {/*</SingleFieldList>*/}
            {/*</ReferenceManyField>*/}
        </SimpleShowLayout>
    </Show>
);

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <LongTextInput source="description" />
            <TextField source="amount"/>
            <TextField source="currency"/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="description" />
            <TextField source="amount"/>
            <TextField source="currency"/>
            <SelectField source="currency" choices={[
                { id: 'EU', name: '€' },
                { id: 'US', name: '$' },
                { id: 'RU', name: 'RU' },
            ]} />
        </SimpleForm>
    </Create>
);

