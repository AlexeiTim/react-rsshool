import { render, screen } from '@testing-library/react';
import React from 'react';
import User from './User';

describe('User test', () => {
  const fakeDataForUser = {
    country: 'Belarus',
    name: 'Name',
    lastName: 'LastName',
    gender: 'Gender',
    birthday: '12.12.2000',
    file: 'https://avatars.mds.yandex.net/i?id=efb2eb313793b8dad23401178522d1923b3b2f34-7975524-images-thumbs&n=13',
  };
  test('Display user', () => {
    render(<User item={fakeDataForUser} />);
    expect(screen.getByText(/Country/gi)).toBeInTheDocument();
  });
});
