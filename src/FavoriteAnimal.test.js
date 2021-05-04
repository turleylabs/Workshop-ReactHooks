import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {FavoriteAnimal} from './FavoriteAnimal'

it("should display the person's favorite animal", () => {
    render(<FavoriteAnimal />);

    userEvent.type(screen.getByRole('textbox', {name: /name/i}), "Steve");
    userEvent.type(screen.getByRole('textbox', {name: /animal/i}), "Polar Bear");

    expect(screen.getByText("Hi Steve, your favorite animal is a Polar Bear")).toBeInTheDocument(); 
});

xit("should display the same content after page reload", () => {
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('animal');
    const {rerender} = render(<FavoriteAnimal />);
    expect(screen.queryByText("Hi Steve, your favorite animal is a Polar Bear")).not.toBeInTheDocument(); 

    userEvent.type(screen.getByRole('textbox', {name: /name/i}), "Steve");
    userEvent.type(screen.getByRole('textbox', {name: /animal/i}), "Polar Bear");

    rerender(<FavoriteAnimal key="new" />)

    expect(screen.getByText("Hi Steve, your favorite animal is a Polar Bear")).toBeInTheDocument(); 
});


