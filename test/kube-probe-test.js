'use strict';

const test = require('tape');
const supertest = require('supertest');

const express = require('express');
const probe = require('../');

test('test defaults for readiness', (t) => {
  const app = express();
  probe(app);

  supertest(app)
    .get('/api/health/readiness')
    .expect(200)
    .then(response => {
      t.equal(response.text, 'OK', 'should just return OK for the text');
      t.end();
    });
});

test('test defaults for liveness', (t) => {
  const app = express();
  probe(app);

  supertest(app)
    .get('/api/health/liveness')
    .expect(200)
    .then(response => {
      t.equal(response.text, 'OK', 'should just return OK for the text');
      t.end();
    });
});

test('test different url and callback for readiness', (t) => {
  const app = express();
  const options = {
    readinessURL: '/different/api/ready',
    readinessCallback: (request, response) => {
      return response.send('Different Callback');
    }
  };

  probe(app, options);

  supertest(app)
    .get('/different/api/ready')
    .expect(200)
    .then(response => {
      t.equal(response.text, 'Different Callback', 'Different Callback shold be the new text');
      t.end();
    });
});

test('test different url and callback for liveness', (t) => {
  const app = express();
  const options = {
    livenessURL: '/different/api/ready',
    livenessCallback: (request, response) => {
      return response.send('Different Callback');
    }
  };

  probe(app, options);

  supertest(app)
    .get('/different/api/ready')
    .expect(200)
    .then(response => {
      t.equal(response.text, 'Different Callback', 'Different Callback shold be the new text');
      t.end();
    });
});