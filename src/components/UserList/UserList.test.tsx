import { render, screen } from '@testing-library/react';
import React from 'react';
import UserList from './UserList';

describe('UserLists tests', () => {
  const fakeDataForUser = [
    {
      country: 'Belarus',
      name: 'Name',
      lastName: 'LastName',
      gender: 'Gender',
      birthday: '12.12.2000',
      file: 'https://avatars.mds.yandex.net/i?id=efb2eb313793b8dad23401178522d1923b3b2f34-7975524-images-thumbs&n=13',
    },
  ];
  test('UserList first test', () => {
    render(<UserList users={fakeDataForUser} />);
    screen.debug();
    expect(screen.getAllByText(/Country/gi)).toHaveLength(1);
  });
});
