import React from 'react';
import { List,
    TextField, Datagrid
} from 'admin-on-rest';

export const CommentList = (props) => (
    <List {...props}>
            <Datagrid>
                <TextField label="name" source="name"/>
                <TextField label="email" source="email"/>
                <TextField label="body" source="body"/>
            </Datagrid>
    </List>
);
