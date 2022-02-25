import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from ".";


describe('descrição do component', () => {
  test('deve iniciar o titulo com o valor 0', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).toBeInTheDocument();
  })

  test('deve conter a classe Counter_title no titulo', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).toHaveClass('counter__title');
  })

  test('nao deve ter a classe com decremento ou incremento', () => {
    render(< Counter />);

    const CounterTitlle = screen.getByText('0');

    expect(CounterTitlle).not.toHaveClass('counter__titleIncrement');
    expect(CounterTitlle).not.toHaveClass('counter__titleDecrement');
  })

  test('deve ter um botao incrementar', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toBeInTheDocument();
    
  })

  test('deve ter uma classe incrementar no botao', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toHaveClass('button');
    expect(ButtonIncrement).toHaveClass('buttonIncrement');
    
  })

  test('deve ter um botao decrementar', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(ButtonIncrement).toBeInTheDocument();
    
  })

  test('deve ter uma classe decrementar no botao', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /decrement/i,
    });

    expect(ButtonDecrement).toHaveClass('button');
    expect(ButtonDecrement).toHaveClass('buttonDecrement');
    
  })

  test('deve incrementar ao clicar no botao incrementar', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(ButtonIncrement)
    expect(screen.getByText('1')).toBeInTheDocument();
    
  })

  test('deve decrementar ao clicar no botao decrementar', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /decrement/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(ButtonDecrement)
    expect(screen.getByText('-1')).toBeInTheDocument();
    
  })

  test('deve adcionar a classe counter__title--increment quando o valor for maior que 0', () => {
    render(< Counter />);

    const ButtonIncrement = screen.getByRole('button', {
      name: /increment/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass('counter__titleIncrement')
    userEvent.click(ButtonIncrement)
    expect(screen.getByText('1')).toHaveClass('counter__titleIncrement');
    
  })

  test('deve adcionar a classe counter__title--decrement quando o valor for menor que 0', () => {
    render(< Counter />);

    const ButtonDecrement = screen.getByRole('button', {
      name: /Decrement/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass('counter__titleDecrement')
    userEvent.click(ButtonDecrement)
    expect(screen.getByText('-1')).toHaveClass('counter__titleDecrement');
    
  })

})