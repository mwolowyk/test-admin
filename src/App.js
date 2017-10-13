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
    fetchUtils,
} from 'admin-on-rest'

import Dashboard from './Dashboard';
import authClient from './authClient';
import myApiRestClient from './restClient';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import ProductIcon from 'material-ui/svg-icons/image/collections';
import AuthorQueryIcon from 'material-ui/svg-icons/social/person';
import BrandIcon from 'material-ui/svg-icons/social/person';

import { PostList, PostEdit, PostCreate } from './examples/posts';
import { UserList } from './examples/users';
import { ProductList, ProductCreate, ProductEdit, ProductShow } from './dobos/products';
import { BrandList, BrandCreate, BrandEdit, BrandShow } from './dobos/brands';
import { CommentList } from './examples/comments';
import {AuthorQueryList, AuthorQueryShow} from "./sn/authorquery";

const httpClient = (url, options = {}) => {
    return fetchUtils.fetchJson(url, options);
};

const restClient = simpleRestClient('http://localhost:8765', httpClient);


const App = () => (
    <Admin theme={getMuiTheme(getMuiTheme)} authClient={authClient} dashboard={Dashboard}  restClient={simpleRestClient('http://localhost:8765')}>
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}  icon={PostIcon} />*/}
        {/*<Resource name="users" list={UserList}  icon={UserIcon}/>*/}
        {/*<Resource name="comments" list={CommentList}  icon={ProductIcon}/>*/}
        <Resource name="authorqueries" list={AuthorQueryList}  icon={AuthorQueryIcon} show={AuthorQueryShow}/>
    </Admin>
);

export default App;