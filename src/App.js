import React from 'react';
import { simpleRestClient, jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import Dashboard from './Dashboard';
import authClient from './authClient';
import myApiRestClient from './restClient';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import ProductIcon from 'material-ui/svg-icons/image/collections';
import BrandIcon from 'material-ui/svg-icons/action/card-giftcard';

import { PostList, PostEdit, PostCreate } from './examples/posts';
import { UserList } from './examples/users';
import { ProductList, ProductCreate, ProductEdit, ProductShow } from './dobos/products';
import { BrandList, BrandCreate, BrandEdit, BrandShow } from './dobos/brands';
import { CommentList } from './examples/comments';

const App = () => (
    <Admin theme={getMuiTheme(getMuiTheme)} authClient={authClient} dashboard={Dashboard}  restClient={simpleRestClient('http://localhost:8081/api/v1')}>
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}  icon={PostIcon} />*/}
        {/*<Resource name="users" list={UserList}  icon={UserIcon}/>*/}
        <Resource name="products" list={ProductList}  icon={ProductIcon} show={ProductShow} edit={ProductEdit} create={ProductCreate} remove={Delete}/>
        <Resource name="brands" list={BrandList}  icon={BrandIcon} show={BrandShow} edit={BrandEdit} create={BrandCreate} remove={Delete}/>
        {/*<Resource name="comments" list={CommentList}  icon={ProductIcon}/>*/}
    </Admin>
);

export default App;