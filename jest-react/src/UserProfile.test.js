import React from 'react';
import { create } from 'react-test-renderer';
import UserProfile from './components/UserProfile';

it('renders correctly when there is a user', () => {
const user ={ name: 'john', email:'john@example.com'};
const tree = create(<UserProfile user={user} />).toJSON();
expect(tree).toMatchSnapshot();
});

it('renders correctly when there is no user', () => {
    const tree = create(<UserProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});