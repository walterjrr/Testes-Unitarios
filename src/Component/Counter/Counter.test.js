import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from ".";


describe('component Description', () => {
  test('must start with the value 0', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).toBeInTheDocument();
  })

  test('must have class counter_title', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).toHaveClass('counter__title');
  })

  test('must not have class with decrement', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).not.toHaveClass('counter__titleIncrement');
    expect(CounterTitlle).not.toHaveClass('counter__titleDecrement');
  })

  test('must have an increment button', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toBeInTheDocument();
    
  })

  test(' must have an increment class on the button', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toHaveClass('button');
    expect(ButtonIncrement).toHaveClass('buttonIncrement');
    
  })

  test('must have an decrement button', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toBeInTheDocument();
    
  })

  test('must have an decrement class on the button', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /decrement/i,
    });

    expect(ButtonDecrement).toHaveClass('button');
    expect(ButtonDecrement).toHaveClass('buttonDecrement');
    
  })

  test('should increment when clicking the increment button', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(ButtonIncrement)
    expect(screen.getByText('1')).toBeInTheDocument();
    
  })

  test('should decrement when clicking the decrement button', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /decrement/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(ButtonDecrement)
    expect(screen.getByText('-1')).toBeInTheDocument();
    
  })

  test('must add counter__title--increment class when value is greater than 0', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass('counter__titleIncrement')
    userEvent.click(ButtonIncrement)
    expect(screen.getByText('1')).toHaveClass('counter__titleIncrement');
    
  })

  test('must add counter__title--decrement class when value is greater than 0', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /Decrement/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass('counter__titleDecrement')
    userEvent.click(ButtonDecrement)
    expect(screen.getByText('-1')).toHaveClass('counter__titleDecrement');
    
  })

})