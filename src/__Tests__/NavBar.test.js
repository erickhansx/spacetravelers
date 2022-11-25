import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

test('Render Navbar', () => {
  const renderNavbar = renderer
    .create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    )
    .toJSON();
  expect(renderNavbar).toMatchSnapshot();
});
