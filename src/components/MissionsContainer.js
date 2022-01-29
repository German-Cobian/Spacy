import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Mission from './Mission';
import { fetchMissions } from '../redux/missionsReducer';

const MissionsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMissions(dispatch)
  }, []);

 // const missionsStore = useSelector((store) => Object.values(store.missionsReducer.missions));
  const missionsStore = useSelector((store) => store.missionsReducer.missions);

  return (
    <div>
      <table className="table table-bordered">
        <thead >
          <tr>
            <th className="col-1">Mission</th>
            <th className="">Description</th>
            <th className="col2">Status</th>
            <th className="col-2">Join/Leave Mission</th>
          </tr>
        </thead>
        <tbody>
          {
            missionsStore.map((mission)=>(
              <Mission 
              key={mission.mission_id}
              id={mission.mission_id}
              mission_name ={mission.mission_name}
              description = {mission.description}
              status={mission.status}

              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MissionsContainer; 