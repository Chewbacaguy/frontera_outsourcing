import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        <h2 className={styles.heading2}>
          Our Platforms
          <br className="sm:block hidden" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {clients.map((client, index) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[120px] m-5 text-center`}>
              <div className="bg-gradient-to-b from-white via-3DBFD2/70 to-transparent p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={client.logo}
                  alt="client_logo"
                  className="w-[270px] h-[120px] object-contain rounded-lg transform hover:scale-105 transition-all duration-300"
                />
                <p className="text-white mt-3 text-xs italic">
                  <span className="underline text-blue-gradient">{client.type}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;