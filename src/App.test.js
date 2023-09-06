import {render as rtlRender, screen} from '@testing-library/react'
import App from './app.js'
import userEvent from '@testing-library/user-event'


const render = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...rtlRender(ui),
  }
}


test('full app rendering/navigating', async () => {
  const {user} = render(<App />)
  expect(screen.getByText(/Natiq - Arabic Text to Speech/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Home/))

  expect(screen.getByText(/Natiq - Arabic Text to Speech/i)).toBeInTheDocument()

  await user.click(screen.getByText(/About/))

  expect(screen.getByText(/synthesized natural voice/i)).toBeInTheDocument()

  await user.click(screen.getByTestId('natiq'))

  expect(screen.getByText(/The supported language is Arabic/i)).toBeInTheDocument()
},10000)