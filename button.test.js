import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button with the provided label', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={onClick} />);

    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('executes the onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={onClick} />);

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});