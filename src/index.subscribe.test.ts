import { createStore } from './index';

const initialState = {
  a: 'hello',
  name: {
    first: 'john',
    last: 'doe',
  },
};

describe('subscribe', () => {
  it('calls event when relevant state is changed', () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub = jest.fn();
    subscribe('a', mockSub);

    updateState(d => {
      d.a = 'changed';
    });

    expect(mockSub).toBeCalledTimes(1);
  });

  it('calls subscribed deep property event when relevant state is changed', () => {
    const newA = 'Broseph';
    const mockSub = jest.fn();

    const { updateState, subscribe } = createStore(initialState);

    subscribe(['name', 'first'], mockSub);
    const newState = updateState(d => {
      d.name.first = newA;
    });
    expect(newState.name.first).toBe(newA);
    // once for 'name', once for 'first'
    expect(mockSub).toBeCalledTimes(2);
  });

  it('calls subscribed event when relevant state is changed with different param versions', () => {
    const newA = 'world';
    const mockSub = jest.fn();

    const { updateState, subscribe } = createStore(initialState);

    subscribe('a', mockSub);
    subscribe(['a'], mockSub);

    const newState = updateState(d => {
      d.a = newA;
    });

    expect(newState.a).toBe(newA);
    expect(mockSub).toBeCalledTimes(2);
  });

  it("doesn't call event when irrelevant state is changed", () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub1 = jest.fn();
    const mockSub2 = jest.fn();
    subscribe(['name', 'first'], mockSub1);
    subscribe(['name', 'last'], mockSub2);

    updateState(d => {
      d.name.first = 'changed';
    });

    expect(mockSub1).toBeCalledTimes(2);
    expect(mockSub2).toBeCalledTimes(1);
  });

  it('calls event with new state', () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub = jest.fn();
    subscribe('a', mockSub);

    const newState = updateState(d => {
      d.a = 'changed';
    });

    expect(mockSub).toBeCalledWith(newState.a);
  });

  it('calls multiple events', () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub1 = jest.fn();
    const mockSub2 = jest.fn();
    subscribe('a', mockSub1);
    subscribe('a', mockSub2);
    updateState(d => {
      d.a = 'changed';
    });
    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(1);
  });

  it('calls event when parent changes', () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub = jest.fn();
    subscribe(['name', 'first'], mockSub);

    updateState(d => {
      d.name = {
        first: 'new',
        last: 'changed',
      };
    });

    expect(mockSub).toBeCalledTimes(1);
  });

  it('calls event when child changes', () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub = jest.fn();
    subscribe('name', mockSub);
    updateState(d => {
      d.name.first = 'changed';
    });
    expect(mockSub).toBeCalledTimes(1);
  });

  it("it doesn't call event after unsubscribe", () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub = jest.fn();
    const unsub = subscribe('a', mockSub);

    updateState(d => {
      d.a = 'changed';
    });

    expect(mockSub).toBeCalledTimes(1);

    unsub();

    updateState(d => {
      d.a = 'changed again';
    });
    expect(mockSub).toBeCalledTimes(1);
  });

  it("it doesn't call event after unsubscribe but still calls other events", () => {
    const { updateState, subscribe } = createStore(initialState);

    const mockSub1 = jest.fn();
    const mockSub2 = jest.fn();
    const unsub1 = subscribe('a', mockSub1);
    const unsub2 = subscribe('a', mockSub2);

    updateState(d => {
      d.a = 'changed';
    });

    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(1);

    unsub1();

    updateState(d => {
      d.a = 'changed again';
    });

    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(2);
  });

  it("it doesn't unsubscribe the wrong event with different param types 1", () => {
    const mockSub1 = jest.fn();
    const mockSub2 = jest.fn();

    const { updateState, subscribe } = createStore(initialState);

    const unsub1 = subscribe('a', mockSub1);
    const unsub2 = subscribe(['a'], mockSub2);

    updateState(d => {
      d.a = 'changed';
    });
    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(1);

    unsub1();

    updateState(d => {
      d.a = 'changed again';
    });
    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(2);
  });

  it("it doesn't unsubscribe the wrong event with different param types 2", () => {
    const mockSub1 = jest.fn();
    const mockSub2 = jest.fn();

    const { updateState, subscribe } = createStore(initialState);

    const unsub1 = subscribe('a', mockSub1);
    const unsub2 = subscribe(['a'], mockSub2);

    updateState(d => {
      d.a = 'changed';
    });
    expect(mockSub1).toBeCalledTimes(1);
    expect(mockSub2).toBeCalledTimes(1);

    unsub2();

    updateState(d => {
      d.a = 'changed again';
    });
    expect(mockSub1).toBeCalledTimes(2);
    expect(mockSub2).toBeCalledTimes(1);
  });
});
