// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import LanguageCard from './LanguageCard';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LanguageCard
        name="JavaScript"
        slug="javascript"
        totalRepositories={2150}
        totalDevelopers={768}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with rank', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LanguageCard
        rank={1}
        name="JavaScript"
        slug="javascript"
        totalRepositories={2150}
        totalDevelopers={768}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without developers count', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LanguageCard rank={1} name="JavaScript" slug="javascript" totalRepositories={2150} />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
