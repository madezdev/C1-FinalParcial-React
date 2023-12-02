import { Card } from '../card/Card'
import { useOdontContext } from '../../context/OdontContext'

export const CardList = () => {
  const { state } = useOdontContext();
  return (
    <>
      {state.odontologos.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </>
  );
};

