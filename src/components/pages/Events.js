import React from 'react';
import styled from 'styled-components';
import { Switch, NavLink, Route } from 'react-router-dom';

import MongoDB from './MongoDB';
import Express from './Express';
import ReactJS from './React';
import Node from './Node';
import data from '../../data/info.json';

const Events = () => {
  return (
    <EventsContainer>
      <div className='container py-5'>
        <h2 className='text-center mt-5 pt-3 pb-5 text-uppercase'>Events</h2>
        <NavLink
          exact
          to='/events/mongodb'
          className='badge badge-success mr-3 px-3 py-2'
        >
          Mongo DB
        </NavLink>
        <NavLink
          exact
          to='/events/express'
          className='badge badge-secondary mr-3 px-3 py-2'
        >
          Express
        </NavLink>
        <NavLink
          exact
          to='/events/react'
          className='badge badge-primary mr-3 px-3 py-2'
        >
          React
        </NavLink>
        <NavLink
          exact
          to='/events/node'
          className='badge badge-warning mr-3 px-3 py-2'
        >
          NodeJS
        </NavLink>
        <Switch>
          <Route
            exact
            path='/events/mongodb'
            render={() => <MongoDB data={data} />}
          />
          <Route
            exact
            path='/events/express'
            render={() => <Express data={data} />}
          />
          <Route
            exact
            path='/events/react'
            render={() => <ReactJS data={data} />}
          />
          <Route
            exact
            path='/events/node'
            render={() => <Node data={data} />}
          />
        </Switch>
      </div>
    </EventsContainer>
  );
};

export default Events;

const EventsContainer = styled.div`
  min-height: 100%;
  background: var(--deep-dark);
  color: var(--white);
`;
