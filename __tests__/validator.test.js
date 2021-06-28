'use strict';

const validator = require('../src/middlewares/validator');

describe('validator', () => {
  it('returning query name', () => {
    let req = {
      query :{
        name : 'sukina',
      },
    };
    let res ={};
    let next = jest.fn();
    validator (req,res,next);
    expect (next).toHaveBeenCalledWith();
  });
  it ('handeling no query',() => {
    let req = {
      query :{
        name : '',
      },
    };
    let res = {};
    let next = jest.fn();
    validator (req,res,next);
    expect (next).toHaveBeenCalledWith('Query Name inValid');
  });
});
