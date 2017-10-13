import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
} from 'admin-on-rest'

import Dashboard from './Dashboard';
import authClient from './authClient';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AuthorQueryIcon from 'material-ui/svg-icons/social/person';

import {AuthorQueryList, AuthorQueryShow, AuthorQueryEdit} from "./sn/authorquery";

const App = () => (
    <Admin theme={getMuiTheme(getMuiTheme)} authClient={authClient} dashboard={Dashboard}  restClient={simpleRestClient('http://localhost:8765')}>
        <Resource name="authorqueries" list={AuthorQueryList}  icon={AuthorQueryIcon} show={AuthorQueryShow} edit={AuthorQueryEdit}/>
    </Admin>
);

export default App;