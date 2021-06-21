import {ensure, renamePropsObj} from './helpers.util';

describe('"Ensure" function test', () => {
  test('Should throw an error when passing "undefined" as an argument', () => {
    expect(ensure.bind(null, undefined)).toThrow(TypeError);
  });

  test('Should return the passed argument back', () => {
    expect(ensure(10)).toBe(10);
  });
});

describe('"RenamePropsObj" function test', () => {
  test('Should rename a property on an object', () => {
    const object = {name1: ''};

    renamePropsObj(object, {name1: 'name_1'});

    expect(Object.keys(object)[0]).toBe('name_1');
  });

  test('Should rename the properties of objects in the array', () => {
    const array = [
      {
        simple_name: 'simple_name',
        name: 'super_name',
      },
      {
        name: 'super_name',
        hard_name: 'hard_name',
      },
    ];

    renamePropsObj(array, {name: 'super_name'});

    expect(array[1]).toHaveProperty('super_name');
  });

  test('Should rename the property of the object to its default value', () => {
    const object = {vote_count: 5};

    renamePropsObj(object);
    expect(object).toHaveProperty('voteCount');
  });
});
