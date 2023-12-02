import { useState, useEffect } from 'react'
import { CardList } from '../../components/cardList/CardList';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
          });
      }, []);
    
      return (
        
        <main className={`flex flex-col justify-center items-center overflow-x-hidden  `}>
          <h2 className='text-[32px] font-bold m-6'>Todos nuestros odontologos</h2>
          <section className='flex flex-wrap gap-4 justify-center items-center'>
            <CardList users={users} />
          </section>
        </main>
        
      );
    };

export default Home;