import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Nav from '../components/Nav';
import '../styles/Profile.css';
import ProfileRockets from '../components/ProfileRockets';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter(
    (rockets) => rockets.reserved !== false,
  );
  return (
    <>
      <Nav />
      <div className="tables">
        <Table className="table-bootstrap">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((e) => (
              <ProfileRockets key={e.id} name={e.name} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Profile;
