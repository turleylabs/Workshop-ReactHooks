import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
 import App from './tic-tac-toe'

beforeEach(() => {
  window.localStorage.removeItem('squares');
})

test('can play a game of tic tac toe', () => {
  const {rerender} = render(<App />)
  // prettier-ignore
  let [
    s1, s2, s3,
    s4, s5, s6,
    s7, s8, s9 // eslint-disable-line no-unused-vars
  ] = Array.from(screen.queryAllByRole('button'))
  expect(screen.getByText('Next player: X')).toBeInTheDocument()

  userEvent.click(s1)
  expect(s1).toHaveTextContent('X')

  expect(screen.getByText('Next player: O')).toBeInTheDocument()
  userEvent.click(s5)
  expect(s5).toHaveTextContent('O')

  expect(screen.getByText('Next player: X')).toBeInTheDocument()
  userEvent.click(s9)
  expect(s9).toHaveTextContent('X')

  expect(screen.getByText('Next player: O')).toBeInTheDocument()
  userEvent.click(s7)
  expect(s7).toHaveTextContent('O')

  rerender(<App key={"new"} />);
  [
    s1, s2, s3,
    s4, s5, s6,
    s7, s8, s9 // eslint-disable-line no-unused-vars
  ] = Array.from(screen.queryAllByRole('button'))

  expect(screen.getByText('Next player: X')).toBeInTheDocument()
  userEvent.click(s3)
  expect(s3).toHaveTextContent('X')

  expect(screen.getByText('Next player: O')).toBeInTheDocument()
  userEvent.click(s2)
  expect(s2).toHaveTextContent('O')

  expect(screen.getByText('Next player: X')).toBeInTheDocument()
  userEvent.click(s6)
  expect(s6).toHaveTextContent('X')

  // game is over so no more moves may be played
  expect(screen.getByText('Winner: X')).toBeInTheDocument()
  userEvent.click(s4)
  expect(s4).toHaveTextContent('')

  userEvent.click(screen.getByText('restart'))
  expect(s6).toHaveTextContent('')

})

test('does not change square value when it is clicked multiple times', () => {
  render(<App />)
  const [square1] = Array.from(screen.queryAllByRole('button'))

  userEvent.click(square1)
  userEvent.click(square1)
  expect(square1).toHaveTextContent('X')
})
